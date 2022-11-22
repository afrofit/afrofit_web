import { Box, CircularProgress, Grid, Stack, Typography } from "@mui/material";
import { Card } from "../../../components/Card/Card";
import { COLORS, ColorType } from "../../../constants/colors";
import { formattedStat } from "../../../utils/formatters";
import { CardTitle, StatNumberText } from "./font.styled";

interface Props {
  title: string;
  value?: number;
  color?: ColorType;
}
export const StatsCard: React.FC<Props> = ({ title, value, color }) => {
  return (
    <Grid item xs={6} md={3}>
      <Card height={250} padding={4} justifyContent="center" color={color}>
        <Stack display="flex" flexDirection={"column"}>
          <CardTitle
            sx={{
              color: COLORS.whiteblue,
            }}
          >
            {title}
          </CardTitle>

          {value != null ? (
            <StatNumberText
              sx={{
                color: COLORS.gold,
              }}
            >
              {formattedStat(value)}
            </StatNumberText>
          ) : (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
                height: "100%",
                marginTop: 5,
              }}
            >
              <CircularProgress color="secondary" />
            </Box>
          )}
        </Stack>
      </Card>
    </Grid>
  );
};
