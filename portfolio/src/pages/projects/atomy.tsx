const Atomy = () => {
    return (
            <div className="typewriter">
                <p>애터미 챗봇 구축/운영</p>
                <p>[소개]</p>
                <p>삼성 SDS Brity Assistant NLU를 이용한 챗봇입니다.<br/>
                애터미 상담 센터의 "Smart Contact Center" 일환으로 네트워크 마케팅의 가장 큰 문제였던<br/>
                상담 센터내의 많은 리소스를 줄이고자 고객대상으로 한 CS챗봇 프로젝트이며,<br/>
                일반적인 챗봇에서 후원수당관리나 센터조회, 소실적 대실적 등의 비즈니스 로직이 있는 기능들을 추가로 개발하고, <br/>
                추후에 있을 비로그인 사용자에게도 해당하는 서비스에 접근할수있게 개발된 챗봇입니다. <br/>
                자연어 처리(NLP)를 통하여 사용자의 의도(Intent)를 파악하여 시나리오가 진행되게끔 구성되어있습니다.</p>
                <br/>

                <p>Stack:  JS, Spring-boot, jQuery, Netflix zuul, Docker, Mysql, BrityNLU  사용</p>
                <br/>
                <p>
                - 바닐라 js를 통한 챗봇 비즈니스 로직 개발 및 프록시 api 연결 작업<br/>
                - 브리티 업데이트 관련으로 cli 환경 및 아마존 인프라 환경 제어 및 고도화<br/>
                - 글로벌 API업데이트를 위하여 삼성 SDS와 협업을 통해 전체 API 교체<br/>
                </p>
                <p className="goD">- 상담원 직접 상담 기능 구현을 위해 스펙트라사의 이노믹스 서비스 구축</p>
            </div>
    )
}
export default Atomy