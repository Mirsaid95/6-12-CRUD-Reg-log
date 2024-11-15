import React from "react";
import { request } from "../config/request";
import { Outlet, Navigate } from "react-router-dom";
import { loadState } from "../config/storage";

export const MainLayout = () => {
  const user = loadState("userData");

  if (!user) {
    return <Navigate replace={true} to={"/"} />;
  }

  return (
    <>
      <header className="bg-blue-900 w-full h-[80px]">
        <div className="max-w-[1240px] h-full mx-auto pt-5 items-center">
          <div className="flex items-center gap-[200px]">
            <h1 className="text-[30px] font-bold text-white items-start justify-start">
              WORLD BOOK
            </h1>
            <div className="w-[450px] rounded-[2px]">
              <input
                type="search"
                placeholder="search"
                className="w-full h-[35px] rounded-[2px] pl-2 outline-none"
              />
            </div>
          </div>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};
