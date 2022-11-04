import { NextPageWithLayout } from "./_app";
import MainLayout from "../components/MainLayout";
import HeadMeta from "../components/Head";
import Header from "../components/Header";

const Home: NextPageWithLayout = () => {
  return (
    <>
      <HeadMeta
        title="Home | UK Project"
        description="UK Project"
        author="UK Project"
      />
      <MainLayout>
        <Header />
        <div>Home</div>
      </MainLayout>
    </>
  );
};

export default Home;
