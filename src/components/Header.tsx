import Image from "next/image";
import React from "react";

type HeaderProps = {
  children: React.ReactNode;
};

const Header = ({ children }: HeaderProps) => {
  return (
    <div>
      <header className="bg-purple-300 text-white p-4 flex items-center">
        <Image src={"/logo1.png"} alt="" width={40} height={40} />
        <p>UI store</p>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Header;
