import { Grid, Stack, Typography } from "@mui/material";
import { Card } from "../../../components/Card/Card";
import { COLORS, ColorType } from "../../../constants/colors";
import { CardTitle, StatNumberText } from "./font.styled";

interface Props {
  title: string;
  value: string | number;
  color?: ColorType;
}
export const StatsCard: React.FC<Props> = ({ title, value, color }) => {
  return (
    <Grid item xs={3}>
      <Card height={250} padding={4} justifyContent="center" color={color}>
        <Stack display="flex" flexDirection={"column"}>
          <CardTitle
            sx={{
              color: COLORS.whiteblue,
            }}
          >
            {title}
          </CardTitle>

          <StatNumberText
            sx={{
              color: COLORS.gold,
            }}
          >
            {value}
          </StatNumberText>
        </Stack>
      </Card>
    </Grid>
  );
};
