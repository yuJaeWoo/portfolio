const Profile = () => {
                //여기서 대화방식의 generator 생성을 해보자.
    function* chatProfile() {
        yield "안녕하세요! 반갑습니다."
        yield "개발자로 성장중인 유재우입니다."
    }

    return (
        <div className="main">
            <div className="typewriter">
                <p>안녕하세요 유재우입니다</p>
            </div>
        </div>
    )
}
export default Profile