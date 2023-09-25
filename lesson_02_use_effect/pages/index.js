import { useState } from "react";

const [count, setCount] = useState("100");
const add = () => {
  count = count + 1;
  console.log("add", count);
};
const [sub, setSub] = useState();
export default function Home() {
  return (
    <div className="text-3xl flex justify-center flex-col">
      Welcome
      <div className="flex justify-center">
        COUNT: <span className="text-orange-700">{count} </span>
      </div>
      <div className=" flex justify-center ">
        <div className="flex justify-center border" onClick={add}>
          Nemeh
        </div>
        <div className="flex justify-center border" onClick={sub}>
          Hasah
        </div>
      </div>
    </div>
  );
}
