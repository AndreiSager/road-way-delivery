import { FaCheckCircle } from "react-icons/fa";
import DownloadBtns from "./Downloads/DownloadBtns";

export default function Value() {
  const size = 20;

  return (
    <div className="flex w-full flex-col items-center justify-center">
      <div className="flex h-[100vh] max-h-full w-full max-w-center flex-row items-center justify-between px-40 py-24">
        <div className="flex w-full max-w-[730px] flex-col gap-12">
          <h1 className="text-5xl font-bold">
            Your All-in-One Solution for Fast Deliveries
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
        <div>Place Mockup Here</div>
      </div>
    </div>
  );
}
