import Router, { useRouter } from "next/router";
import React from "react";


function Footer() {
  // const route = useRouter();

  // const goHome = () => {
  //   Router.push(`/main`);
  // };
  return (
      <div className="Desc absolute bottom-5 text-center w-full">
        © 2022 - developed by jaewu Yu
      </div>
  );
}

export default Footer;
