"use client";

import { FQAContent as Questions } from "@/constants";
import { useEffect, useState } from "react";
import { ChatCircle, House03, QrCode } from "react-coolicons";

export default function FAQ() {
  useEffect(() => {
    setState({ ...appState, activeObject: appState.objects[1] });
  }, []);

  const [appState, setState] = useState({
    activeObject: { id: 1 },
    objects: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }],
  });

  function toggleActive(index: number) {
    setState({ ...appState, activeObject: appState.objects[index] });
  }

  function toggleActiveQuestion(index: number) {
    if (appState.objects[index] === appState.activeObject) {
      return "cursor-pointer font-bold text-lg lg:text-left block p-6 shadow-xl rounded-lg bg-accent-1 text-white";
    } else {
      return "cursor-pointer font-bold text-lg lg:text-left block p-6 shadow-xl rounded-lg hover:bg-accent-1 hover:text-white";
    }
  }

  function toggleActiveAnswer(index: number) {
    if (appState.objects[index] === appState.activeObject) {
      return "rounded-lg font-medium text-md text-slate-600 text-justify block p-6 ease-in-out duration-150";
    } else {
      return "rounded-lg font-medium text-md text-slate-600 text-justify block p-6 ease-in-out duration-150 absolute -top-[100%] -z-10";
    }
  }

  return (
    <div className="flex w-full flex-col flex-wrap items-center justify-center gap-16 px-40 py-24">
      <div className="flex w-full flex-col text-center lg:w-[600px]">
        <h1 className="text-5xl font-medium text-black">
          Frequently Asked Questions
        </h1>
        <p className="font-medium text-gray-500">
          Discover the positive impact we've made on the our clients by reading
          through their testimonials. Our clients have experienced our service
          and results, and they're eager to share their positive experiences
          with you.
        </p>
      </div>
      <div className="flex flex-col gap-40 lg:flex-row lg:p-8">
        <div className="flex flex-col gap-24">
          {Categories.map(({ id, title, icon }) => (
            <div key={id} className="flex flex-row items-center gap-4">
              <div className="h-10 w-10">{icon}</div>
              <p className="text-2xl font-bold">{title}</p>
            </div>
          ))}
        </div>
        <div className="rounded-ful; hidded h-full w-[1px] bg-gray-200 md:flex" />
        <div className="flex w-full flex-col lg:w-[700px]">
          {Questions.map((question) => (
            <div
              key={question.id}
              className="relative flex w-full flex-col overflow-hidden border-t border-slate-300 bg-white"
            >
              <h1
                onClick={() => {
                  toggleActive(question.id);
                }}
                className={toggleActiveQuestion(question.id)}
              >
                {question.question}
              </h1>
              <p className={toggleActiveAnswer(question.id)}>
                {question.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const Categories = [
  {
    id: 0,
    title: "General",
    icon: <House03 className="h-10 w-10" />,
  },
  {
    id: 1,
    title: "Support",
    icon: <ChatCircle className="h-10 w-10" />,
  },
  {
    id: 2,
    title: "Others",
    icon: <QrCode className="h-10 w-10" />,
  },
];
