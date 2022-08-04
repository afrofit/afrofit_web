import * as React from "react";
import { CircularProgress, Grid, Stack, Typography } from "@mui/material";
import { Card } from "../../../components/Card/Card";
import { StyledAvatar } from "../../../components/StyledAvatar/StyledAvatar";
import { COLORS } from "../../../constants/colors";

import { UserModel } from "../../../types/UserModel";
import { formatDate } from "../../../utils/formatters";

interface Props {
  currentUser?: UserModel;
  onChangeDp: () => void;
}

export const IdentCard: React.FC<Props> = ({ currentUser, onChangeDp }) => {
  React.useEffect(() => {
    console.log("currentUser", currentUser);
  }, [currentUser]);

  const picId = currentUser?.displayPicId ? currentUser.displayPicId : 1;

  return (
    <Grid item xs={8}>
      <Card
        height={300}
        padding={6}
        justifyContent="center"
        alignItems="center"
      >
        {!currentUser ? (
          <>
            <CircularProgress />
            <Typography
              sx={{ color: COLORS.white, fontSize: 20, fontWeight: 500 }}
            >
              No user information found!
            </Typography>
          </>
        ) : (
          <>
            <StyledAvatar
              src={require(`../../../assets/img/dp/${picId}.png`)}
              size={250}
              mb={0}
              mr={6}
              onClick={onChangeDp}
            />

            <Stack
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "center",
                flex: 1,
                color: COLORS.white,
              }}
            >
              <Typography
                sx={{
                  fontSize: 45,
                  fontWeight: 400,
                  color: COLORS.orange_200,
                  marginBottom: -1,
                }}
              >
                {currentUser.firstName} {currentUser.lastName}
              </Typography>
              <Typography
                sx={{
                  fontSize: 25,
                  fontWeight: 300,
                  color: COLORS.orange_100,
                  marginBottom: 2,
                }}
              >
                @{currentUser.username}
              </Typography>
              <Typography
                sx={{ fontSize: 20, fontWeight: 400, marginBottom: 1 }}
              >
                {currentUser.email}
              </Typography>
              <Typography
                sx={{
                  fontSize: 15,
                  fontWeight: 500,
                  letterSpacing: 3,
                  color: COLORS.whiteblue,
                  textTransform: "uppercase",
                }}
              >
                Member since {formatDate(currentUser.joinDate)}
              </Typography>
            </Stack>
          </>
        )}
      </Card>
    </Grid>
  );
};
