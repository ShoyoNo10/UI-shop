"use client"

import React from "react";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { LayoutGrid } from "lucide-react";
import { GiAmpleDress } from "react-icons/gi";
import { IoIosShirt } from "react-icons/io";

function CatergoryButtons() {
  const router = useRouter();
  const pathname = usePathname(); // current route path

  const baseStyle = "border-[1px] border-black";
  
  const isActive = (path: string) => pathname === path;

  return (
    <div>
      <div className="flex gap-2 overflow-x-auto whitespace-nowrap mt-4">
        <Button
          onClick={() => router.push("/dashboard")}
          className={isActive("/dashboard") ? "bg-purple-300 text-white" : `bg-white text-black ${baseStyle}`}
        >
          <LayoutGrid />
          Бүх хувцас
        </Button>

        <Button
          onClick={() => router.push("/dress")}
          className={isActive("/dress") ? "bg-purple-300 text-white" : `bg-white text-black ${baseStyle}`}
        >
          <GiAmpleDress />
          Плать
        </Button>

        <Button
          onClick={() => router.push("/t-shirt")}
          className={isActive("/t-shirt") ? "bg-purple-300 text-white" : `bg-white text-black ${baseStyle}`}
        >
          <IoIosShirt />
          Фудволок
        </Button>
      </div>
    </div>
  );
}

export default CatergoryButtons;
