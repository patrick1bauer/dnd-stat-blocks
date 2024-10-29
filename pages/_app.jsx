import "@/styles/globals.css";
import React from "react";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
    <Head>
      <title>D&D Stat Blocks</title>
      <link rel="icon" type="image/png" href="/images/favicon.png"></link>
      <link href='//fonts.googleapis.com/css?family=Noto+Sans:400,700,400italic,700italic' rel='stylesheet' type='text/css'></link>
      <link href='//fonts.googleapis.com/css?family=Libre+Baskerville:700' rel='stylesheet' type='text/css'></link>
    </Head>
    <div className="App">
      <Component {...pageProps} />
    </div>
    </>
  );
}
