import React, { FunctionComponent } from "react";
import Image from "next/image";
import Link from "next/link";

const Logo: FunctionComponent = () => {
  return (
    <Link href="/">
      <Image
        style={{ borderRadius: "0.8rem" }}
        alt="Lugg logo"
        height={96}
        width={96}
        src="/brand/logo.png"
      />
    </Link>
  );
};

export default Logo;