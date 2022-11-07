import { NextPageWithLayout } from "../_app";
import React from "react";
import DashboardLayout from "../../components/DashboardLayout";
import HeadMeta from "../../components/Head";
import { useState } from "react";
import {
  RiPencilFill,
  RiSaveLine,
  RiShareLine,
  RiDeleteBin4Line,
  RiCloseLine,
} from "react-icons/ri";
import CKEditor from "../../components/CKEditor";

const BlogPost: NextPageWithLayout = () => {
  const [showForm, setShowForm] = useState(false);
  const [editorLoaded, setEditorLoaded] = useState(false);
  const [data, setData] = useState();

  return (
    <>
      <HeadMeta
        title="Blog Post | UK Project"
        description="UK Project"
        author="UK Project"
      />
      <DashboardLayout>
        <section>
          <button
            onClick={(e) => {
              setShowForm(true), setEditorLoaded(true);
            }}
            className="bg-blue-300/40 font-medium text-lg px-4 py-3 rounded-xl hover:hover:shadow-[0px_2px_4px_rgba(0,0,0,0.25),2px_0px_4px_rgba(0,0,0,0.25)]"
          >
            Create
          </button>

          <main className="mt-4 flex flex-col gap-y-4">
            <article className="p-4 bg-slate-50 dark:bg-slate-900 rounded-xl cursor-pointer hover:shadow-[0px_2px_4px_rgba(0,0,0,0.25),2px_0px_4px_rgba(0,0,0,0.25)]">
              <span className="px-2.5 py-1 rounded-xl bg-blue-300/30 text-sm font-medium">
                Publish
              </span>
              <h1 className="mt-2">Article 1</h1>
            </article>
            <article className="p-4 bg-slate-50 dark:bg-slate-900 rounded-xl cursor-pointer hover:shadow-[0px_2px_4px_rgba(0,0,0,0.25),2px_0px_4px_rgba(0,0,0,0.25)]">
              <span className="px-2.5 py-1 rounded-xl bg-orange-300/30 text-sm font-medium">
                Draf
              </span>
              <h1 className="mt-2">Article 1</h1>
            </article>
          </main>
        </section>

        <section
          className={`fixed top-24 bg-slate-100/30 overflow-y-auto w-full sm:w-[80%] right-0 dark:bg-slate-900/30 backdrop-blur-md ease-in-out duration-300 min-h-full rounded-xl p-6 ${
            showForm ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-between items-center">
            <h1 className="font-semibold">Create Content</h1>
            <div className="flex justify-start items-center gap-4">
              <button className="w-max flex justify-center items-center p-2.5 rounded-xl bg-blue-700 hover:opacity-80 text-slate-50">
                <RiSaveLine />
              </button>
              <button className="w-max flex justify-center items-center p-2.5 rounded-xl bg-orange-700 hover:opacity-80 text-slate-50">
                <RiShareLine />
              </button>
              <button className="w-max flex justify-center items-center p-2.5 rounded-xl bg-rose-700 hover:opacity-80 text-slate-50">
                <RiDeleteBin4Line />
              </button>
              <button
                onClick={() => setShowForm(false)}
                className="w-max flex justify-center items-center p-2.5 rounded-xl bg-slate-400 hover:opacity-80 text-slate-50"
              >
                <RiCloseLine />
              </button>
            </div>
          </div>
          <form className="grid grid-cols-1 mt-4">
            <div className="relative mt-5">
              <div
                className={`absolute p-4 top-0 left-0 text-slate-900 dark:text-slate-50 opacity-50`}
              >
                <RiPencilFill />
              </div>
              <input
                type="text"
                className="rounded-xl w-full pl-12 text-sm pr-4 py-3.5 focus:ring-2 outline-none ring-blue-500/80 bg-slate-50 dark:bg-slate-900"
                placeholder="Enter your content title"
                name="title"
              />
            </div>
            <div className="relative mt-5">
              <div
                className={`absolute p-4 top-0 left-0 text-slate-900 dark:text-slate-50 opacity-50`}
              >
                <RiPencilFill />
              </div>
              <input
                type="text"
                className="rounded-xl w-full pl-12 text-sm pr-4 py-3.5 focus:ring-2 outline-none ring-blue-500/80 bg-slate-50 dark:bg-slate-900"
                placeholder="Enter your content category"
                name="title"
              />
            </div>
            <div className="relative mt-5">
              <CKEditor
                name="description"
                onChange={(data: any) => {
                  setData(data);
                }}
                editorLoaded={editorLoaded}
              />
            </div>
          </form>
        </section>
      </DashboardLayout>
    </>
  );
};

export default BlogPost;
