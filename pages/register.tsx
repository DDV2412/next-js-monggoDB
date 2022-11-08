import { NextPageWithLayout } from "./_app";
import Layout from "../components/Layout";
import HeadMeta from "../components/Head";
import {
  RiUser3Line,
  RiGoogleFill,
  RiFacebookFill,
  RiMailLine,
} from "react-icons/ri";
import Link from "next/link";
import { useState } from "react";

const Register: NextPageWithLayout = () => {
  const [data, setData] = useState({
    userName: "",
    firstName: "",
    lastName: "",
    email: "",
  });
  const [isSuccess, setIsSuccess] = useState(false);
  const { userName, firstName, lastName, email } = data;
  const [message, setMessage] = useState("");

  const onChangeData = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const onRegister = async (e: any) => {
    e.preventDefault();

    let res = await fetch(`/api/auth/register`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await res.json();

    setIsSuccess(result.status);
    setMessage(result.message);

    setData({ userName: "", firstName: "", lastName: "", email: "" });

    e.target.reset;
  };

  return (
    <>
      <HeadMeta
        title="Register | UK Project"
        description="UK Project"
        author="UK Project"
      />
      <Layout>
        <section className="container px-4 sm:px-0 min-h-screen min-w-full grid grid-cols-1 justify-center items-center">
          <div>
            <div className="w-full sm:w-1/3 bg-slate-200/30 dark:bg-slate-700/30 rounded-2xl backdrop-blur-md sm:mx-auto p-6 shadow-2xl">
              <h1 className="text-center font-semibold text-2xl dark:text-slate-50 mb-1">
                Let`s Get Started!
              </h1>
              <p className="text-sm font-light dark:text-slate-50 text-center">
                Create an account to UK Project to get all featrues
              </p>

              <form onSubmit={onRegister} className="grid grid-cols-1 mt-5">
                {message && isSuccess ? (
                  <p className="text-green-700 font-medium text-sm">
                    {message}
                  </p>
                ) : (
                  <p className="text-rose-700 font-medium text-sm">{message}</p>
                )}
                <div className="relative mt-5">
                  <div
                    className={`absolute p-4 top-0 left-0 text-slate-900 dark:text-slate-50 opacity-50`}
                  >
                    <RiUser3Line />
                  </div>
                  <input
                    type="text"
                    className="rounded-xl pl-12 text-sm pr-4 py-3.5 focus:ring-2 outline-none w-full ring-blue-500/80 bg-slate-50 dark:bg-slate-900"
                    placeholder="Enter your Username"
                    name="userName"
                    value={userName}
                    onChange={onChangeData}
                  />
                </div>
                <div className="relative mt-5">
                  <div
                    className={`absolute p-4 top-0 left-0 text-slate-900 dark:text-slate-50 opacity-50`}
                  >
                    <RiUser3Line />
                  </div>
                  <input
                    type="text"
                    className="rounded-xl pl-12 text-sm pr-4 py-3.5 focus:ring-2 outline-none w-full ring-blue-500/80 bg-slate-50 dark:bg-slate-900"
                    placeholder="Enter your Firstname"
                    name="firstName"
                    value={firstName}
                    onChange={onChangeData}
                  />
                </div>
                <div className="relative mt-5">
                  <div
                    className={`absolute p-4 top-0 left-0 text-slate-900 dark:text-slate-50 opacity-50`}
                  >
                    <RiUser3Line />
                  </div>
                  <input
                    type="text"
                    className="rounded-xl pl-12 text-sm pr-4 py-3.5 focus:ring-2 outline-none w-full ring-blue-500/80 bg-slate-50 dark:bg-slate-900"
                    placeholder="Enter your Lastname"
                    name="lastName"
                    value={lastName}
                    onChange={onChangeData}
                  />
                </div>
                <div className="relative mt-5">
                  <div
                    className={`absolute p-4 top-0 left-0 text-slate-900 dark:text-slate-50 opacity-50`}
                  >
                    <RiMailLine />
                  </div>
                  <input
                    type="text"
                    className="rounded-xl pl-12 text-sm pr-4 py-3.5 focus:ring-2 outline-none w-full ring-blue-500/80 bg-slate-50 dark:bg-slate-900"
                    placeholder="Enter your email"
                    name="email"
                    value={email}
                    onChange={onChangeData}
                  />
                </div>
                <button
                  type="submit"
                  className="w-2/3 sm:w-1/2 mx-auto mt-6 flex justify-center items-center py-2.5 px-10 rounded-xl bg-blue-700 hover:opacity-80 text-slate-50"
                >
                  Register
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

export default Register;
