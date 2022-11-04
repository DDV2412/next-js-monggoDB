import { NexPageWithLayout } from "./_app";
import { useState } from "react";
import Layout from "../components/Layout";
import HeadMeta from "../components/Head";

const Home: NexPageWithLayout = () => {
  return (
    <>
      <HeadMeta
        title="Home | UK Project"
        description="UK Project"
        author="UK Project"
        image=""
      />
      <Layout>
        <div>Home</div>
      </Layout>
    </>
  );
};

export default Home;
