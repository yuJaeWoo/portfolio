import Router, { useRouter } from "next/router";
import React from "react";


const Footer: React.FC = () => {
  const route = useRouter();

  const goHome = () => {
    Router.push(`/main`);
  };
  return (
    <>
      <div className="border-t-2 flex justify-between w-full bg-slate-400">
        <h1 onClick={goHome}>footer</h1>
       
      </div>
    </>
  );
};

export default Footer;
