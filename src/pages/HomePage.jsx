import { useEffect, useState } from "react";
import Header from "../components/Header/header";
import GroupCard from "../components/Card/GroupCard";
import Button from "../components/Form/Button";
import { w } from "windstitch";
import apiGroup from "../services/ApiGroup";
import useToken from "../hooks/useToken";
import { Link, useNavigate } from "react-router-dom";

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
        alert(err.response.data.message);
        if(err.response.status === 401) navigate("/sign-in")
      }
    }
    findGroups();
  }, [toggle]);

  return (
    <Container>
      <Header />
      <WhiteBox>
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
      </WhiteBox>
    </Container>
  );
}

const Container = w.div(`
    w-full
    h-screen
    bg-gradient-to-b from-blue-400 to-teal-400	
    flex
    items-center	
    justify-center
    overflow-auto	  
`);

const WhiteBox = w.div(`
w-full md:w-6/12 bg-slate-100 min-h-full flex flex-col items-center justify-between  
`);

const Title = w.h1(`
text-3xl font-bold leading-none text-gray-900 dark:text-white mt-[140px] mb-[20px]
`);

const MiniText = w.p(`
text-sm font-medium text-gray-500 dark:text-gray-300 mt-2
`);

const CardBox = w.div(`
w-6/12 h-full flex flex-col items-center justify-between
`);

const ButtonBox = w.div(`w-6/12 mb-[50px]`);
