import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>

        <meta name="title" content="Studio Dialect"/>
        <meta name="description" content="Studio Dialect is thrilled to announce the appointment of Simon Hathaway as Non-Executive Chairman, effective immediately."/>

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://pr.studiodialect.com/"/>
        <meta property="og:title" content="Studio Dialect"/>
        <meta property="og:description" content="Studio Dialect is thrilled to announce the appointment of Simon Hathaway as Non-Executive Chairman, effective immediately."/>
        <meta property="og:image" content="/cards.jpg"/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
