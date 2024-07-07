"use client";

import { ReactNode } from "react";
import { useAuth } from "../hooks/auth";
import Loading from "@/app/(app)/Loading";
import Navigation from "./Navigation";

interface AppLayoutProps {
  children: ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  const { user } = useAuth({ middleware: "auth", redirectIfAuthenticated: false });

  if (!user) {
    return <Loading />;
  }

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Navigation user={user} />
      <main className="flex-1 p-7 text-2xl font-semibold h-screen">
        {children}
      </main>
    </div>
  );
};

export default AppLayout;
