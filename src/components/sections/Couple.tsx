"use client";
import React, { useEffect, useRef, useState } from "react";

const Couple = () => {
  const [isVisibleLeft, setIsVisibleLeft] = useState(false);
  const [isVisibleRight, setIsVisibleRight] = useState(false);
  const componentLeftRef = useRef(null);
  const componentRightRef = useRef(null);

  useEffect(() => {
    const observerLeft = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisibleLeft(true);
            observerLeft.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    const observerRight = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisibleRight(true);
            observerRight.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    if (componentLeftRef.current) {
      observerLeft.observe(componentLeftRef.current);
    }

    if (componentRightRef.current) {
      observerRight.observe(componentRightRef.current);
    }

    return () => {
      if (componentLeftRef.current) {
        observerLeft.unobserve(componentLeftRef.current);
      }
      if (componentRightRef.current) {
        observerRight.unobserve(componentRightRef.current);
      }
    };
  }, []);
  return (
    <div
      id="couple"
      className="w-full h-[500px] bg-white z-1 flex flex-col items-center"
    >
      <div className="mt-10">
        <h2 className="text-[30px] py-8 font-semibold">Cặp đôi</h2>
      </div>
      <div className="container">
        <div className="flex flex-col xl:flex-row gap-20">
          <div
            ref={componentLeftRef}
            className={`relative w-full xl:w-[50%] p-5 flex flex-col items-center justify-center ${
              isVisibleLeft ? "animate-slide-in-left" : "opacity-0"
            }`}
          >
            <div className="xl:absolute top-0 right-0 flex items-center mt-10 justify-center size-[180px] xl:size-[220px] rounded-[50%] bg-white box-shadow-custom">
              <div
                className="size-[180px] xl:size-[200px] rounded-[50%]"
                style={{
                  backgroundImage: `url('/avartar/avt-nam.jpg')`,
                  backgroundSize: "cover",
                  backgroundPosition: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
            </div>
            <h3 className="text-[24px] py-5 font-semibold">Tên Bạn Trai</h3>
            <div className="xl:pr-[180px] xl:pl-[50px]">
              <div className="p-10 box-shadow-custom rounded-md">
                Anh là một coder, hiền lành thẳng thắn, hướng nội với cả thế
                giới, nhưng bị nói nhiều khi ở bên em...
              </div>
            </div>
          </div>
          <div
            ref={componentRightRef}
            className={`relative w-full xl:w-[50%] p-5 flex flex-col items-center justify-center ${
              isVisibleRight ? "animate-slide-in-right" : "opacity-0"
            }`}
          >
            <div className="xl:absolute top-0 left-0 flex items-center mt-10 justify-center size-[180px] xl:size-[220px] rounded-[50%] bg-white box-shadow-custom">
              <div
                className="size-[180px] xl:size-[200px] rounded-[50%]"
                style={{
                  backgroundImage: `url('/avartar/avt-nu.jpg')`,
                  backgroundSize: "cover",
                  backgroundPosition: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
            </div>
            <h3 className="text-[24px] py-5 font-semibold">Tên Bạn Gái</h3>
            <div className="xl:pl-[180px] xl:pr-[50px]">
              <div className="p-10 box-shadow-custom rounded-md">
                Em là một coder, hiền lành thẳng thắn, hướng nội với cả thế
                giới, nhưng bị nói nhiều khi ở bên em...
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Couple;
