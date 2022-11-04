import { NextPageWithLayout } from "./_app";
import { RiLockPasswordLine } from "react-icons/ri";
import Link from "next/link";
import Layout from "../components/Layout";
import HeadMeta from "../components/Head";

const VerifyAccount: NextPageWithLayout = () => {
  return (
    <>
      <HeadMeta
        title="Set up Password | UK Project"
        description="UK Project"
        author="UK Project"
        image=""
      />
      <Layout>
        <section className="container px-4 sm:px-0 min-h-screen min-w-full grid grid-cols-1 justify-center items-center">
          <div>
            <div className="w-full sm:w-1/3 bg-slate-200/30 dark:bg-slate-700/30 rounded-2xl backdrop-blur-md sm:mx-auto p-6 shadow-2xl">
              <h1 className="text-center font-semibold text-2xl dark:text-slate-50 mb-1">
                Set up your password
              </h1>
              <p className="text-sm font-light dark:text-slate-50 text-center">
                Now that you have verified your email address, please set up a
                password for your account
              </p>
              <form className="grid grid-cols-1 mt-4">
                <div className="relative mt-5">
                  <div className="absolute p-4 top-0 left-0 text-slate-900 dark:text-slate-50 opacity-50">
                    <RiLockPasswordLine />
                  </div>
                  <input
                    type="text"
                    className="rounded-xl pl-12 text-sm pr-4 py-3.5 focus:ring-2 outline-none w-full ring-blue-500/80 bg-slate-50 dark:bg-slate-900"
                    placeholder="Enter your Password"
                    name="password"
                  />
                </div>
                <div className="relative mt-5">
                  <div className="absolute p-4 top-0 left-0 text-slate-900 dark:text-slate-50 opacity-50">
                    <RiLockPasswordLine />
                  </div>
                  <input
                    type="text"
                    className="rounded-xl pl-12 text-sm pr-4 py-3.5 focus:ring-2 outline-none w-full ring-blue-500/80 bg-slate-50 dark:bg-slate-900"
                    placeholder="Enter your Confirm Password"
                    name="confirmPassword"
                  />
                </div>
                <button className="w-2/3 sm:w-1/2 mx-auto mt-6 flex justify-center items-center py-2.5 px-10 rounded-xl bg-blue-700 hover:opacity-80 text-slate-50">
                  Save Password
                </button>
              </form>
            </div>
            <p className="mt-6 text-center">
              Already have an account?{" "}
              <Link href="/login">
                <span className="text-blue-700 hover:text-blue-400 font-medium">
                  Login Here
                </span>
              </Link>
            </p>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default VerifyAccount;
