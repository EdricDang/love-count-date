"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const Banner = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  return (
    <div
      className="bg-[#ccc] h-[100vh] flex items-center justify-center relative"
      style={{
        backgroundImage: `url('/pictures/sky-blue.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute bottom-[-2px] left-0 right-0 h-[60px] w-full z-1">
        <Image
          src="/icons/layer-xuoc.png"
          alt="xuoc"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="w-full flex flex-col justify-center items-center gap-20 p-2 relative">
        <div className="flex flex-col items-center gap-5">
          <h2 className="text-[24px] text-white">TRẢI QUA</h2>
          <div className="flex items-center justify-center px-[100px] py-5 min-w-[300px] bg-[#0808083c] text-[#ffffff] rounded-[20px]">
            <div className="flex flex-col items-center justify-center">
              <div className="text-[18px]">{timeLeft.days} ngày </div>
              <div className="text-[18px]">
                {String(timeLeft.hours).padStart(2, '0')}:
                {String(timeLeft.minutes).padStart(2, '0')}:
                {String(timeLeft.seconds).padStart(2, '0')}
              </div>
            </div>
          </div>
        </div>
        <div className="w-full max-w-[450px] flex justify-around pb-18">
          <div
            className="flex items-center justify-center size-[100px] xl:size-[150px] rounded-[50%] bg-white"
            style={{
              backgroundImage: `url('/avartar/avt-thinh.jpeg')`,
              backgroundSize: "cover",
              backgroundPosition: "cover",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <div className="flex flex-col items-center justify-center size-[90px] xl:size-[120px] rounded-[50%]">
            <Image src="/icons/traitim.gif" alt="love" width={90} height={90} />
            <div className="text-[#ffffff] text-[12px] xl:text-[16px]">
              25-08-2024
            </div>
          </div>
          <div
            className="flex items-center justify-center size-[100px] xl:size-[150px] rounded-[50%] bg-white"
            style={{
              backgroundImage: `url('/avartar/avt-linh.jpeg')`,
              backgroundSize: "cover",
              backgroundPosition: "cover",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
