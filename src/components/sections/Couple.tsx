import React from "react";

const Couple = () => {
  return (
    <div
      id="couple"
      className="w-full h-[500px] bg-white z-1 flex flex-col items-center"
    >
      <div className="">
        <h2 className="text-[30px] py-8 font-semibold">Cặp đôi</h2>
      </div>
      <div className="container">
        <div className="flex flex-col xl:flex-row gap-20">
          <div className="relative w-full xl:w-[50%] p-5 flex flex-col items-center justify-center">
            <div className="xl:absolute top-0 right-0 flex items-center mt-10 justify-center size-[180px] xl:size-[220px] rounded-[50%] bg-white box-shadow-custom">
              <div
                className="size-[180px] xl:size-[200px] rounded-[50%]"
                style={{
                  backgroundImage: `url('/avartar/avt-thinh.jpeg')`,
                  backgroundSize: "cover",
                  backgroundPosition: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
            </div>
            <h3 className="text-[24px] py-5 font-semibold">Đặng Hữu Thịnh</h3>
            <div className="xl:pr-[180px] xl:pl-[50px]">
              <div className="p-10 box-shadow-custom rounded-md">
                Anh là một coder, hướng nội với cả thế giới, nhưng bị nói nhiều
                khi ở bên em, làm việc bằng cả cái tâm, em bằng cả trái tim...
              </div>
            </div>
          </div>
          <div className="relative w-full xl:w-[50%] p-5 flex flex-col items-center justify-center">
            <div className="xl:absolute top-0 left-0 flex items-center mt-10 justify-center size-[180px] xl:size-[220px] rounded-[50%] bg-white box-shadow-custom">
              <div
                className="size-[180px] xl:size-[200px] rounded-[50%]"
                style={{
                  backgroundImage: `url('/avartar/avt-linh.jpeg')`,
                  backgroundSize: "cover",
                  backgroundPosition: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
            </div>
            <h3 className="text-[24px] py-5 font-semibold">Lê Thùy Linh</h3>
            <div className="xl:pl-[180px] xl:pr-[50px]">
              <div className="p-10 box-shadow-custom rounded-md">
                Em người con gái Ninh Bình mộng mơ, ít nói và thờ ơ. Nhưng rất là
                mạnh mẽ, yêu không chịu nói, thích không chịu chủ động...
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Couple;
