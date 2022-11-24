import { Box, Grid, Stack, Typography } from "@mui/material";
import { Card } from "../../../components/Card/Card";
import { StyledImage } from "../../../components/StyledImage/StyledImage";
import { COLORS, ColorType } from "../../../constants/colors";
import ModelMale from "../../../assets/img/model_male.png";
import ModelFemale from "../../../assets/img/model_female.png";
import ModelFemale2 from "../../../assets/img/model_female2.png";

interface Props {
  title: string;
  subtitle: string;
  color?: ColorType;
  image: "one" | "two" | "three";
}
export const WelcomeCard: React.FC<Props> = ({
  title,
  color,
  image,
  subtitle,
}) => {
  const heroImage =
    image === "one" ? ModelMale : image === "two" ? ModelFemale : ModelFemale2;

  return (
    <Grid item xs={11.5} sm={8} md={4}>
      <Card height={320} padding={0} color={color}>
        <Box
          sx={{ position: "relative", height: 320, padding: 2, width: "100%" }}
        >
          <Box sx={{ position: "absolute", top: 0, left: 0, zIndex: 1 }}>
            <StyledImage size={550} src={heroImage} />
          </Box>

          <Box
            // sx={{ zIndex: 300 }}
            sx={{
              position: "absolute",
              top: 0,
              left: { xs: 0, md: 0 },
              width: "inherit",
              zIndex: 300,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
              height: "100%",
              padding: 1,
            }}
          >
            <Typography
              sx={{
                padding: 1,
                color: COLORS.white,
                fontWeight: 600,
                fontSize: 25,
                zIndex: 10,
                lineHeight: 1,
                // backgroundColor: COLORS.black,
                textAlign: "center",
              }}
            >
              {title}
            </Typography>
            <Typography
              sx={{
                padding: 1,
                color: COLORS.white,
                fontWeight: 500,
                fontSize: 16,
                zIndex: 10,
                lineHeight: 1.5,
                backgroundColor: COLORS.black,
                borderRadius: 2,
              }}
            >
              {subtitle}
            </Typography>
          </Box>
        </Box>
      </Card>
    </Grid>
  );
};
