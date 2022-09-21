import Desc from "@components/section/desc";
import Intro from "@components/section/intro";
import Middle from "@components/section/middle";
import Stack from "@components/section/stack";
import Terminal from "@components/terminal";
import Head from "next/head";

export default function Main() {
  return (
    <div className="main">
      <Head>
        <title>재우's Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Terminal />
    </div>
  );
}