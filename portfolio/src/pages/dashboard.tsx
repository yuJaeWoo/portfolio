import Head from "next/head";
import Router from "next/router";
import { useState } from "react";
import Contatct from "./contact";
import Profile from "./profile";
import Project from "./project";

export default function Dashboard() {
    const [load, setLoad] = useState<boolean>(false)
    const [directory, setDirectory] = useState<boolean>(false)
    setTimeout(()=>{
        setDirectory(true)
    },2000)
    setTimeout(()=>{
        setLoad(true)
    },5000)

    const choosePage = (pageName:string) => {
        Router.push(`/${pageName}`)
    }

  return (
    <div className="main">
      <Head>
        <title>재우's Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <div className="flex flex-col">
        <div className="typewriter">
            <p>$ ls -al</p>
        </div>
        <br/>
            {directory? <div className="typewriter flex flex-row">
                <div><p>$ [portfolio] ---- </p></div>
                <div>
                    <p onClick={()=>{choosePage("profile")}}> [profile] </p>
                    <p>|</p>
                    <p>|</p>
                    <p onClick={()=>{choosePage("contact")}}> [contact] </p>
                    <p>|</p>
                    <p>|</p>
                    <p onClick={()=>{choosePage("project")}}> [project] </p>
                    <br/>
                </div>
            </div> : <></>}
            {load ? (<div className="typewriter">
                <p className="goD">$ choose page.</p>
            </div>): <></>}
        </div>
    </div>
  );
}