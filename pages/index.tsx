import { NextPageWithLayout } from "./_app";
import MainLayout from "../components/MainLayout";
import HeadMeta from "../components/Head";

const Home: NextPageWithLayout = () => {
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

export default Home;
