import { NextPageWithLayout } from "./_app";
import HeadMeta from "../components/Head";
import MainLayout from "../components/MainLayout";

const About: NextPageWithLayout = () => {
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

export default About;
