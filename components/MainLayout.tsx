import Footer from "./Footer";
import Layout from "./Layout";
import Navigation from "./Navigation";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Layout>
      <Navigation />
      <main className="pt-16">{children}</main>
      <Footer />
    </Layout>
  );
};

export default MainLayout;
