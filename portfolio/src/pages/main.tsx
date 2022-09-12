import Desc from "@components/section/desc";
import Intro from "@components/section/intro";
import Head from "next/head";

export default function Main() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>재우's Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* --body children-- */}
      <Intro />
      <Desc />
      {/* --body children-- */}
    </div>
  );
}