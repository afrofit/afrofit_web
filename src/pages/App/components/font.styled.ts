import { Typography } from "@mui/material";
import styled from "@emotion/styled";
import { COLORS } from "../../../constants/colors";

export const CardTitle = styled(Typography)`
  font-size: 25px;
  font-weight: 300;
  margin-bottom: 20px;
`;

export const StatNumberText = styled(Typography)`
  font-size: 60px;
  font-weight: 200;
  text-align: center;
  margin-bottom: 5px;
`;

export const SubscriptionNotificationText = styled(Typography)`
  font-size: 15px;
  font-weight: 300;
  text-align: center;
  color: ${COLORS.white};
`;
