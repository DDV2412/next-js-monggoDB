import { useEffect, useState } from "react";
import Head from "next/head";

type props = {
  description: React.MetaHTMLAttributes<HTMLMetaElement> | string;
  author: React.MetaHTMLAttributes<HTMLMetaElement> | string;
  title: React.MetaHTMLAttributes<HTMLMetaElement> | string;
  image?: React.MetaHTMLAttributes<HTMLMetaElement> | string;
};
export default function HeadMeta({ description, author, title, image }: props) {
  const [hostName, setHostName] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setHostName(window.location.href);
    }
  }, [hostName]);

  return (
    <Head>
      <title>{`${title}`}</title>
      <meta name="description" content={`${description}`}></meta>
      <meta name="author" content={`${author}`}></meta>
      <meta name="robots" content="noindex, nofollow"></meta>
      <meta name="googlebot" content="noindex, nofollow"></meta>
      <meta name="google" content="nositelinkssearchbox"></meta>
      <meta name="googlebot" content="notranslate"></meta>
      <meta name="google" content="nopagereadaloud"></meta>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      ></meta>
      {/* Twitter MetaTag */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={`${hostName}`} />
      <meta name="twitter:title" content={`${title}`} />
      <meta name="twitter:description" content={`${description}`} />
      <meta name="twitter:image" content={`${image}`} />

      {/* Open Grap MetaTag */}
      <meta property="og:type" content="article" />
      <meta property="og:title" content={`${title}`} />
      <meta property="og:description" content={`${description}`} />
      <meta property="og:url" content={`${hostName}`} />
      <meta property="og:image" content={`${image}`} />
    </Head>
  );
}
