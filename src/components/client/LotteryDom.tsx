"use client";

import React, { Fragment, useRef, useState } from "react";
import { LuckyWheel } from "@lucky-canvas/react";
import ResultWheelLucky from "./ResultWheelLucky";
type PageProps = {};

const LotteryDom: React.FC<PageProps> = () => {
  const [timeDuration, setTimeDuration] = useState(10);
  const myLuckyRef = useRef();
  const [item, setItem] = useState("");
  const [dataSource, setDataSource] = useState<any>({
    blocks: [{ padding: "13px", background: "#d64737" }],
    prizes: [
      {
        title: "Thịt luộc",
        background: "#f8d384",
        fonts: [{ text: "Thịt luộc", top: "18%" }],
      },
      {
        title: "Nem rán",
        background: "#f9e3bb",
        fonts: [{ text: "Nem rán", top: "18%" }],
      },
      {
        title: "Bún chả",
        background: "#f8d384",
        fonts: [{ text: "Bún chả", top: "18%" }],
      },
      {
        title: "Chả lá nốt",
        background: "#f9e3bb",
        fonts: [{ text: "Chả lá nốt", top: "18%" }],
      },
      {
        title: "Thịt kho trứng",
        background: "#f8d384",
        fonts: [{ text: "Thịt kho trứng", top: "18%" }],
      },
      {
        title: "Lạc rang, thịt nướng",
        background: "#f9e3bb",
        fonts: [{ text: "Lạc rang, thịt nướng", top: "18%" }],
      },
      {
        title: "Thịt bò hầm",
        background: "#f8d384",
        fonts: [{ text: "Thịt bò hầm", top: "18%" }],
      },
      {
        title: "Thịt bò xào (nấm hoặc su su hoặc ớt chuông)",
        background: "#f9e3bb",
        fonts: [
          { text: "Thịt bò xào (nấm hoặc su su hoặc ớt chuông)", top: "18%" },
        ],
      },
      {
        title: "Cá rán",
        background: "#f8d384",
        fonts: [{ text: "Cá rán", top: "18%" }],
      },
      {
        title: "Hàu rán trứng",
        background: "#f9e3bb",
        fonts: [{ text: "Hàu rán trứng", top: "18%" }],
      },
      {
        title: "Trứng đúc thịt",
        background: "#f8d384",
        fonts: [{ text: "Trứng đúc thịt", top: "18%" }],
      },
      {
        title: "Sườn xào chua ngọt",
        background: "#f9e3bb",
        fonts: [{ text: "Sườn xào chua ngọt", top: "18%" }],
      },
      {
        title: "Đậu nhồi thịt",
        background: "#f8d384",
        fonts: [{ text: "Đậu nhồi thịt", top: "18%" }],
      },
      {
        title: "Đậu sốt cà chua",
        background: "#f9e3bb",
        fonts: [{ text: "Đậu sốt cà chua", top: "18%" }],
      },
    ],
    buttons: [
      { radius: "50px", background: "#d64737" },
      { radius: "45px", background: "#fff" },
      { radius: "41px", background: "#f6c66f", pointer: true },
      {
        radius: "35px",
        background: "#ffdea0",
        fonts: [{ text: "Quay", fontSize: "18px", top: -18 }],
      },
    ],
    defaultStyle: {
      fontColor: "#d64737",
      fontSize: "12px",
    },
  });
  return (
    <>
      {/* <h2>{!item ? "Quay nào..." : `Chúc mừng bạn đã trúng: ${item}`}</h2> */}
      <div className="flex justify-around items-center p-[20px] max-md:p-0 max-md:flex-col">
        <LuckyWheel
          ref={myLuckyRef}
          width="400px"
          height="400px"
          blocks={dataSource.blocks}
          prizes={dataSource.prizes}
          buttons={dataSource.buttons}
          defaultStyle={dataSource.defaultStyle}
          onStart={() => {
            setItem("");
            if (!myLuckyRef) return;
            //@ts-ignore
            myLuckyRef?.current?.play();
            setTimeout(() => {
              let indexPrize = (Math.random() * 14) >> 0;
              while (indexPrize === 0 || indexPrize === 3 || indexPrize === 4) {
                indexPrize = (Math.random() * 14) >> 0;
              }
              //@ts-ignore
              myLuckyRef?.current?.stop(indexPrize);
            }, timeDuration);
          }}
          onEnd={(prize) => {
            console.log(prize);
            setItem(prize.title as string);
          }}
        />
        <ResultWheelLucky item={item} />
      </div>
    </>
  );
};

export default LotteryDom;
