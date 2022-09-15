import Router, { useRouter } from "next/router";
import React from "react";


const Header: React.FC = () => {
  const route = useRouter();

  const goHome = () => {
    Router.push(`/main`);
  };
  return (
    <>
      <div className="border-b-2 border-black flex justify-between w-full bg-slate-50">
        <h1 onClick={goHome}>Portfolio</h1>
       
      </div>
    </>
  );
};

export default Header;
