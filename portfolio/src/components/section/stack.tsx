import React from "react"

const Stack = () => {
    return (
        <div className="flex flex-col ">
        <div className="text-5xl max-w-full flex  subpixel-antialiased">
        Stack
        </div>
        <div className="text-9xl max-w-full flex flex-row-reverse subpixel-antialiased text-sky-500">
            Hover me!
        </div>
        </div>
    )
}
export default React.memo(Stack)