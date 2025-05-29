import React from "react";
import CategoryItem from "./CategoryItem";
import Image from "next/image";
import { categoryMenuList } from "@/lib/utils";
import Heading from "./Heading";

const CategoryMenu = () => {
  return (
    <section className="py-16 bg-gradient-to-tr from-blue-600 to-blue-400 text-white">
      <Heading title="BROWSE CATEGORIES" />

      <div className="max-w-screen-2xl mx-auto px-6 sm:px-10 lg:px-16 py-10 grid gap-6 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 animate-fade-in-up">
        {categoryMenuList.map((item) => (
          <CategoryItem title={item.title} key={item.id} href={item.href}>
            <div className="p-4 rounded-xl transition-transform duration-300 flex flex-col items-center gap-y-3 hover:scale-105">
              <Image src={item.src} width={48} height={48} alt={item.title} />
              <span className="text-center font-medium text-sm sm:text-base text-gray-800">
                {item.title}
              </span>
            </div>
          </CategoryItem>
        ))}
      </div>
    </section>
  );
};

export default CategoryMenu;
