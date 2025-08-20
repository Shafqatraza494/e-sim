import Hero from "@/Components/Hero/Hero";
import Image from "next/image";
import React from "react";

function NotFound() {
  return (
    <div>
      <Hero para={"The requested page does not exist."} heading={"Error 404"} />
      <div className="md:mx-14 mx-4 my-10 flex flex-col items-center">
        <Image width={440} height={355} src="/404/404page.svg" alt="" />
      </div>
    </div>
  );
}

export default NotFound;
