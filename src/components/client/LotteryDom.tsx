"use client";

import React, { Fragment, useRef, useState } from "react";
import { LuckyWheel } from "@lucky-canvas/react";
import ResultWheelLucky from "./ResultWheelLucky";
type PageProps = {
  listFoodForReels: any;
};

const LotteryDom: React.FC<PageProps> = (props: PageProps) => {
  console.log("props --", props);
  const [timeDuration, setTimeDuration] = useState(10);
  const myLuckyRef = useRef();
  const [item, setItem] = useState("");
  const [dataSource, setDataSource] = useState<any>({
    blocks: [{ padding: "13px", background: "#d64737" }],
    prizes: JSON.parse(props.listFoodForReels),
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
      <div className="flex justify-around items-center p-[20px] max-md:pt-[20px] max-md:p-0 max-md:flex-col">
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
            // setItem(prize.title as string);
            setItem(prize);
          }}
        />
        <ResultWheelLucky item={item} />
      </div>
    </>
  );
};

export default LotteryDom;
