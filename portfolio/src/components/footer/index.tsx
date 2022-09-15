import Router, { useRouter } from "next/router";
import React from "react";


const Footer: React.FC = () => {
  const route = useRouter();

  const goHome = () => {
    Router.push(`/main`);
  };
  return (
    <>
    <div className="bg-geometry3 bg-[length:1800px_400px] bg-bottom bg-contain h-screen p-8 bg-repeat-x">
      <br />
      <br />
      <br />
      
    </div>
    </>
  );
};

export default Footer;
