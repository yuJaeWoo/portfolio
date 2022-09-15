import React from "react";

export default function Body({children}:{children: React.ReactNode}) {
    return (
        <div className="mx-auto bg-slate-50">
            <div>{children}</div>
        </div>
    )
}