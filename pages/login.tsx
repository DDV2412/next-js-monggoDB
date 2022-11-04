import { NextPageWithLayout } from "./_app";
import HeadMeta from "../components/Head";
import Layout from "../components/Layout";
import {
  RiUser3Line,
  RiLockPasswordLine,
  RiGoogleFill,
  RiFacebookFill,
} from "react-icons/ri";
import Link from "next/link";

const Login: NextPageWithLayout = () => {
  return (
    <>
      <HeadMeta
        title="Login | UK Project"
        description="UK Project"
        author="UK Project"
        image=""
      />
      <Layout>
        <section className="container px-4 sm:px-0 min-h-screen min-w-full grid grid-cols-1 justify-center items-center">
          <div>
            <div className="w-full sm:w-1/3 bg-slate-200/30 dark:bg-slate-700/30 rounded-2xl backdrop-blur-md sm:mx-auto p-6 shadow-2xl">
              <h1 className="text-center font-semibold text-2xl dark:text-slate-50 mb-1">
                Welcome back!
              </h1>
              <p className="text-sm font-light dark:text-slate-50 text-center">
                Log in to your existant account of UK Project
              </p>
              <form className="grid grid-cols-1 mt-4">
                <div className="relative mt-5">
                  <div
                    className={`absolute p-4 top-0 left-0 text-slate-900 dark:text-slate-50 opacity-50`}
                  >
                    <RiUser3Line />
                  </div>
                  <input
                    type="text"
                    className="rounded-xl pl-12 text-sm pr-4 py-3.5 focus:ring-2 outline-none w-full ring-blue-500/80 bg-slate-50 dark:bg-slate-900"
                    placeholder="Username or Email"
                    name="userName"
                  />
                </div>
                <div className="relative mt-5">
                  <div
                    className={`absolute p-4 top-0 left-0 text-slate-900 opacity-50 dark:text-slate-50`}
                  >
                    <RiLockPasswordLine />
                  </div>
                  <input
                    type="password"
                    className="rounded-xl pl-12 text-sm pr-4 py-3.5 focus:ring-2 outline-none w-full ring-blue-500/80 bg-slate-50 dark:bg-slate-900"
                    placeholder="Password"
                    name="password"
                  />
                </div>
                <div className="mt-2 w-full flex justify-end items-center text-sm font-medium text-slate-500 dark:text-slate-400">
                  <Link href="">Forgot Password?</Link>
                </div>
                <button className="w-2/3 sm:w-1/2 mx-auto mt-6 flex justify-center items-center py-2.5 px-10 rounded-xl bg-blue-700 hover:opacity-80 text-slate-50">
                  Login
                </button>
              </form>
              <p className="text-slate-400 font-light dark:text-slate-400 text-sm my-6 text-center">
                Or connect using
              </p>
              <div className="flex justify-center items-center gap-x-4">
                <button className="mt-4 flex justify-center items-center gap-x-3 bg-rose-700 text-slate-50 py-2.5 rounded-xl sm:w-[40%] hover:opacity-80 px-6 mx-auto">
                  <RiGoogleFill />
                  Google
                </button>
                <button className="mt-4 flex justify-center items-center gap-x-3 bg-blue-900 text-slate-50 py-2.5 rounded-xl sm:w-[40%] hover:opacity-80 px-6 mx-auto">
                  <RiFacebookFill />
                  Facebook
                </button>
              </div>
            </div>
            <p className="mt-6 text-center">
              Don`t have an account?{" "}
              <Link href="/register">
                <span className="text-blue-700 hover:text-blue-400 font-medium">
                  Sign Up
                </span>
              </Link>
            </p>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Login;
