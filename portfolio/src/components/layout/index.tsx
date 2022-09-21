// import Aside from "@components/aside";
import Header from "@components/header"
import Body from "@components/body"
import { useRouter } from "next/router"
import { useEffect, useMemo } from "react"
import React from "react"
import Footer from "@components/footer"
import Desc from "@components/section/desc"
import FooterDesc from "@components/section/footerDesc"

export default function Layout({ children }: { children: React.ReactNode }) {
    const Router = useRouter()
    // console.log(Router);

    return (
        <>
            <div  className="flex flex-col justify-between">
                <Header />
                <Body>
                    <div>{children}</div>
                </Body>
                <div></div>
            </div>
                <Footer />
                </>

    )
}
