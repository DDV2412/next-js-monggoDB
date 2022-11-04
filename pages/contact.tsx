import MainLayout from "../components/MainLayout";
import { NextPageWithLayout } from "./_app";
import HeadMeta from "../components/Head";

const Contact: NextPageWithLayout = () => {
  return (
    <>
      <HeadMeta
        title="Home | UK Project"
        description="UK Project"
        author="UK Project"
        image=""
      />
      <MainLayout>
        <div>Home</div>
      </MainLayout>
    </>
  );
};

export default Contact;
