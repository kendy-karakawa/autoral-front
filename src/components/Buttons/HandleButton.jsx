import { HandThumbUpIcon, HandThumbDownIcon } from "@heroicons/react/24/solid";

export default function HandleButton() {
  return (
    <div className="w-[60px] flex items-center justify-between">
      <HandThumbUpIcon className="h-6 w-6 text-black hover:text-green-500" />
      <HandThumbDownIcon className="h-6 w-6 text-black hover:text-red-600 " />
    </div>
  );
}
