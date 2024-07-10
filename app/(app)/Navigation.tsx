// components/Navigation.tsx
import Link from "next/link";
import { useState, useEffect } from "react";
import { FaSignOutAlt } from "react-icons/fa";
import { useAuth } from '../hooks/auth';
import { usePathname } from "next/navigation";
import menuLinks from "../utils/menuLinks";


const Navigation = ({ user }) => {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const { logout } = useAuth();
  const pathname = usePathname();

  useEffect(() => {
    const index = menuLinks.findIndex((link) => link.path === pathname);
    if (index !== -1) {
      setActiveIndex(index);
    }
  }, [pathname]);

  const handleLogout = () => {
    logout(); // Llama al método de logout del hook useAuth
  };

  return (
    <div className={`${
      open ? "w-72" : "w-20"
      } duration-300 h-screen top-0 p-5 pt-8  bg-slate-600 shadow-lg relative`}
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
          className={`cursor-pointer duration-500 ${open && "scale-0"}`}
        />
        <h1
          className={`text-white origin-left font-medium text-xl duration-300 ${
            !open && "scale-0"
            }`}
        >
          Designer
          {/* <ThemeSwitch></ThemeSwitch> */}
        </h1>
      </div>
      <ul className="pt-6">
        {menuLinks.map((menu, index) => (
          <li
            key={index}
            className={`text-white flex items-center gap-x-4 p-2 cursor-pointer rounded-md hover:bg-light-white text-sm ${
              menu.gap ? "mt-9" : "mt-2"
              } ${index === activeIndex && "bg-gray-700"}`}
          >
            <Link href={menu.path} className="flex items-center gap-x-4">
              <span className="text-2xl">{menu.icon}</span>
              <span
                className={`${
                  !open && "hidden"
                  } origin-left duration-200 text-white`}
              >
                {menu.name}
              </span>
            </Link>
          </li>
        ))}
        
        {/* Elemento de lista para el botón de logout */}
        <li
          className="text-white flex items-center gap-x-4 p-2 cursor-pointer rounded-md hover:bg-light-white text-sm mt-9"
          onClick={handleLogout}
        >
          <span className="text-2xl"><FaSignOutAlt /></span>
          <span
            className={`${
              !open && "hidden"
              } origin-left duration-200 text-white`}
          >
            Logout
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
