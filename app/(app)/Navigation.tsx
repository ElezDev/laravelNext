import Link from 'next/link';
import { useState } from 'react';

const Navigation = ({ user }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`bg-gray-800 text-white fixed h-screen transition-all duration-300 z-10 ${
          isOpen ? 'w-64' : 'w-0'
        }`}
      >
        {/* Sidebar content */}
        <div className="flex flex-col items-center">
          <div className="mt-4">
            <a
              href="/dashboard"
              className="text-white hover:text-gray-300"
            >
              Home
            </a>
          </div>
          <div className="mt-4">
            <a
              href="/AssignRoles"
              className="text-white hover:text-gray-300"
            >
              Roles
            </a>
          </div>
          <div className="mt-4">
            <a
              href="/tienda"
              className="text-white hover:text-gray-300"
            >
              Tienda
            </a>
          </div>
          {/* Add more sidebar items here */}
        </div>
      </div>
      {/* Main content */}
      <div
        className={`flex-1 p-4 transition-all duration-300 ${
          isOpen ? 'ml-64' : 'ml-0'
        }`}
        style={{ marginLeft: isOpen ? '250px' : '0' }} // Ajuste adicional para evitar superposición
      >
        {/* Button to toggle sidebar */}
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={toggleSidebar}
        >
          {/* Toggle icon based on isOpen state */}
          {isOpen ? (
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
        {/* Main content area */}
        <div className="flex flex-col items-start">
          {/* Your main content here */}
        </div>
      </div>
    </div>
  );
};

export default Navigation;
