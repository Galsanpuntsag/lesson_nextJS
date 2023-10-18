import React from "react";
import ParentHeader from "@/components/HeaderSection";
import CardsRespo from "@/components/CardsRespo";

function Home() {
  return (
    <div className="flex flex-col justify-center mx-auto p-4 overflow-hidden">
      <div className="">
        <ParentHeader />
      </div>
      <main className="mx-5">
        <CardsRespo />
      </main>
    </div>
  );
}
export default Home;
