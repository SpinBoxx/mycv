import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <script
          type="module"
          src="https://unpkg.com/@splinetool/viewer@0.9.314/build/spline-viewer.js"
        ></script>
      </Head>
      <body className="overflow-y-hidden">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
