import { NextPageWithLayout } from "./_app";
import { RiLockPasswordLine } from "react-icons/ri";
import Link from "next/link";
import Layout from "../components/Layout";
import HeadMeta from "../components/Head";
import { useState } from "react";
import { useRouter } from "next/router";

const VerifyAccount: NextPageWithLayout = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { query, push } = useRouter();
  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage] = useState("");

  const onVerify = async (e: any) => {
    e.preventDefault();

    const res = await fetch(`/api/auth/verify-account`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        password: password,
        confirmPassword: confirmPassword,
        token: query.token,
      }),
    });

    const result = await res.json();

    setIsSuccess(result.status);
    setMessage(result.message);

    if (isSuccess == true) {
      push("/login");
    }
  };

  return (
    <>
      <HeadMeta
        title="Set up Password | UK Project"
        description="UK Project"
        author="UK Project"
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
              <form onSubmit={onVerify} className="grid grid-cols-1 mt-4">
                {message && isSuccess ? (
                  <p className="text-green-700 font-medium text-sm">
                    {message}
                  </p>
                ) : (
                  <p className="text-rose-700 font-medium text-sm">{message}</p>
                )}
                <div className="relative mt-5">
                  <div className="absolute p-4 top-0 left-0 text-slate-900 dark:text-slate-50 opacity-50">
                    <RiLockPasswordLine />
                  </div>
                  <input
                    type="password"
                    className="rounded-xl pl-12 text-sm pr-4 py-3.5 focus:ring-2 outline-none w-full ring-blue-500/80 bg-slate-50 dark:bg-slate-900"
                    placeholder="Enter your Password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="relative mt-5">
                  <div className="absolute p-4 top-0 left-0 text-slate-900 dark:text-slate-50 opacity-50">
                    <RiLockPasswordLine />
                  </div>
                  <input
                    type="password"
                    className="rounded-xl pl-12 text-sm pr-4 py-3.5 focus:ring-2 outline-none w-full ring-blue-500/80 bg-slate-50 dark:bg-slate-900"
                    placeholder="Enter your Confirm Password"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>
                <button
                  type="submit"
                  className="w-max mx-auto mt-6 flex flex-nowrap justify-center items-center py-2.5 px-10 rounded-xl bg-blue-700 hover:opacity-80 text-slate-50"
                >
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
