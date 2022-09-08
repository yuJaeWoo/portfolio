import React from "react";

export default function Body({children}:{children: React.ReactNode}) {
    return (
        <div className="mx-auto">
            <div>{children}</div>
        </div>
    )
}