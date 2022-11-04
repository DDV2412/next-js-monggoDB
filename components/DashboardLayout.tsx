import Layout from "./Layout";
import Sidebar from "./Sidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Layout>
      <Sidebar />
      <main className="pt-16 pl-[250px]">
        <section className="p-4">
          <div className="bg-slate-100 dark:bg-slate-800 min-h-screen p-6 rounded-xl">
            {children}
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default DashboardLayout;
