import Layout from "./Layout";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Layout>
      <main className="pt-16">{children}</main>
    </Layout>
  );
};

export default DashboardLayout;
