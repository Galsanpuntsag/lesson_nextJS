import { useState } from "react";

const About = () => {
  const [count, setCount] = useState(0);
  const add = () => {
    setCount(count + 10);
    console.log("add", count);
  };
  const sub = () => {
    setCount(count - 10);
    console.log("sub", count);
  };
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
};
export default About;
