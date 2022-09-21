import React from "react";

export default function Body({children}:{children: React.ReactNode}) {
    return (
        <div className="w-full p-0 mr-8">
            {children}
        </div>
    )
}