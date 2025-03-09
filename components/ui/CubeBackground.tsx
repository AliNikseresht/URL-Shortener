import React from "react";
import Image from "next/image";
import cubeOne from "@/public/assets/cubes/cube1.svg";
import cubeTwo from "@/public/assets/cubes/cube2.svg";

const CubeBackground = () => (
  <>
    <Image
      src={cubeOne}
      alt="cube photo"
      width={800}
      height={800}
      priority
      style={{ zIndex: "-1" }}
      className="absolute right-0"
    />
    <Image
      src={cubeTwo}
      alt="cube photo"
      width={800}
      height={800}
      priority
      style={{ zIndex: "-1" }}
      className="absolute left-0 rotate-180"
    />
  </>
);

export default CubeBackground;
