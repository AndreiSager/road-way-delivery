import { FaCheckCircle } from "react-icons/fa";
import DownloadBtns from "./Downloads/DownloadBtns";

export default function Value() {
  const size = 20;

  return (
    <div className="flex w-full flex-col items-center justify-center">
      <div className="flex w-full max-w-center flex-row items-center justify-between px-40 py-24">
        <div className="flex w-full max-w-[730px] flex-col gap-12">
          <h1 className="text-5xl font-bold">
            Your <span className="text-accent-1">All-in-One Solution</span>
            <br /> for Fast Deliveries
          </h1>
          <div className="flex flex-col gap-6">
            <p className="w-full max-w-[570px]">
              Roadway Delivery offers real-time tracking, comprehensive delivery
              analytics, and a robust set of features, streamlining your
              logistics and providing instant access to all your critical data.
            </p>
            <div className="">
              <div className="flex w-full max-w-[510px] flex-row items-center gap-2">
                <FaCheckCircle size={size} className="text-accent-1" />
                <p className="">
                  Schedule and monitor deliveries from anywhere
                </p>
              </div>
              <div className="flex w-full max-w-[510px] flex-row items-center gap-2">
                <FaCheckCircle size={size} className="text-accent-1" />
                <p className=""> Get instant pricing and real-time tracking </p>
              </div>
              <div className="flex w-full max-w-[510px] flex-row items-center gap-2">
                <FaCheckCircle size={size} className="text-accent-1" />
                <p className=""> Review delivery history and performance</p>
              </div>
              <div className="flex w-full max-w-[510px] flex-row items-center gap-2">
                <FaCheckCircle size={size} className="text-accent-1" />
                <p className="">
                  {" "}
                  Track delivery speed, success rates, and routes
                </p>
              </div>
            </div>
          </div>
          <DownloadBtns />
        </div>
        <div className="relative mb-[100px] flex w-[570px] flex-col items-center justify-center">
          <div className="absolute left-0 top-0 z-20 h-[600px] w-[320px] -translate-x-[45%] translate-y-[20%] rounded-[50px] border-8 border-black bg-gray-100" />
          <div className="z-10 h-[600px] w-[320px] rounded-[50px] border-8 border-black bg-gray-100" />
        </div>
      </div>
    </div>
  );
}
