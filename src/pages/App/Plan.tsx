import {  Grid} from '@mui/material'
import { PlanCard } from './components/PlanCard'

function Plan() {
  return (
    <Grid item xs={12} sm={12} md={4} lg={6}>
      <PlanCard
        color={'black'}
        maintitle={'£4.99 PER MONTH'}
        title={'£4.99 billed Monthly'}
        subtitle={
          'At the end of your trial your subscription will automatically rollover to a £4.99 monthly subscription unless cancelled prior'
        }
        src={undefined}
        trial={'7-Day Free Trial'}
        bestvalue={undefined}
      />

      <PlanCard
        color={'black'}
        maintitle={'£3.33 PER MONTH'}
        title={' £9.99 billed every three months'}
        subtitle={
          'At the end of your trial your subscription will automatically rollover to a £9.99 three months subscription unless cancelled prior.'
        }
        src={undefined}
        trial={'7-Day Free Trial'}
        bestvalue={undefined}
      />

      <PlanCard
        color={'black'}
        maintitle={' £3.33 PER MONTH'}
        title={'£19.99 billed every six months'}
        subtitle={
          'At the end of your trial your subscription will automatically rollover to a £19.99 six months subscription unless cancelled prior.'
        }
        src={undefined}
        trial={'7-Day Free Trial'}
        bestvalue={undefined}
      />

      <PlanCard
        color={'black'}
        maintitle={'£3.25 PER MONTH'}
        title={'£39.00 billed annuallys'}
        subtitle={
          'At the end of your trial your subscription will automatically rollover to a £39.00 annually subscription unless cancelled prior.'
        }
        src={undefined}
        trial={'7-Day Free Trial'}
        bestvalue={'Best Value'}
      />
    </Grid>
  )
}

export default Plan
