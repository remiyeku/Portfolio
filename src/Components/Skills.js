import React from "react";
import { skills } from "../data/data";
import {
  CheckBadgeIcon,
  CpuChipIcon,
  CodeBracketIcon,
  ArrowDownCircleIcon,
  ServerIcon,
  ChartPieIcon,
  CalculatorIcon,
  PresentationChartLineIcon,
} from "@heroicons/react/24/solid";

const bracketIcon = (
  <CodeBracketIcon className="text-blue-400 w-6 h-6 flex-shrink-0 mr-4" />
);

const arrowDown = (
  <ArrowDownCircleIcon className="text-green-600 w-6 h-6 flex-shrink-0 mr-4" />
);

const serverIcon = (
  <ServerIcon className="text-gray-300 w-6 h-6 flex-shrink-0 mr-4" />
);

const pieChart = (
  <ChartPieIcon className="text-orange-300 w-6 h-6 flex-shrink-0 mr-4" />
);

const calculatorIcon = (
  <CalculatorIcon className="text-purple-400 w-6 h-6 flex-shrink-0 mr-4" />
);

const lineGraphIcon = (
  <PresentationChartLineIcon className="text-red-200 w-6 h-6 flex-shrink-0 mr-4" />
);

const skillIcons = {
  JavaScript: bracketIcon,
  TypeScript: bracketIcon,
  React: bracketIcon,
  "Next.js": bracketIcon,
  Node: bracketIcon,
  Git: arrowDown,
  Python: bracketIcon,
  MySQL: serverIcon,
  PostgreSQL: serverIcon,
  Pandas: lineGraphIcon,
  Matplotlib: lineGraphIcon,
  Numpy: calculatorIcon,
  Excel: pieChart,
  PowerBI: pieChart,
  "Other Skill": (
    <CheckBadgeIcon className="text-blue-400 w-6 h-6 flex-shrink-0 mr-4" />
  ),
};

export default function Skills() {
  return (
    <section id="skills">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Skills &amp; Technologies
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            Throughout my journey in the tech world I have gained the following
            skills both professionally and through continuous learning.
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {skills.map((skill) => (
            <div key={skill} className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                {skillIcons[skill] || skillIcons["Other Skill"]}
                <span className="title-font font-medium text-white">
                  {skill}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
