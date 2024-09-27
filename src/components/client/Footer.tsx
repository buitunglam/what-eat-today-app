import { Box } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-white border-t-[1px] border-solid border-[#e5e7eb] mt-[50px]  pb-[100px] flex justify-between item-center">
      <div className="flex items-center gap-[50px] pt-[50px]">
        <div className="list-none">
          <h3 className="mb-[20px] font-bold">Resource</h3>
          <ul>
            <li className="cursor-pointer pb-[5px]">Find a store</li>
            <li className="cursor-pointer pb-[5px]">Become a mem</li>
            <li className="cursor-pointer pb-[5px]">Send us feedback</li>
            <li className="cursor-pointer pb-[5px]">Find a store</li>
            <li className="cursor-pointer pb-[5px]">Become a mem</li>
            <li className="cursor-pointer pb-[5px]">Send us feedback</li>
          </ul>
        </div>

        <div className="list-none">
          <h3 className="mb-[20px] font-bold">Help</h3>
          <ul>
            <li className="cursor-pointer pb-[5px]">Get help</li>
            <li className="cursor-pointer pb-[5px]">Oder status</li>
            <li className="cursor-pointer pb-[5px]">Deliver</li>
            <li className="cursor-pointer pb-[5px]">Return</li>
            <li className="cursor-pointer pb-[5px]">Payment Options</li>
            <li className="cursor-pointer pb-[5px]">Contact us</li>
          </ul>
        </div>

        <div className="list-none">
          <h3 className="mb-[20px] font-bold">About What-to-eat-today</h3>
          <ul>
            <li className="cursor-pointer pb-[5px]">About What-to-eat-today</li>
            <li className="cursor-pointer pb-[5px]">News</li>
            <li className="cursor-pointer pb-[5px]">Career</li>
            <li className="cursor-pointer pb-[5px]">Investor</li>
            <li className="cursor-pointer pb-[5px]">Sustainability</li>
            <li className="cursor-pointer pb-[5px]">Sustainability</li>
          </ul>
        </div>
      </div>

      <div className="cursor-pointer flex items-center justify-center gap-[10px]">
        <img
          src="/assets/languages.png"
          className="w-[25px] h-[25px]"
          alt="global"
        />
        <select className="outline-none">
            <option>Vietnam</option>
        </select>
      </div>
    </div>
  );
};

export default Footer;
