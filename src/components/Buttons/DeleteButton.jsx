import { TrashIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

export default function DeleteButton({}) {
  return (
    <>
      <Link >
      <TrashIcon className="h-6 w-6 " />
      </Link>
    </>
  );
}