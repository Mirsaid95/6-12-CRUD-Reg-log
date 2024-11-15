import React from "react";
import { useGetProducts } from "../service/query/useGetProducts";

export const Home = () => {
  const { data } = useGetProducts();

  return (
    <section>
      <div className="flex bg-blue-500">
        <div className="w-[256px] h-[100vh] p-2 bg-blue-900">
          <div className="w-full bg-white">
            <h1 className="text-[20px] text-blue-900 font-bold text-center">
              Categories
            </h1>
          </div>
        </div>

        <div className=" w-full p-1 pt-[30px]">
          <div className=" w-full grid grid-cols-4 p-2 gap-4">
            {data?.map((item) => (
              <div
                className="w-[350px] bg-slate-700  flex flex-col gap-4 rounded-md hover:bg-slate-800 scale-100 hover:shadow-lg hover:shadow-slate-500"
                key={item.id}
              >
                <div className="">
                  <img src={item.image} alt="" className="w-full h-[400px] rounded-t-md" />
                </div>
                <div className="p-2 flex flex-col gap-1">
                  <h1 className="text-[20px] font-bold text-orange-400">
                    {item.title}
                  </h1>
                  <p className="text-white text-[18px]">{item.subtitle}</p>
                  <p className="text-[16px] text-white">
                    {item.authors}
                  </p>
                  <div className="flex items-center justify-between">
                    <p className="text-orange-500">{item.genre}</p>
                    <p className="text-white text-[18px] font-bold">{item.publication_year}</p>
                  </div>
                  <p className="text-orange-500">{item.rating}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
