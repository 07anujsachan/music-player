import React, { useState } from "react";
import { MusicList } from "./musicList";
import { Header } from "./header";
export const Main = () => {
  const tabs = ["Trending", "Liked", "Pinned"];
  let [activeTab, setActiveTab] = useState("Trending");
  return (
    <div className="h-screen bg-black">
      <div className="max-w-[1400px] w-full mx-auto my-0">

      <Header />
      <div className="flex justify-center items-center bg-slate-900 w-full">
        {tabs.map((tab) => (
          <h2
            onClick={() => setActiveTab(tab)}
            className={
              activeTab == tab
                ? "bg-green-500 text-white m-4  px-8 py-2 rounded-xl"
                : "bg-black text-white m-4  px-8 py-2 rounded-xl"
            }
          >
            {tab}
          </h2>
        ))}
      </div>

      <MusicList activeTab={activeTab} />
      </div>
    </div>
  );
};
