"use client";

import { ReactNode } from "react";
import { useAuth } from "../hooks/auth";
import Loading from "@/app/(app)/Loading";
import Navigation from "./Navigation";
import Footer from "../components/fotter/fotterComponents";
import { ToastContainer } from "react-toastify";
import { Providers } from "./provider";

interface AppLayoutProps {
  children: ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  const { user } = useAuth({
    middleware: "auth",
    redirectIfAuthenticated: false,
  });

  if (!user) {
    return <Loading />;
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <body className="flex min-h-screen" >
        <Providers>
          <Navigation user={user} />
          <ToastContainer />
          <main className="flex-1 p-7 text-2xl font-normal h-screen ">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
};

export default AppLayout;
{/* <div className="flex min-h-screen bg-gray-100">
<Providers>
  <Navigation user={user} />
  <ToastContainer />
  <main className="flex-1 p-7 text-2xl font-normal h-screen ">
    {children}
  </main>
</Providers>
</div> */}