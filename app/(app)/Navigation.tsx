'use client'
import { useState } from "react";
import Link from "next/link";
import { FaChartBar, FaUser, FaStethoscope } from "react-icons/fa";
import Dashboard from "./dashboard/page";
// Importa los componentes correspondientes
import Tienda from "./tienda/page";
import AssignRoles from "./AssignRoles/page";

const Navigation = ({ user }) => {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const Menus = [
    {
      title: "Dashboard",
      icon: <FaChartBar />,
      component: <Dashboard />,
      gap: true,
    },
    {
      title: "Roles",
      icon: <FaUser />,
      component: <AssignRoles />,
    },
    {
      title: "Tienda",
      icon: <FaStethoscope />,
      component: <Tienda />,
      gap: true,
    },
  ];

  const handleMenuClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="flex">
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
          {Menus.map((menu, index) => (
            <li
              className={`text-gray-300 text-sm flex items-center 
                gap-x-4 cursor-pointer p-2 hover:bg-slate-400 rounded-md ${menu.gap ? "mt-9" : "mt-2"}`}
              key={index}
              onClick={() => handleMenuClick(index)}
            >
              {menu.icon}
              <span className={`${!open && "hidden"} origin-left duration-200`}>{menu.title}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="p-7 text-2xl font-semibold flex-1 h-screen">
        {Menus.map((menu, index) =>
          index === activeIndex && (
            <div key={index}>
              {menu.component} {/* Renderiza directamente el componente */}
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Navigation;
