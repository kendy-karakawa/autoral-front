import { w } from "windstitch";
import { Link, useParams } from "react-router-dom";
import useData from "../../hooks/useData";

export default function Header() {
  const user = useData();
  const { groupId } = useParams();

  return (
    <Navbar>
      <Container>
        <LeftBox>
          <Link to={"/"}>
          <Avatar src={user.image} alt="avatar" />
          </Link>
          <UserName>{user.name}</UserName>
          
        </LeftBox>
        {groupId && <MiddleBox>
          <Ul>
            <li>
              <Link to={`/group/${groupId}/`}>
                <A>Home</A>
              </Link>
            </li>
            <li>
              <Link to={`/group/${groupId}/`}>
                <A>Home</A>
              </Link>
            </li>
            <li>
              <Link to={`/group/${groupId}/`}>
                <A>Home</A>
              </Link>
            </li>
            <li>
              <Link to={`/group/${groupId}/member`}>
                <A>Membros</A>
              </Link>
            </li>
          </Ul>
        </MiddleBox>}
      </Container>
    </Navbar>
  );
}

const Navbar = w.nav(
  `bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600`
);
const Ul = w.ul(
  `flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700`
);
const Container = w.div(
  `max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4`
);
const A = w.a(
  `block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`
);
const Avatar = w.img(
  `w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500`
);
const UserName = w.span(
  `self-center text-2xl font-semibold whitespace-nowrap dark:text-white ml-2`
);
const LeftBox = w.div(`flex items-center`);
const MiddleBox = w.div(
  `items-center justify-between hidden w-full md:flex md:w-auto md:order-1`
);
