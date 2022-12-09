import { Grid, Box } from '@mui/material'
import { loadStripe, Stripe } from '@stripe/stripe-js'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { SmallButton } from '../../components/Buttons/SmallButton'
import { PlanCard } from './components/PlanCard'

const Plans = [
  {
    maintitle: '£4.99 PER MONTH',
    title: '£4.99 billed Monthly ',
    subtitle:
      'At the end of your trial your subscription will automatically rollover to a £4.99 monthly subscription unless cancelled prior',
    trial: '7-Day Free Trial',
    bestVale: '',
    isSelected: false,
    apiid: 'price_1MD1E6SDRiBpbKJAYE458xqs',
  },
  {
    maintitle: '£3.33 PER MONTH',
    title: '£9.99 billed every three months',
    subtitle:
      'At the end of your trial your subscription will automatically rollover to a £9.99 three months subscription unless cancelled prior.',
    trial: '7-Day Free Trial',
    bestVale: '',
    isSelected: false,
    apiid: 'price_1MD2GESDRiBpbKJAn71Yb5Cg',
  },
  {
    maintitle: '£3.33 PER MONTH',
    title: '£19.99 billed every six months',
    subtitle:
      'At the end of your trial your subscription will automatically rollover to a £19.99 six months subscription unless cancelled prior.',
    trial: '7-Day Free Trial',
    bestVale: '',
    isSelected: false,
    apiid: 'price_1MD2JYSDRiBpbKJAEQJAK9Wf',
  },
  {
    maintitle: '£3.25 PER MONTH',
    title: '£39.00 billed annually',
    subtitle:
      'At the end of your trial your subscription will automatically rollover to a £39.00 annually subscription unless cancelled prior.',
    trial: '7-Day Free Trial',
    bestVale: 'Best Value',
    isSelected: false,
    apiid: 'price_1MD2KoSDRiBpbKJA7GPjpEfU',
  },
]

function Plan() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const token = localStorage.getItem('STORAGE_TOKEN_KEY_standin')

  const [stripeError, setStripeError] = useState(null)

  const [PlanData, setPlanData] = useState(Plans)
  const [showData, setShowData] = useState(false)
  const [apiId, setApiId] = useState('')
  // console.log('showData', apiId)

  const STRIPE_PUBLISHABLE_KEY =
    'pk_test_51MC0LySDRiBpbKJAVFMhNmB8cbDYJNOUI77xWNbwrm8cxmGF3rhSushliKGSo68Vn6vREfWKKblr3Sjve0S8NTRG00Yq5xx3XI'

  let stripePromise: Promise<Stripe | null>
  const getStripe = () => {
    if (!stripePromise) {
      stripePromise = loadStripe(STRIPE_PUBLISHABLE_KEY)
    }

    return stripePromise
  }

  const item = {
    price: apiId,
    quantity: 1,
  }

  const checkoutOptions: {
    lineItems: {
      price: string
      quantity: number
    }[]
    mode: 'payment' | 'subscription' | undefined
    successUrl: string
    cancelUrl: string
  } = {
    lineItems: [item],
    mode: 'subscription',
    successUrl: `${window.location.origin}/about?session_id={CHECKOUT_SESSION_ID}`,
    cancelUrl: `${window.location.origin}/plan`,
  }

 

  const redirectToCheckout = async () => {
    console.log('redirectToCheckout')

    const stripe = await getStripe()
    const stripeCheckoutResponse = await stripe?.redirectToCheckout(
      checkoutOptions,
    )
    token ? navigate('/about') : navigate('/register')
    console.log('Stripe checkout error', stripeCheckoutResponse)

  }

  const changeSelectedValue = (index: any, Value: any) => {
    var data = [...PlanData]
    var updateData = data.map((item, itemIndex) => {
      if (itemIndex === index) {
        item.isSelected = true
        setShowData(true)
      } else {
        item.isSelected = false
      }
      return item
    })
    setPlanData(updateData)
  }

  return (
    <>
      <Grid item xs={12} sm={12} md={4} lg={6}>
        {PlanData.map((item, index) => {
          return (
            <PlanCard
              key={index}
              item={item}
              onChangeSelectItem={(res: any) => {
                changeSelectedValue(index, res)
              }}
              setApiId={setApiId}
            />
          )
        })}
      </Grid>
      {showData === true ? (
        <Box sx={{ margin: 'auto', textAlign: 'center' }}>
          <SmallButton
            title={'Next'}
            onClick={redirectToCheckout}
            color="purple_200"
          />
        </Box>
      ) : (
        ''
      )}
    </>
  )
}

export default Plan
