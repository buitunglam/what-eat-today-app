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
        title: "Tai nghe",
        background: "#f8d384",
        fonts: [{ text: "Tai nghe", top: "18%" }],
      },
      {
        title: "Móc khóa",
        background: "#f9e3bb",
        fonts: [{ text: "Móc khoá", top: "18%" }],
      },
      {
        title: "Móc khoá",
        background: "#f8d384",
        fonts: [{ text: "Móc khoá", top: "18%" }],
      },
      {
        title: "Bàn phím",
        background: "#f9e3bb",
        fonts: [{ text: "Bàn phím", top: "18%" }],
      },
      {
        title: "Bàn phím",
        background: "#f8d384",
        fonts: [{ text: "Bàn phím", top: "18%" }],
      },
      {
        title: "Móc khoá",
        background: "#f9e3bb",
        fonts: [{ text: "Móc khoá", top: "18%" }],
      },
      {
        title: "Móc khoá",
        background: "#f8d384",
        fonts: [{ text: "Móc khoá", top: "18%" }],
      },
      {
        title: "Sổ",
        background: "#f9e3bb",
        fonts: [{ text: "Sổ", top: "18%" }],
      },
      {
        title: "Móc khoá",
        background: "#f8d384",
        fonts: [{ text: "Móc khoá", top: "18%" }],
      },
      {
        title: "Móc khoá",
        background: "#f9e3bb",
        fonts: [{ text: "Móc khoá", top: "18%" }],
      },
      {
        title: "Sổ",
        background: "#f8d384",
        fonts: [{ text: "Sổ", top: "18%" }],
      },
      {
        title: "Móc khóa",
        background: "#f9e3bb",
        fonts: [{ text: "Móc khoá", top: "18%" }],
      },
      {
        title: "Móc khóa",
        background: "#f8d384",
        fonts: [{ text: "Móc khoá", top: "18%" }],
      },
      {
        title: "Móc khóa",
        background: "#f9e3bb",
        fonts: [{ text: "Móc khoá", top: "18%" }],
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
      fontSize: "14px",
    },
  });
  return (
    <>
      {/* <h2>{!item ? "Quay nào..." : `Chúc mừng bạn đã trúng: ${item}`}</h2> */}
      <div className="flex justify-between items-center p-[20px]">
        <LuckyWheel
          ref={myLuckyRef}
          width="500px"
          height="500px"
          blocks={dataSource.blocks}
          prizes={dataSource.prizes}
          buttons={dataSource.buttons}
          defaultStyle={dataSource.defaultStyle}
          onStart={() => {
            setItem("");
            console.log("ref on start ----", myLuckyRef);
            if (!myLuckyRef) return;
            console.log("reun 0-----");
            //@ts-ignore
            myLuckyRef?.current?.play();
            setTimeout(() => {
              console.log("time out----");
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
        <ResultWheelLucky />
      </div>
    </>
  );
};

export default LotteryDom;
