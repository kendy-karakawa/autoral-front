import { w, wx } from "windstitch";
import { useMemo, useState } from "react";
import { DebounceInput } from "react-debounce-input";
import Button from "../Form/Button";
import apiUser from "../../services/ApiUser";
import AddUserCard from "../Card/AddUserCard";
import apiParticipant from "../../services/ApiParticipant";

export default function UserSeach({ members, groupId, token, toggle, setToggle}) {
  const [query, setQuery] = useState("");
  const [usersQueryResult, setUsersQueryResult] = useState([]);
  const [addUserList, setAddUserList] = useState([]);
  const [userList, setUserList] = useState([]);
  const [disable, setDisable] = useState(false);

  useMemo(() => {
    setUserList(addUserList);
  }, [addUserList]);

  async function handleUserSearch(searchTerm) {
    if (!searchTerm) return setUsersQueryResult([]);
    setQuery(searchTerm);
    try {
      const users = await apiUser.getUsersWithSearchTerm(
        token,
        searchTerm,
        groupId
      );
      const usersWithotMembers = users.filter(
        (object) => !members.some((item) => item.userId === object.id)
      );
      setUsersQueryResult(usersWithotMembers);
    } catch (err) {
      console.log(err.response.data.message);
    }
  }

  function addUser(user) {
    const find = userList.some((item)=> item.id === user.id)
    if(find){
        setQuery("");
        setUsersQueryResult([]); 
        return
    }
    setQuery("");
    setUsersQueryResult([]);
    setAddUserList([...addUserList, user]);
  }

  function removeUser(user) {
    const removedUserList = addUserList.filter((item) => item.id !== user.id);
    setAddUserList(removedUserList);
  }

  async function onSubmit(e){
    e.preventDefault();
    if(userList.length ===0) return
    try {
        const body = userList.map(item => ({id: item.id}))
        await apiParticipant.createParticipants(token, groupId, body)
        setAddUserList([])
        setUserList([])
        setToggle(!toggle)
    } catch (err) {
        console.log(err.response.data.message);

    }
  }

  return (
    <Form onSubmit={onSubmit}>
        {userList.length !==0 && <Title>Lista de usuarios a serem adicionados </Title>}
      <ul items={userList.length}>
        {userList.map((el) => (
          <AddUserCard
            key={el.id}
            data={el}
            add={false}
            removeUser={removeUser}
            addUser={addUser}
          />
        ))}
      </ul>
      <DebounceInput className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 mt-5 block w-full p-2.5"
        placeholder="Procurar usuario"
        minLength={3}
        debounceTimeout={300}
        list="users"
        onChange={(e) => handleUserSearch(e.target.value)}
        value={query}
      />
      <ul items={usersQueryResult.length}>
        {usersQueryResult.map((el) => (
          <AddUserCard
            key={el.id}
            data={el}
            add={true}
            removeUser={removeUser}
            addUser={addUser}
          />
        ))}
      </ul>
      <Button>Convidar</Button>
    </Form>
  );
}

const Form = w.form(
  `max-w-sm min-w-[300px] flex min-h-[50%] flex-col items-center justify-between mt-[10px]`
);


const Title = w.h1(`
text-1xl font-medium leading-none text-gray-900 dark:text-white 
`);
