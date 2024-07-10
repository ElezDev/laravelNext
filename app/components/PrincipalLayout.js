import React from 'react';

const PrincipalLayout = ({ children }) => {
  return (
    <div className="min-h-screen">
      <div className="w-full mx-auto  shadow-lg rounded-lg p-6">
        {children}
      </div>
    </div>
  );
};

export default PrincipalLayout;
