import React from "react";

const SingleClientSay = (props) => {
  const { userName, review } = props.review;
  return (
    <>
      <div className="bg-white shadow-md px-14 py-14 rounded-md relative  ">
        <blockquote
          before="“"
          className="
                            before:absolute
                            before:top-9
                            before:left-3
                            before:text-9xl
                            before:text-yellow-200
                            before:content-[attr(before)]
                            text-justify
                            first-letter:capitalize
                            "
        >
          {review.slice(0,200)}
        </blockquote>
        <p className="text-center capitalize text-2xl pt-2 font-medium font-mono">{userName}</p>
      </div>
    </>
  );
};

export default SingleClientSay;
