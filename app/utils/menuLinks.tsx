// utils/menuLinks.ts
import { FaChartBar, FaUser, FaStethoscope } from "react-icons/fa";
import React from "react";

interface Link {
  name: string;
  path: string;
  gap: boolean;
  icon: React.ReactNode;    
}

const menuLinks: Link[] = [
  {
    name: "Home",
    path: "/dashboard",
    gap: true,
    icon: <FaChartBar />,
  },
  {
    name: "Tienda",
    path: "/tienda",
    gap: true,
    icon: <FaChartBar />,
  },
  {
    name: "Roles",
    path: "/AssignRoles",
    gap: true,
    icon: <FaUser />,
  },
  {
    name: "Gestion Roles",
    path: "/GestionRol",
    gap: true,
    icon: <FaUser />,
  },
];

export default menuLinks;
