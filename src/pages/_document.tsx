import { Head, Html, Main, NextScript } from "next/document";
import { useEffect, useState } from "react";

export default function Document() {
  return (
    <Html lang="en">
      <Head></Head>
      <body className="overflow-y-hidden">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
