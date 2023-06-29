import { useEffect, useState } from "react";
import GroupCard from "../components/Card/GroupCard";
import Button from "../components/Form/Button";
import { w } from "windstitch";
import apiGroup from "../services/ApiGroup";
import useToken from "../hooks/useToken";
import { Link, useNavigate } from "react-router-dom";
import BaseScreen from "../components/BaseScreen/BaseScreen";

export default function HomePage() {
  const [groups, setGroups] = useState([]);
  const [toggle, setToggle] = useState(false);
  const token = useToken();
  const navigate = useNavigate();

  useEffect(() => {
    async function findGroups() {
      try {
        const result = await apiGroup.findUserGroup(token);
        setGroups(result);
      } catch (err) {
        console.log(err.response.data.message);
        if (err.response.status === 401) navigate("/sign-in");
      }
    }
    findGroups();
  }, [toggle]);

  return (
    <BaseScreen>
      <Title>Encontre seu grupo</Title>
      <CardBox>
        {groups.length === 0 && <p>Nenhum grupo encontrado!</p>}
        {groups &&
          groups.map((el) => (
            <GroupCard
              key={el.id}
              data={el}
              toggle={toggle}
              setToggle={setToggle}
            />
          ))}
      </CardBox>
      <ButtonBox>
        <Link to={"/create-group"}>
          <Button>Criar grupo</Button>
        </Link>
      </ButtonBox>
    </BaseScreen>
  );
}

const Title = w.h1(`
text-3xl font-bold leading-none text-gray-900 dark:text-white mb-[20px]
`);

const CardBox = w.div(`
h-full flex flex-col items-center justify-between
`);

const ButtonBox = w.div(`min-w-[300px] md:min-w-[400px] mb-[50px]`);
