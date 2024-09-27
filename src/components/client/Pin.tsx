"use client";
import React from "react";

const Pin = ({ type }: { type: string }) => {
  return (
    <div
      className={`${type == "small" ? "row-end-[span_10]" : type == "medium" ? "row-end-[span_16]" : "row-end-[span_20]"} bg-slate-600 rounded-[10px]`}
    >
      <img
        src="/assets/food1.jpg"
        className={"w-full h-full object-cover rounded-[10px]"}
      />
    </div>
  );
};

export default Pin;
