"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { FaChartBar, FaUser, FaStethoscope } from "react-icons/fa";
import { usePathname } from "next/navigation";

const Navigation = ({ user }) => {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  
  const pathname = usePathname();

  const Links = [
    {
      name: "Home",
      path: "/dashboard",
      gap: true,
      icon: <FaStethoscope />,
    },
    {
      name: "Tienda",
      path: "/tienda",
      gap: true,
      icon: <FaStethoscope />,
    },
    {
      name: "Roles",
      path: "/AssignRoles",
      gap: true,
      icon: <FaStethoscope />,
    },
  ];

  useEffect(() => {
    const index = Links.findIndex(link => link.path === pathname);
    if (index !== -1) {
      setActiveIndex(index);
    }
  }, [pathname]);

  return (
    <div
      className={`${
        open ? "w-72" : "w-20"
      } duration-300 h-screen p-5 pt-8 bg-blend-darken bg-green-600 relative`}
    >
      <img
        src="/assets/arrow.png"
        className={`absolute cursor-pointer rounded-full right-3 top-9 w-7 border-2 border-dark-purple ${
          !open && "rotate-180"
        }`}
        onClick={() => setOpen(!open)}
      />
      <div className="flex gap-x-4 items-center">
        <img
          src="/assets/elezdev.png"
          className={`cursor-pointer duration-500`}
        />
        <h1
          className={`text-white origin-left font-medium text-xl duration-300 ${
            !open && "scale-0"
          }`}
        >
          Designer
        </h1>
      </div>
      <ul className="pt-6">
        {Links.map((menu, index) => (
          <li key={index} className={`text-white ${menu.gap ? "mt-9" : "mt-2"} ${index === activeIndex && "bg-gray-700 rounded-md"}`}>
            <Link
              key={index}
              href={menu.path}
              className={`${
                menu.path === pathname && "text-accent border-b-2 border-accent"
              } capitalize font-medium hover:text-accent transition-all`}
            >
              {menu.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navigation;
