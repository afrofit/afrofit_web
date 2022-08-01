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
    <Grid item xs={4}>
      <Card height={320} padding={0} color={color}>
        <Box sx={{ position: "relative", height: 320, padding: 2 }}>
          <Box sx={{ position: "absolute", top: 0, left: -10 }}>
            <StyledImage size={350} src={heroImage} />
          </Box>

          <Box sx={{ position: "absolute", top: 30, left: 180 }}>
            <Typography
              sx={{
                color: COLORS.dark_200,
                fontWeight: 600,
                fontSize: 45,
                zIndex: 10,
                lineHeight: 1,
                marginBottom: 3,
              }}
            >
              {title}
            </Typography>
            <Typography
              sx={{
                color: COLORS.white,
                fontWeight: 400,
                fontSize: 18,
                zIndex: 10,
                lineHeight: 1.3,
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
