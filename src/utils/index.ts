export function calculateTimeDifferenceDetailed(pastDate: string): {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  } {
    // Lấy thời gian hiện tại
    const currentDate = new Date();

    // Chuyển đổi chuỗi đầu vào thành đối tượng Date
    const pastDateObj = new Date(pastDate);

    // Kiểm tra nếu ngày đầu vào không hợp lệ
    if (isNaN(pastDateObj.getTime())) {
      throw new Error("Ngày đầu vào không hợp lệ.");
    }

    // Tính sự khác biệt giữa thời điểm hiện tại và thời điểm quá khứ (milliseconds)
    const differenceInMillis = currentDate.getTime() - pastDateObj.getTime();

    // Tính số ngày
    const days = Math.floor(differenceInMillis / (1000 * 60 * 60 * 24));

    // Tính số giờ còn lại sau khi trừ đi số ngày
    const hours = Math.floor(
      (differenceInMillis % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );

    // Tính số phút còn lại sau khi trừ đi số giờ
    const minutes = Math.floor(
      (differenceInMillis % (1000 * 60 * 60)) / (1000 * 60)
    );

    // Tính số giây còn lại sau khi trừ đi số phút
    const seconds = Math.floor((differenceInMillis % (1000 * 60)) / 1000);

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  }