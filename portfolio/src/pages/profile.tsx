import Router from "next/router"
import { useState } from "react"

let count = 1
const Profile = () => {
    let arr: any = [
        <div key={0}>
            <p>yjw@you:~$ "색칠과 코딩을 좋아하는."</p>
            <br />
        </div>,
        <div key={1}>
            <p>yjw@you:~$ 안녕하세요. 프론트엔드로 개발자 경험을 쌓아가고 있는 유재우입니다.</p>
            <br />
        </div>,
        <div key={2}>
            <p>yjw@you:~$ 창의적인 부분에 숨겨진 기본적인 디테일을 찾는것을 좋아합니다.</p>
            <br />
        </div>,
        <div key={3}>
            <p>yjw@you:~$ 취미인 색칠과 같이 더 나은 결과를 찾고자 노력하고 있습니다.</p>
            <br />
        </div>,
    ]
    const [va, setVa] = useState<any>([arr[0]])
    return (
        <div
            className="w-full"
            onClick={() => {
                setVa([...va, arr[count]])
                count++
            }}
        >
            <div className="typewriter">{va}</div>
        </div>
    )
}
export default Profile
