import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

export default function JoinButton({groupId}) {
  return (
    <>
      <Link to={`/group/${groupId}`}>
      <ChevronRightIcon className="h-6 w-6 text-black" />
      </Link>
    </>
  );
}
