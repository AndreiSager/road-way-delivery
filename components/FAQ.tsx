"use client";

import { FQAGeneral, FQASupport, FQAOthers } from "@/constants";
import { Accordion, AccordionItem as Item } from "@szhsin/react-accordion";
import { useEffect, useState } from "react";
import {
  ChatCircle,
  ChevronDown,
  House03,
  MoreHorizontal,
} from "react-coolicons";

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
      return "cursor-pointer font-bold text-lg lg:text-left block p-6 rounded-lg text-accent-1 shadow-xl";
    } else {
      return "cursor-pointer font-bold text-lg lg:text-left block p-6  rounded-lg hover:text-accent-1";
    }
  }

  function toggleActiveAnswer(index: number) {
    if (appState.objects[index] === appState.activeObject) {
      return "rounded-lg font-medium text-md text-slate-600 text-justify block p-6 ease-in-out duration-150 ";
    } else {
      return "rounded-lg font-medium text-md text-slate-600 text-justify block p-6 ease-in-out duration-150 absolute -top-[100%] -z-10";
    }
  }

  // const [category, setCategory] = useState("General");
  const [questions, setQuestions] = useState(FQAGeneral);
  const handleQuestions = (title: string) => {
    switch (title) {
      case "General":
        setQuestions(FQAGeneral);
      case "Support":
        setQuestions(FQASupport);
      case "Others":
        setQuestions(FQAOthers);
      default:
        setQuestions(FQAGeneral);
    }
  };

  return (
    <div className="flex w-full flex-col flex-wrap items-center justify-center gap-16 px-40 py-24">
      <div className="flex w-full max-w-[700px] flex-col gap-3 text-center">
        <h1 className="text-4xl font-bold text-black">
          Frequently Asked Questions
        </h1>
        <p className="text-base font-medium text-gray-500">
          Discover the positive impact we've made on the our clients by reading
          through their testimonials. Our clients have experienced our service
          and results, and they're eager to share their positive experiences
          with you.
        </p>
      </div>
      <div className="flex flex-col gap-40 lg:flex-row">
        <div className="flex flex-col gap-24">
          {Categories.map(({ title, icon }, id) => (
            <button
              key={id}
              className="flex select-none flex-row items-center gap-4"
              onClick={() => handleQuestions(title)}
            >
              <div className="h-10 w-10">{icon}</div>
              <p className="text-2xl font-bold">{title}</p>
            </button>
          ))}
        </div>
        <div className="hidden h-full w-[1px] rounded-full bg-gray-200 md:flex" />

        <Accordion allowMultiple={false} transition transitionTimeout={500}>
          {questions.map((question, id) => (
            <AccordionItem
              header={question.question}
              key={id}
              initialEntered={id === 0 ? true : false}
            >
              {question.answer}
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}

const AccordionItem = ({ header, ...rest }) => (
  <Item
    {...rest}
    header={({ state: { isEnter } }) => (
      <div className="flex w-full flex-row items-center justify-between">
        {header}
        <ChevronDown
          className={`flex h-8 w-8 items-center justify-center transition-transform duration-500 ease-out ${
            isEnter && "rotate-180"
          }`}
        />
      </div>
    )}
    className={({ isEnter }) =>
      `flex w-full max-w-[900px] flex-col overflow-hidden rounded-[20px] border-b border-gray-100 text-left ${
        isEnter && "border border-gray-100 shadow-xl"
      }`
    }
    buttonProps={{
      className: ({ isEnter }) =>
        `flex w-[900px] text-left p-6 text-lg font-bold ${isEnter && "text-accent-1"}`,
    }}
    contentProps={{
      className: "transition-height duration-500 ease-out",
    }}
    panelProps={{ className: "w-full text-base text-left px-6 pb-6" }}
  />
);

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
    icon: <MoreHorizontal className="h-10 w-10" />,
  },
];
