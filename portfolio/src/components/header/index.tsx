import Router, { useRouter } from "next/router";
import React from "react";


const Header: React.FC = () => {
  const route = useRouter();

  const goHome = () => {
    Router.push(`/main`);
  };
  return (
    <div >
      <div className="">
       
        {/* <h1 onClick={goHome}>Front-Endd Developer</h1> */}
       
      </div>
    </div>
  );
};

export default Header;
