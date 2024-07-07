import React from 'react';

const PrincipalLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="w-full mx-auto bg-white shadow-lg rounded-lg p-6">
        {children}
      </div>
    </div>
  );
};

export default PrincipalLayout;
