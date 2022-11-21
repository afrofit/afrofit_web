import { Typography } from "@mui/material";
import { PageLayout } from "../../components/layout/PageLayout/PageLayout";
import { COLORS } from "../../constants/colors";

interface Props {}
const BlogPage: React.FC<Props> = () => {
  return (
    <PageLayout title="Blog">
      <Typography sx={{ color: COLORS.whiteblue, fontSize: 18 }}>
        There are presently no articles available.
      </Typography>
    </PageLayout>
  );
};

export default BlogPage;
