const Mango = () => {
    return (
            <div className="typewriter">
                <p>젠틀파이 망고 백오피스 프론트 페이지 구축</p>
                <p>[소개]</p>
                <p>웹 서비스에서 챗봇이라는 기능이 점차 확산되는 와중<br/>
                여러 회사가 이용할수있는 챗봇을 제공하며, 디자인부터 응답 방식에 이르기까지,<br/>
                다방면적인 커스터마이즈가 가능한 챗봇 자체를 위한 통합 관리 서비스입니다.<br/>
                현재는 SDS의 brity, Google의 Dialogflow등의 NLU엔진등을 선택하여 사용할 수 있습니다.<br/>
                Redis를 이용하여 스타일링과 관련된 부분은 캐싱처리를 하여 최적화도 고려하였습니다. <br/>
                사용자에 따라서 응답 방식의 변화를 줄수있으며, <br/>
                기획자가 원하는 서비스를 구현할 수 있는 프로젝트 입니다.<br/>
                현재는 개발중에 있으며, 백오피스의 프론트 페이지를 작업하고있습니다.<br/>
                </p>
                <br/>

                <p>Stack:  TypeScript, Nextjs, Redis, styled-components 사용</p>
                <br/>
                <p>
                - 프론트 페이지 프로젝트 구조 설계 및 컨벤션 정립, 기능 개발<br/>
                - 적극적인 커스텀 hooks를 통하여 컴포넌트 단일책임을 지향하는 방식 추구<br/>
                - 기능 플로우 및 동선 작업 최적화를 지향<br/>
                </p>
                <p className="goD">- 필요한 api가 있을경우, 백오피스 서버에 api 추가 개발</p>
            </div>
    )
}
export default Mango