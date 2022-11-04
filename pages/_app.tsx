import "../styles/globals.css";
import type { AppProps } from "next/app";
import type { NextPage } from "next";

export type NexPageWithLayout = NextPage & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};

type AppPropsLayout = AppProps & {
  Component: NexPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsLayout) {
  return <Component {...pageProps} />;
}

export default MyApp;
