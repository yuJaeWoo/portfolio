import Desc from "@components/section/desc";
import Intro from "@components/section/intro";
import Middle from "@components/section/middle";
import Stack from "@components/section/stack";
import Head from "next/head";

export default function Main() {
  return (
    <div className="flex flex-col min-h-screen py-2">
      <Head>
        <title>재우's Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* --body children-- */}
      <div className="flex justify-between">
        <Intro />
        <div></div>
        <Desc />
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="flex justify-between">
      <div></div>
        <Middle />
        <Stack />
      </div>
      
      {/* --body children-- */}
    </div>
  );
}