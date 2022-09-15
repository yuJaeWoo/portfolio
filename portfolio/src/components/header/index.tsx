import Router, { useRouter } from "next/router";
import React from "react";


const Header: React.FC = () => {
  const route = useRouter();

  const goHome = () => {
    Router.push(`/main`);
  };
  return (
    <div >
      <div className="border-b-4 border-black flex justify-between w-full ">
        <h1 onClick={goHome}>Front-End Developer</h1>
       
      </div>
    </div>
  );
};

export default Header;
