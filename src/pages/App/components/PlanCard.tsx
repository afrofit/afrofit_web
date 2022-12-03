import { Box, Card, Grid, Stack, Typography } from '@mui/material'
import { COLORS, ColorType } from '../../../constants/colors'
// import { Card } from "../../../../components/Card/Card";
// import { StyledImage } from "../../../../components/StyledImage/StyledImage";
// import { COLORS, ColorType } from "../../../../constants/colors";

interface Props {
  color: ColorType
  maintitle: string
  title: string
  subtitle: string
  src: any
  trial: any
  bestvalue: any
}
export const PlanCard: React.FC<Props> = ({
  color,
  title,
  subtitle,
  src,
  maintitle,
  trial,
  bestvalue,
}) => {
  return (
    <Grid item xs={12} sm={12} md={4} lg={6}>
      <Card
        sx={{
          width: '80%',
          height: '100%',
          margin: 'auto',
          backgroundColor: COLORS.dark_100,
          overflow: 'hidden',
          marginBottom: '30px',
          cursor: 'pointer',
          // borderColor:'white',
          borderWidth: '2px',
          borderColor: 'transparent',
          borderStyle: 'solid',
          '&:hover': {
            borderColor: COLORS.pink_200,
          },
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Typography
            sx={{
              marginLeft: '30px',
              marginTop: '10px',
              color: 'white',
              display: 'block',
            }}
          >
            {maintitle}
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
              {bestvalue}
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
          {title}
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
            {trial}
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
          <Typography sx={{ marginBottom: '20px', marginTop: '10px' }}>
            {subtitle}
          </Typography>
        </Box>
      </Card>
    </Grid>
  )
}
