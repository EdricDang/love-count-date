"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { calculateTimeDifferenceDetailed } from "@/utils";

const Banner = () => {
  const [timeElapsed, setTimeElapsed] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Tính khoảng thời gian ban đầu giữa 2 ngày
    const initialTimeDifference = calculateTimeDifferenceDetailed(
      "2024-09-22T00:00:00"
    );

    // Khởi tạo thời gian bắt đầu từ giá trị ban đầu
    let elapsedTime = {
      days: initialTimeDifference.days,
      hours: initialTimeDifference.hours,
      minutes: initialTimeDifference.minutes,
      seconds: initialTimeDifference.seconds,
    };

    // Hàm để tăng thời gian lên mỗi giây
    const incrementTime = () => {
      elapsedTime.seconds += 1;

      // Kiểm tra và điều chỉnh phút, giờ, ngày khi giây vượt quá 59
      if (elapsedTime.seconds >= 60) {
        elapsedTime.seconds = 0;
        elapsedTime.minutes += 1;
      }
      if (elapsedTime.minutes >= 60) {
        elapsedTime.minutes = 0;
        elapsedTime.hours += 1;
      }
      if (elapsedTime.hours >= 24) {
        elapsedTime.hours = 0;
        elapsedTime.days += 1;
      }

      // Cập nhật state
      setTimeElapsed({ ...elapsedTime });
    };

    // Thiết lập interval để tăng thời gian mỗi giây
    const timerId = setInterval(incrementTime, 1000);

    // Dọn dẹp interval khi component unmount
    return () => clearInterval(timerId);
  }, []);

  return (
    <div
      className="h-[100vh] flex items-center justify-center relative"
      style={{
        backgroundImage: `url('/pictures/sky-blue.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute bottom-[-2px] left-0 right-0 h-[80px] w-full z-1">
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
              <div className="text-[18px]">{timeElapsed.days} ngày </div>
              <div className="text-[24px]">
                {String(timeElapsed.hours).padStart(2, "0")}:
                {String(timeElapsed.minutes).padStart(2, "0")}:
                {String(timeElapsed.seconds).padStart(2, "0")}
              </div>
            </div>
          </div>
        </div>
        <div className="w-full max-w-[450px] flex justify-around pb-18">
          <div
            className="flex items-center justify-center size-[100px] xl:size-[150px] rounded-[50%] bg-white"
            style={{
              backgroundImage: `url('/avartar/avt-nam.jpg')`,
              backgroundSize: "cover",
              backgroundPosition: "cover",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <div className="flex flex-col items-center justify-center size-[90px] xl:size-[120px] rounded-[50%]">
            <Image src="/icons/traitim.gif" alt="love" width={90} height={90} />
            <div className="text-[#ffffff] text-[12px] xl:text-[16px]">
              00-00-0000
            </div>
          </div>
          <div
            className="flex items-center justify-center size-[100px] xl:size-[150px] rounded-[50%] bg-white"
            style={{
              backgroundImage: `url('/avartar/avt-nu.jpg')`,
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
