import React from "react";

const Cards = ({ blog }) => {
  return (
    <div className="border flex flex-col p-2 w-[300px] h-[300px]">
      <img
        src={
          blog.cover_image
            ? blog.cover_image
            : "public/evan-wise-r3uyikznSeo-unsplash.jpg"
        }
        className="w-[100px] h-[100px]"
      ></img>
      <div className="flex flex-col">
        <span>{blog?.type_of}</span>
        <h2>{blog.title}</h2>
        <div className="flex items-center gap-2">
          <img
            src={blog.user.profile_image}
            className="w-[100px] h-[100px] rounded-full"
          />
          <p>{blog.user.name}</p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
