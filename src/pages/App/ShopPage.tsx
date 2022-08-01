import { Typography } from "@mui/material";
import { PageLayout } from "../../components/layout/PageLayout/PageLayout";
import { COLORS } from "../../constants/colors";

interface Props {}
const ShopPage: React.FC<Props> = () => {
  return (
    <PageLayout title="Shop">
      <Typography sx={{ color: COLORS.whiteblue, fontSize: 18 }}>
        Check back here for Afrofit-branded items at a heavily-discounted rates.
      </Typography>
    </PageLayout>
  );
};

export default ShopPage;
