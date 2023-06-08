import { HandThumbUpIcon, HandThumbDownIcon } from "@heroicons/react/24/solid";
import { w } from "windstitch";

export default function HandleButton() {
  return (
    <div className="flex items-center justify-between">
      <AceptButton type="button">Aceitar</AceptButton>
      <DeclineButton type="button">Recusar</DeclineButton>
    </div>
  );
}

const DeclineButton  = w.button(
  `text-red-700 hover:text-white border border-red-700 hover:bg-red-800 
  focus:ring-4 focus:outline-none focus:ring-red-300 font-medium 
  rounded-lg text-sm px-3 py-2 text-center mr-2 
  dark:border-red-500 dark:text-red-500 dark:hover:text-white 
  dark:hover:bg-red-600 dark:focus:ring-red-900`
);

const AceptButton = w.button(
  `text-green-700 hover:text-white border border-green-700 hover:bg-green-800 
  focus:ring-4 focus:outline-none 
  focus:ring-green-300 font-medium rounded-lg 
  text-sm px-3 py-2 text-center  mr-2 
  dark:border-green-500 dark:text-green-500 dark:hover:text-white 
  dark:hover:bg-green-600 dark:focus:ring-green-900`
);
