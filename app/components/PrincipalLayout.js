import React from 'react';
import { useAuth } from '../src/hooks/auth';
import NavigationHeader from '../(app)/menuPrueba';

const PrincipalLayout = ({ children }) => {
  const { user } = useAuth({
    middleware: "auth",
    redirectIfAuthenticated: false,
  });

  if (!user) {
    return <Loading />;
  }
  return (
    <div className="">
      <NavigationHeader user={user} />
      <div className="min-h-screen">
        <div className="w-full mx-auto shadow-lg rounded-lg p-6">
          {children}
        </div>
      </div>
    </div>
  );
};

export default PrincipalLayout;
