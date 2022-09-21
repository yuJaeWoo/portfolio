import Router from "next/router"
import React from "react"
import { useState } from "react"
let count = 1
const Terminal = () => {
    
    let arr:any = [
        (<div key={0}><p>$ hi there!!</p><br/></div>),
        (<div key={1}><p>$ my name is jaewu Yu</p><br/></div>),
        (<div key={2}><p>$ welcome to my portfolio</p><br/></div>),
        (<div key={3}><p className="goD" onClick={()=>{goDashboard()}}>&gt; ----[press Click Me]----</p><br/></div>)
    ]
    const [va, setVa] = useState<any>([arr[0]])
    const goDashboard = () => {
        Router.push('/dashboard')
      };
    return (
        <div>
               <div className="typewriter" onClick={()=>{
                setVa([...va, arr[count]])
                count++
                }}>{va}</div>
        </div>
    )
}

export default Terminal