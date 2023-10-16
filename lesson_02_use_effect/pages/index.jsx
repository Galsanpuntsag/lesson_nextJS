import React from "react";
import ParentHeader from "@/components/HeaderSection";
import CardsRespo from "@/components/CardsRespo";

function Home() {
  return (
    <div className="flex flex-col justify-center mx-auto ml-[60px]">
      <div className="">
        <ParentHeader />
      </div>
      <main className="">
        <CardsRespo />
      </main>
    </div>
  );
}
export default Home;
