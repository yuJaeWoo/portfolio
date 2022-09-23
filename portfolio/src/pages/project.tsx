import Router from "next/router"
import { useState } from "react"

const Project = () => {
    const [directory, setDirectory] = useState<boolean>(false)
    setTimeout(() => {
        setDirectory(true)
    }, 2000)

    const choosePage = (pageName: string) => {
        Router.push(`projects/${pageName}`)
    }
    return (
        <div className="main">
            <div className="flex flex-col">
                <div className="typewriter">
                    <p>yjw@you:~/portfolio/project$ ls -al</p>
                    <br />
                    {directory ? (
                        <div className="typewriter flex flex-row">
                            <div>
                                <p>yjw@you:~/portfolio/project$ [project] ---- </p>
                            </div>
                            <div>
                                <p
                                    onClick={() => {
                                        choosePage("atomy")
                                    }}
                                >
                                    {" "}
                                    [Atomy chatbot]{" "}
                                </p>
                                <p>|</p>
                                <p>|</p>
                                <p
                                    onClick={() => {
                                        choosePage("mango")
                                    }}
                                >
                                    {" "}
                                    [Mango Admin Front]{" "}
                                </p>
                                <p>|</p>
                                <p>|</p>
                                <p
                                    onClick={() => {
                                        choosePage("lgns")
                                    }}
                                >
                                    {" "}
                                    [LGNSOL chatbot]{" "}
                                </p>
                                <p>|</p>
                                <p>|</p>
                                <p
                                    onClick={() => {
                                        choosePage("samsung")
                                    }}
                                >
                                    {" "}
                                    [Samsung chatbot]{" "}
                                </p>
                                <br />
                            </div>
                        </div>
                    ) : (
                        <></>
                    )}
                </div>
            </div>
        </div>
    )
}
export default Project
