import { PencilSquareIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

export default function EditButton({groupId}) {
  return (
    <>
      <Link to={`/`}>
      <PencilSquareIcon className="h-6 w-6 text-black" />
      </Link>
    </>
  );
}