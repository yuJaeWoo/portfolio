import Router, { useRouter } from "next/router";
import React from "react";


const Footer: React.FC = () => {
  const route = useRouter();

  const goHome = () => {
    Router.push(`/main`);
  };
  return (
    <>
    <div className="bg-geometry bg-[length:1300px_800px] bg-bottom  bg-contain h-screen p-8">
      <br />
      <br />
      <br />
      
    </div>
    </>
  );
};

export default Footer;
