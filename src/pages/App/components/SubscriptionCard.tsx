import { Grid, Stack, Typography } from "@mui/material";
import { Card } from "../../../components/Card/Card";
import { COLORS, ColorType } from "../../../constants/colors";
import {
  CardTitle,
  StatNumberText,
  SubscriptionNotificationText,
} from "./font.styled";

interface Props {
  title: string;
  value: string | number;
  color?: ColorType;
}
export const SubscriptionCard: React.FC<Props> = ({ title, value, color }) => {
  return (
    <Grid item xs={3}>
      <Card height={100} padding={4} justifyContent="center" color={color}>
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
          <SubscriptionNotificationText>
            Renews 24 October, 2021
          </SubscriptionNotificationText>
        </Stack>
      </Card>
    </Grid>
  );
};
