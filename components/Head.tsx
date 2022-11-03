import Head from "next/head";

type props = {
  description: React.MetaHTMLAttributes<HTMLMetaElement>;
  author: React.MetaHTMLAttributes<HTMLMetaElement>;
  title: React.MetaHTMLAttributes<HTMLMetaElement>;
  image: React.MetaHTMLAttributes<HTMLMetaElement>;
  hostname: React.MetaHTMLAttributes<HTMLMetaElement>;
};
export default function HeadMeta({
  description,
  author,
  title,
  image,
  hostname,
}: props) {
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
      <meta name="twitter:site" content={`${hostname}`} />
      <meta name="twitter:title" content={`${title}`} />
      <meta name="twitter:description" content={`${description}`} />
      <meta name="twitter:image" content={`${image}`} />

      {/* Open Grap MetaTag */}
      <meta property="og:type" content="article" />
      <meta property="og:title" content={`${title}`} />
      <meta property="og:description" content={`${description}`} />
      <meta property="og:url" content={`${hostname}`} />
      <meta property="og:image" content={`${image}`} />
    </Head>
  );
}
