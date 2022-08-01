import { Typography } from "@mui/material";
import { PageLayout } from "../../components/layout/PageLayout/PageLayout";
import { COLORS } from "../../constants/colors";

interface Props {}
const MusicPage: React.FC<Props> = () => {
  return (
    <PageLayout title="Music">
      <Typography sx={{ color: COLORS.whiteblue, fontSize: 18 }}>
        Check back here for music mixes from DJ Mind D Gap and his partners.
      </Typography>
    </PageLayout>
  );
};

export default MusicPage;
