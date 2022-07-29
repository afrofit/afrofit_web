import { Grid, Stack, Typography } from "@mui/material";
import { Card } from "../../../components/Card/Card";
import { COLORS, ColorType } from "../../../constants/colors";

interface Props {
  title: string;
  value: string | number;
  color?: ColorType;
}
export const HomeBensCard: React.FC<Props> = ({ title, value, color }) => {
  return (
    <Grid item xs={4}>
      <Card height={100} padding={4} justifyContent="center" color={color}>
        <Stack display="flex" flexDirection={"column"}>
          <Typography
            sx={{
              color: COLORS.whiteblue,
            }}
          >
            {title}
          </Typography>

          <Typography
            sx={{
              color: COLORS.gold,
            }}
          >
            {value}
          </Typography>
        </Stack>
      </Card>
    </Grid>
  );
};
