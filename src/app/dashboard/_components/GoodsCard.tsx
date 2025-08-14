"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import API from "../../../../utils/api";

interface Product {
  _id: string;
  name: string;
  category: string;
  price: number;
  image: string;
}

export default function GoodsCard() {
  const pathname = usePathname();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // pathname-аас category-г шууд гаргаж авна
  const category = pathname.split("/")[1] || "all";

  useEffect(() => {
    const fetchData = async () => {
      if (!category) return;

      setLoading(true);
      try {
        const { data } = await API.get<Product[]>(
          `/api/products?category=${category}`
        );
        setProducts(data);
        setError(null);
      } catch (err) {
        console.error("Error fetching products:", err);
        setError("Бараа татаж чадсангүй");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [category]);  

  if (loading) return <p>Уншиж байна...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="flex flex-wrap gap-4 justify-around">
      {products.length === 0 ? (
        <p>Бараа олдсонгүй</p>
      ) : (
        products.map((item) => (
          <div key={item._id} className="w-[155px] h-[350px]">
            <div className="w-[155px] h-[200px] relative overflow-hidden bg-amber-300">
              {/* <Image
                src={item.image || "/goods1.webp"}
                alt={item.name}
                fill
                className="object-cover rounded-3xl"
              /> */}
            </div>
            <p className="font-semibold text-[18px] truncate">{item.name}</p>
            <p className="text-gray-400 capitalize">{item.category}</p>
            <p className="font-semibold">
              {item.price.toLocaleString("mn-MN")}₮
            </p>
          </div>
        ))
      )}
    </div>
  );
}
