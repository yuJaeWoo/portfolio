import Router, { useRouter } from "next/router";
import React from "react";


const Header: React.FC = () => {
  const route = useRouter();

  const goHome = () => {
    Router.push(`/main`);
  };
  return (
    <>
      <div className="border-b-2 flex justify-between w-full bg-orange">
        <h1 onClick={goHome}>Portfolio</h1>
       
      </div>
    </>
  );
};

export default Header;
