import React from "react";

const contact = () => {
  return (
    <div className="">
      <div className="flex flex-col items-center mb-0">
        <div className="w-[624px] h-[163px]">
          <h className="text-[40px] font-semibold">Contact Us</h>
          <div className="max-w-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
            dolorem consequatur, quis eaque perferendis repudiandae veritatis
            beatae quod ducimus debitis? Similique quasi quis tempore animi
            laborum id fugit ipsa nemo.
          </div>
        </div>
        <div className="flex flex-row border gap-10">
          <div className="flex flex-col w-[294px] h-[100px] p-4 border border-slate-600 rounded-xl">
            Address
            <h>1328 Oak Ridge Drive, Saint Louis, Missouri</h>
          </div>
          <div className="flex flex-col w-[294px] h-[100px] p-4 border border-slate-600 rounded-xl">
            Contact
            <h>313-332-8662 info@email.com</h>
          </div>
        </div>
        <div className="w-[643px] h-[440px] mt-6">
          <div className="flex flex-col gap-5 bg-slate-100 p-4 rounded-2xl">
            <h>Leave a Message</h>
            <div className="flex gap-10">
              <input
                type="text"
                placeholder="Your Name"
                className="w-[225px] h-[38px] border pl-4 rounded-2xl "
              ></input>
              <input
                type="text"
                placeholder="Your Email"
                className="w-[225px] h-[38px] border pl-4 rounded-2xl"
              ></input>
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="w-[478px] h-[35px] rounded-2xl pl-4"
            ></input>
            <div className="flex items-start">
              <input
                type="text"
                placeholder="Write a message"
                className="w-[478px] h-[135px] rounded-2xl pb-[100px] pl-4"
              ></input>
            </div>
            <button className="w-[180px] h-[30px] bg-blue-300 hover:bg-sky-400 rounded-xl">
              Send message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default contact;
