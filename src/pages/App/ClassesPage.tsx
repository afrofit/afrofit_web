import { Typography } from "@mui/material";
import { PageLayout } from "../../components/layout/PageLayout/PageLayout";
import { COLORS } from "../../constants/colors";

interface Props {}
const ClassesPage: React.FC<Props> = () => {
  return (
    <PageLayout title="Classes">
      <Typography sx={{ color: COLORS.whiteblue, fontSize: 18 }}>
        There are presently no classes available.
      </Typography>
    </PageLayout>
  );
};

export default ClassesPage;
