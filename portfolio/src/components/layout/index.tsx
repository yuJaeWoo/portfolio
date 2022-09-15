// import Aside from "@components/aside";
import Header from "@components/header"
import Body from "@components/body"
import { useRouter } from "next/router"
import { useEffect, useMemo } from "react"
import React from "react"
import Footer from "@components/footer"

export default function Layout({ children }: { children: React.ReactNode }) {
    const Router = useRouter()
    // console.log(Router);

    return (
        <div className="sticky flex flex-col ">
            <div className="bg-header bg-contain bg-local float-left " >
                <div className=" p-8">
                    <div >
                        <Header />
                        <Body>
                            <div>{children}</div>
                        </Body>
                        
                    </div>
                    </div>

            </div>
        <Footer />
        </div>
    )
}
