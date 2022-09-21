const Samsung = () => {
    return (
            <div className="typewriter">
                <p>삼성 닷컴 챗봇 운영</p>
                <p>[소개]</p>
                <p>젠틀파이에서 구축,운영을 담당하고 있는 삼성 닷컴 챗봇입니다.<br/>
                구축이 된지 오래된 서비스라 레거시 코드와 버전 호환등의 문제로, <br/>
                프로젝트의 레거시를 점점 최신화 및 고도화하고 있는 프로젝트 입니다.<br/>
                현재는 삼성 닷컴의 검색 기능이 챗봇과 연동되게끔 작업이 되어있어<br/>
                이제는 필수 서비스로서 삼성 닷컴에 자리하고 있는 서비스 입니다.<br/>
                </p>
                <br/>

                <p>Stack:  JS, Vue.js, sequelizeORM, Docker, Mysql, IBM Watson NLU, AWS lambda  사용</p>
                <br/>
                <p>
                - 노후화된 의존성을 최신화 하며 기존의 의존되어있던 코드들을 수정<br/>
                - 챗봇 백오피스 프론트 페이지 페칭 방식 변경으로 인한 비즈니스 로직 재구축<br/>
                - 특정 시간마다 데이터 접근이 이루어지는 작업의 추가로 lamda를 이용한 모듈을 도입<br/>
                </p>
                <p className="goD">- 엇비슷한 기능의 스키마를 두개의 테이블로 분리하는 등의 데이터 접근 최적화</p>
            </div>
    )
}
export default Samsung