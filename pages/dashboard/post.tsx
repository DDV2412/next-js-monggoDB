import { NextPageWithLayout } from "../_app";
import React from "react";
import DashboardLayout from "../../components/DashboardLayout";
import HeadMeta from "../../components/Head";

const BlogPost: NextPageWithLayout = () => {
  return (
    <>
      <HeadMeta
        title="Blog Post | UK Project"
        description="UK Project"
        author="UK Project"
      />
      <DashboardLayout>
        <section>
          <button className="bg-blue-300/40 font-medium text-lg px-4 py-3 rounded-xl hover:hover:shadow-[1.5px_1.5px_1.5px_rgba(0,0,0,0.2),-1.5px_-1.5px_1.5px_rgba(0,0,0,0.2)]">
            Create
          </button>

          <main className="mt-4 flex flex-col gap-y-4">
            <article className="p-4 bg-slate-50 dark:bg-slate-900 rounded-xl cursor-pointer hover:shadow-[1.5px_1.5px_1.5px_rgba(0,0,0,0.2),-1.5px_-1.5px_1.5px_rgba(0,0,0,0.2)]">
              <span className="px-2.5 py-1 rounded-xl bg-blue-300/30 text-sm font-medium">
                Publish
              </span>
              <h1 className="mt-2">Article 1</h1>
            </article>
            <article className="p-4 bg-slate-50 dark:bg-slate-900 rounded-xl cursor-pointer hover:shadow-[1.5px_1.5px_1.5px_rgba(0,0,0,0.2),-1.5px_-1.5px_1.5px_rgba(0,0,0,0.2)]">
              <span className="px-2.5 py-1 rounded-xl bg-orange-300/30 text-sm font-medium">
                Draf
              </span>
              <h1 className="mt-2">Article 1</h1>
            </article>
          </main>
        </section>
      </DashboardLayout>
    </>
  );
};

export default BlogPost;
