import Image from "next/image";
import React from "react";
import appLogo from "@/public/assets/logoApp.png";
import Button from "../ui/Button";
import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full flex justify-between p-4">
      <Link href="/">
        <div className="flex items-center">
          <Image src={appLogo} alt="app logo" width={85} height={85} priority />
          <h1 className="text-xl font-semibold text-center bg-gradient-to-r from-[#144EE3] via-[#EB568E] to-[#144EE3] bg-clip-text text-transparent">
            Linkly
          </h1>
        </div>
      </Link>
      <div className="flex items-center gap-2 max-w-xs justify-between w-full">
        <Link href="/login" className="w-full">
          <Button bgColor="#181E29" text="Login" />
        </Link>
        <Link href="/register" className="w-full">
          <Button bgColor="#144EE3" text="Register Now" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
