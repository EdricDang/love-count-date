import React from "react";

const Couple = () => {
  return (
    <div
      id="couple"
      className="w-full h-[500px] bg-white z-1 flex flex-col items-center"
    >
      <div className="">
        <h2 className="text-[30px] py-5 font-semibold">Cặp đôi</h2>
      </div>
      <div className="flex flex-col xl:flex-row">
        <div className="w-full xl:w-[50%] p-5 flex flex-col items-center justify-center">
          <div
            className="flex items-center mt-10 justify-center size-[200px] xl:size-[220px] rounded-[50%] bg-white"
            style={{
              backgroundImage: `url('/avartar/avt-thinh.jpeg')`,
              backgroundSize: "cover",
              backgroundPosition: "cover",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <h3 className="text-[24px] py-5 font-semibold">Đặng Hữu Thịnh</h3>
          <div className="p-10 box-shadow-custom rounded-md">
            Anh là một coder, hướng nội với cả thế giới, nhưng bị nói nhiều khi
            ở bên em, làm việc bằng cả cái tâm, em bằng cả trái tim...
          </div>
        </div>
        <div className="p-5 w-full xl:w-[50%] flex flex-col items-center justify-center">
          <div
            className="flex items-center mt-10 justify-center size-[200px] xl:size-[220px] rounded-[50%] bg-white"
            style={{
              backgroundImage: `url('/avartar/avt-linh.jpeg')`,
              backgroundSize: "cover",
              backgroundPosition: "cover",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <h3 className="text-[24px] py-5 font-semibold">Lê Thùy Linh</h3>
          <div className="p-10 box-shadow-custom rounded-md">
            Em người con gái Ninh Bình mộng mơ, ít nói, thờ ơ. Nhưng rất là mạnh mẽ, yêu không chịu nói, thích không chịu chủ động...
          </div>
        </div>
      </div>
    </div>
  );
};

export default Couple;
