import { PageLayout } from "../../components/layout/PageLayout/PageLayout";

interface Props {}

const ProfilePage: React.FC<Props> = () => {
  return (
    <PageLayout title="Profile">
      <div>Profile Content goes here</div>
    </PageLayout>
  );
};

export default ProfilePage;
