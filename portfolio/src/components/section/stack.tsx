import useStackShow from "@hooks/useStackShow";
import React, { useEffect, useState } from "react"

const Stack = () => {

    const [close, setClose] = useState<boolean>(false);	// 메뉴닫기 상태 
    const [hide, setHide] = useState<boolean>(true);	// 메뉴접기 상태
    const [stack, setStack] = useState<string>("");	// 메뉴접기 상태
  
        // useEffect(()=>{
        //     setInterval(()=>{
        //         setStack(useStackShow)
        //    }, 3000);
        // }, [stack])
        
    return (
        <div className="flex flex-col ">
        <div className="text-5xl max-w-full flex  subpixel-antialiased">
        Stack
        </div>
         <div
      className={`list ${close ? 'close' : 'open'}`}  // close 상태이면 close가 된다. 아니면 open이다.
      onMouseEnter={() => {setHide(false)}} 	      // 마우스엔터 이벤트이면 hide가 false가 된다.
      onMouseLeave={() => {setHide(true)}}  	      // 마우스리브 이벤트이면 hide가 true가 된다.
    >
        
        <div className="text-9xl max-w-full flex flex-row-reverse subpixel-antialiased text-sky-500" >
            Hover me!
        </div>
        </div>
        <br />
        {!hide ? <div className=" text-5xl subpixel-antialiased">{stack}</div> : <></>}
        </div>
    )
}
export default React.memo(Stack)