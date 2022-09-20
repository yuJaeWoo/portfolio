import Router, { useRouter } from "next/router";
import React from "react";


function Footer({ item }: { item: React.ReactNode; }) {
  const route = useRouter();

  const goHome = () => {
    Router.push(`/main`);
  };
  return (
    <>
      <div className="">
        <br />
        <br />
        {item}
        <br />
      </div>
    </>
  );
}

export default Footer;
