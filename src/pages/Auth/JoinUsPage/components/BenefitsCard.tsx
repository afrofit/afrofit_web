import { Box, Stack, Typography } from "@mui/material";
import { Card } from "../../../../components/Card/Card";
import { StyledImage } from "../../../../components/StyledImage/StyledImage";
import { COLORS, ColorType } from "../../../../constants/colors";

interface Props {
  color: ColorType;
  title: string;
  subtitle: string;
  src: any;
}
export const BenefitsCard: React.FC<Props> = ({
  color,
  title,
  subtitle,
  src,
}) => {
  return (
    <Card color={color} height={300}>
      <Stack display="flex" flexDirection={"row"} columnGap={2}>
        <StyledImage size={230} src={src} />
        <Box sx={{ color: COLORS.white }}>
          <Typography
            sx={{
              fontSize: 30,
              fontWeight: 500,
              lineHeight: 1.2,
              marginBottom: 1,
            }}
          >
            {title}
          </Typography>
          <Typography sx={{ fontSize: 20, lineHeight: 1.2 }}>
            {subtitle}
          </Typography>
        </Box>
      </Stack>
    </Card>
  );
};
