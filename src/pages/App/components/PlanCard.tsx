import { Box, Card, Grid, Typography } from '@mui/material'
import { COLORS } from '../../../constants/colors'
import VerifiedIcon from '@mui/icons-material/Verified'

interface Props {
  item: any
  onChangeSelectItem: any
  setPriceId: any
}
export const PlanCard: React.FC<Props> = ({
  item,
  onChangeSelectItem,
  setPriceId,
}) => {
  const changeStyle = () => {
    onChangeSelectItem(!item.isSelected)
    setPriceId(item.priceId)
  }

  return (
    <>
      <Grid item xs={12} sm={12} md={4} lg={6}>
        <Card
          onClick={changeStyle}
          sx={{
            width: '80%',
            height: '100%',
            margin: 'auto',
            backgroundColor: COLORS.dark_100,
            overflow: 'hidden',
            marginBottom: '30px',
            cursor: 'pointer',
            borderWidth: '2px',
            borderColor: item.isSelected ? COLORS.pink_200 : 'transparent',
            borderStyle: 'solid',
          }}
        >
          <div
            style={{ float: 'right', marginTop: '20px', marginRight: '20px' }}
          >
            {item.isSelected ? (
              <VerifiedIcon sx={{ color: COLORS.pink_200 }} />
            ) : (
              ''
            )}
          </div>

          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Typography
              sx={{
                marginLeft: '30px',
                marginTop: '10px',
                color: 'white',
                display: 'block',
              }}
            >
              {item.maintitle}
            </Typography>

            <Box
              sx={{
                float: 'right',
                marginLeft: '10px',
                width: '110px',
                marginTop: '6px',
              }}
            >
              <Typography
                sx={{
                  fontSize: '15px',
                  fontWeight: 'bold',
                  borderRadius: '8px',
                  backgroundColor: COLORS.pink_200,
                  margin: 'auto',
                  width: '100px',
                  textAlign: 'center',
                }}
              >
                {item.bestvalue}
              </Typography>
            </Box>
          </div>


          <Typography
            sx={{
              fontSize: '20px',
              fontWeight: 'bold',
              paddingLeft: '30px',
              marginTop: '5px',
              color: COLORS.fuschia,
            }}
          >
            <del style={{color:'#F73E3E'}}>
            {item.title1}
            </del>
              
            {" " +item.title}
          </Typography>

          <Box
            sx={{
              width: '153px',
              borderRadius: '8px',
              paddingLeft: '30px',
              marginTop: '10px',
              height: '20px',
            }}
          >
            <Typography
              sx={{
                fontSize: '15px',
                fontWeight: 'bold',
                borderRadius: '8px',
                paddingLeft: '10px',
                backgroundColor: COLORS.pink_200,
                overflow: 'hidden',
              }}
            >
              {item.trial}
            </Typography>
          </Box>

          <Box
            sx={{
              marginLeft: '30px',
              marginTop: '10px',
              color: 'white',
              paddingRight: '20px',
            }}
          >
            <Typography sx={{ marginBottom: 'px', marginTop: '10px' }}>
              {item.subtitle}
            </Typography>
            <Typography sx={{ marginBottom: '20px', marginTop: '5px' }}>
              {item.subtitle1}
            </Typography>
          </Box>
        </Card>
      </Grid>
    </>
  )
}
