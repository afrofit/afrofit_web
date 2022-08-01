import { Typography } from "@mui/material";
import { PageLayout } from "../../components/layout/PageLayout/PageLayout";
import { COLORS } from "../../constants/colors";

interface Props {}
const EventsPage: React.FC<Props> = () => {
  return (
    <PageLayout title="Events">
      <Typography sx={{ color: COLORS.whiteblue, fontSize: 18 }}>
        There are presently no events available.
      </Typography>
    </PageLayout>
  );
};

export default EventsPage;
