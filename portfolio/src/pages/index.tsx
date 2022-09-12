export default function Home() {
  return <div>yjw portfolio</div>
}

export async function getServerSideProps(){
  return {
    redirect: {
      destination: "/main",
      poermanent: false,
    }
  }
}