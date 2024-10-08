import Image from "next/image";
import React from "react";

export default function Logo() {
  return (
    <div className="h-[38px] w-[108px]">
      <Image
        height={100}
        width={100}
        className="h-full w-full object-contain"
        src="/images/Logo.png"
        alt="logo"
      />
    </div>
  );
}
