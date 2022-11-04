import { NextPageWithLayout } from "../_app";
import React from "react";
import DashboardLayout from "../../components/DashboardLayout";
import HeadMeta from "../../components/Head";

const Dashboard: NextPageWithLayout = () => {
  return (
    <>
      <HeadMeta
        title="Dashboard | UK Project"
        description="UK Project"
        author="UK Project"
      />
      <DashboardLayout>
        <div>Dashboard</div>
      </DashboardLayout>
    </>
  );
};

export default Dashboard;
