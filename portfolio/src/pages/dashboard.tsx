import Head from "next/head"
import Router from "next/router"
import { useState } from "react"

export default function Dashboard() {
    const [load, setLoad] = useState<boolean>(false)
    const [directory, setDirectory] = useState<boolean>(false)
    setTimeout(() => {
        setDirectory(true)
    }, 2000)
    setTimeout(() => {
        setLoad(true)
    }, 4000)

    const choosePage = (pageName: string) => {
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
                    <p>yjw@you:~/portfolio$ ls -al</p>
                </div>
                <br />
                {directory ? (
                    <div className="typewriter flex flex-row">
                        <div>
                            <p>yjw@you:~/portfolio$ [portfolio] ---- </p>
                        </div>
                        <div>
                            <p
                                onClick={() => {
                                    choosePage("profile")
                                }}
                            >
                                {" "}
                                [profile]{" "}
                            </p>
                            <p>|</p>
                            <p>|</p>
                            <p>
                                <a href="mailto: yoo8960@gmail.com"> [contact] </a>
                            </p>
                            <p>|</p>
                            <p>|</p>
                            <p
                                onClick={() => {
                                    choosePage("project")
                                }}
                            >
                                {" "}
                                [project]{" "}
                            </p>
                            <br />
                        </div>
                    </div>
                ) : (
                    <></>
                )}
                {load ? (
                    <div className="typewriter">
                        <p className="goD">$ choose page.</p>
                    </div>
                ) : (
                    <></>
                )}
            </div>
        </div>
    )
}
