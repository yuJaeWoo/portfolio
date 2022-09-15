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
        <div className="p-8 bg-slate-50">
            <div className="bg-slate-50 h-screen">
                <Header />
                <Body>
                    <div>{children}</div>
                </Body>
                <Footer />
            </div>
        </div>
    )
}
