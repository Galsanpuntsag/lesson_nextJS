import React from "react";
import ParentHeader from "@/components/HeaderSection";
import CardsRespo from "@/components/CardsRespo";

function Home() {
  return (
    <div className="">
      <div className="w-10/12 h-10/12 mx-auto sm:width-3/4">
        <ParentHeader />
      </div>
      <main className="flex justify-center mx-auto">
        <CardsRespo />
      </main>
    </div>
  );
}
export default Home;
