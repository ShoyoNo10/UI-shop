import React from "react";
import { Input } from "@/components/ui/input";
import { Search, SlidersHorizontal } from "lucide-react";
import GoodsCard from "./_components/GoodsCard";
import CatergoryButtons from "@/components/CatergoryButtons";

function page() {

  return (
    <div className="m-6">
      <div className="flex items-center justify-between  gap-2">
        <div className="flex items-center w-screen px-2 border-[1px] border-gray-200 rounded-[10px]">
          <Search />
          <Input className="border-0" placeholder="Бараа хайх... "></Input>
        </div>
        <div>
          <SlidersHorizontal />
        </div>
      </div>  
      <div>
        <CatergoryButtons />
      </div>

      <div className="mt-4">
        <GoodsCard />
      </div>
    </div>
  );
}

export default page;
