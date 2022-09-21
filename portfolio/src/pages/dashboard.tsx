import Head from "next/head";
import Contatct from "./contatct";
import Profile from "./profile";
import Project from "./project";

export default function Dashboard() {
  return (
    <div className="main">
      <Head>
        <title>재우's Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Profile />
        <Project />
        <Contatct />

    </div>
  );
}