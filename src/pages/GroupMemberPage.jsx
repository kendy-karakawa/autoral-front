import { useEffect, useState } from "react";
import Header from "../components/Header/header";
import { w } from "windstitch";
import { useParams } from "react-router-dom";
import useToken from "../hooks/useToken";
import apiParticipant from "../services/ApiParticipant";
import UserCard from "../components/Card/UserCard";
import UserSeach from "../components/UserSearch/UserSeatch";

export default function GroupMemberPage() {
  const [members, setMembers] = useState([]);
  const [toggle, setToggle] = useState(true)
  const { groupId } = useParams();
  const token = useToken();

  useEffect(() => {
    async function getMembers() {
      try {
        const result = await apiParticipant.getGroupParticipant(token, groupId);
        setMembers(result);
      } catch (err) {
        console.log(err.response.data.message);
        //alert(err.response.data.message)
      }
    }
    getMembers();
  }, [toggle]);

  return (
    <Container>
      <Header />
      <WhiteBox>
        <Title>Membros</Title>
        <ul items={members.length}>
          {members.map((el) => (
            <UserCard key={el.id} data={el}  />
          ))}
        </ul>
        <UserSeach members={members} groupId={groupId} token={token} toggle={toggle} setToggle={setToggle}/>
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
w-full  md:w-6/12 bg-slate-100 min-h-full flex flex-col items-center justify-start  
`);

const Title = w.h1(`
text-3xl font-bold leading-none text-gray-900 dark:text-white mt-[140px] mb-[20px]
`);

