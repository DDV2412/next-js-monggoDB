import "../styles/globals.css";
import type { AppProps } from "next/app";
import type { NextPage } from "next";

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};

type AppPropsLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsLayout) {
  return <Component {...pageProps} />;
}

export default MyApp;
