import Loading from "@components/loading"
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
    const [load, setLoad] = useState<boolean>(false)
    console.log(load)
    const goDashboard = () => {
        setLoad(true)
      };
      if(load === true){
        console.log("load == true")
        setTimeout(()=>{
            Router.push('/dashboard')
        },1000)
    }
    return load ? (<><Loading /></>):(
        <div className="w-full" onClick={()=>{
            setVa([...va, arr[count]])
            count++
            }}>
               <div className="typewriter" >{va}</div>
        </div>
    )
}

export default Terminal