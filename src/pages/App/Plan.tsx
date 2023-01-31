import { Grid, Box } from '@mui/material';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { SmallButton } from '../../components/Buttons/SmallButton';
import useScreenSizes from '../../hook/useScreenSizes';
import { selectUser } from '../../store/reducers/auth/auth.slice';
import { CreateStripeSession } from '../../store/reducers/payments/thunks/create-stripe-session.thunk';
import { PlanCard } from './components/PlanCard';
import Scrollbar from './components/Scrollbar';

const Plans = [
  {
    maintitle: '£4.99 PER MONTH',
    title1: '£9.98',
    title: '£4.99 for 1 month subscription',
    subtitle:
      'At the end of your trial your subscription will automatically rollover to a £4.99 monthly subscription unless cancelled prior.',
    trial: '7-Day Free Trial',
    bestVale: '',
    isSelected: false,
    priceId: 'price_1MGgcXG7Ijvv33NLui6mDhQ7',
    subtitle1: 'You can cancel at anytime.',
  },
  {
    maintitle: '£3.33 PER MONTH',
    title1: '19.98',
    title: '£9.99 for 3 months subscription',
    subtitle:
      'At the end of your trial your subscription will automatically rollover to a £9.99 three months subscription unless cancelled prior.',
    trial: '7-Day Free Trial',
    bestVale: '',
    isSelected: false,
    priceId: 'price_1MGgg3G7Ijvv33NL44XvLhnY',
    subtitle1: 'You can cancel at anytime.',
  },
  {
    maintitle: '£3.33 PER MONTH',
    title1: '39.98',
    title: '£19.99 for 6 months subscription',
    subtitle:
      'At the end of your trial your subscription will automatically rollover to a £19.99 six months subscription unless cancelled prior.',
    trial: '7-Day Free Trial',
    bestVale: '',
    isSelected: false,
    priceId: 'price_1MGggxG7Ijvv33NLoxKZ9JE4',
    subtitle1: 'You can cancel at anytime.',
  },
  {
    maintitle: '£3.25 PER MONTH',
    title1: '79.98',
    title: '£39.00 for annual subscription',
    subtitle:
      'At the end of your trial your subscription will automatically rollover to a £39.00 annually subscription unless cancelled prior.',
    trial: '7-Day Free Trial',
    bestVale: 'Best Value',
    isSelected: false,
    priceId: 'price_1MGghnG7Ijvv33NLY0BTnTYU',
    subtitle1: 'You can cancel at anytime.',
  },
];

function Plan() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentUser = useSelector(selectUser);

  const [PlanData, setPlanData] = useState(Plans);
  const [showData, setShowData] = useState(false);
  const [priceId, setPriceId] = useState('');

  const { isMobile, isMobileM, isMobileL, isTablet, isLaptop } =
    useScreenSizes();

  const handleSubmit = async () => {
    if (currentUser) {
      const { email, userId } = currentUser;
      dispatch(CreateStripeSession(userId, email, priceId));
    } else {
      navigate(`/register?plan=${priceId}`);
    }
  };

  const changeSelectedValue = (index: any, Value: any) => {
    var data = [...PlanData];
    var updateData = data.map((item, itemIndex) => {
      if (itemIndex === index) {
        item.isSelected = true;
        setShowData(true);
      } else {
        item.isSelected = false;
      }
      return item;
    });
    setPlanData(updateData);
  };

  return (
    <>
      <Grid
        sx={
          isMobile || isMobileM || isMobileL || isTablet || isLaptop
            ? { height: '360px', marginBottom: '15px', overflow: 'auto' }
            : {}
        }
      >
        {PlanData.map((item, index) => {
          return (
            <PlanCard
              key={index}
              item={item}
              onChangeSelectItem={(res: any) => {
                changeSelectedValue(index, res);
              }}
              setPriceId={setPriceId}
            />
          );
        })}
      </Grid>
      {showData === true ? (
        <Box sx={{ margin: 'auto', textAlign: 'center' }}>
          <SmallButton
            title={'Next'}
            onClick={handleSubmit}
            color='purple_200'
          />
        </Box>
      ) : (
        ''
      )}
    </>
  );
}

export default Plan;
