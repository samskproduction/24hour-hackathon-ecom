"use client";

import Link from "next/link";
import { Search } from "lucide-react";
import { FaCartArrowDown, FaRegUserCircle } from "react-icons/fa";

const categories = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Shop", href: "/shop" },

];

export function Header() {
  return (
    <header>
      <div className=" w-full  ">
        <div className="flex justify-center  items-center ">
          <div className="flex justify-between items-center w-full px-4 py-2">
            <div>
              <Search size={20} />
            </div>
<Link href='/'>
            <h1 className=" font-bold text-1xl">Avion</h1>
            </Link>
            <div className="flex gap-5">
            <Link href="/carts"><FaCartArrowDown size={20}/></Link>  
              <FaRegUserCircle size={20}/>
            </div>
          </div>
        </div>
        <hr className="my-2" />
        <nav className=" items-cente justify-center flex">
          <div className=" flex justify-center mb-5 items-center gap-10 ">
            {categories.map((category) => (
              <div key={category.name} className="">
                <Link
                  href={category.href}
                  className="text-sm text-gray-400  "
                >
                  {category.name}
                </Link>
              </div>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
