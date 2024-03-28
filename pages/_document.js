import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>

        <meta name="title" content="Studio Dialect"/>
        <meta name="description" content="Simon Hathaway Joins Studio Dialect"/>

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://pr.studiodialect.com/"/>
        <meta property="og:title" content="Studio Dialect PR"/>
        <meta property="og:description" content="Simon Hathaway Joins Studio Dialect"/>
        <meta property="og:image" content="/cards-size.jpg"/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
