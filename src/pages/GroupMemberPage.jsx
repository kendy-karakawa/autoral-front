import { useEffect, useState } from "react";
import Header from "../components/Header/header";
import { w } from "windstitch";
import { useNavigate, useParams } from "react-router-dom";
import useToken from "../hooks/useToken";
import apiParticipant from "../services/ApiParticipant";
import UserCard from "../components/Card/UserCard";
import UserSeach from "../components/UserSearch/UserSearch";
import BaseScreen from "../components/BaseScreen/BaseScreen";

export default function GroupMemberPage() {
  const [members, setMembers] = useState([]);
  const [toggle, setToggle] = useState(true);
  const { groupId } = useParams();
  const token = useToken();
  const navigate = useNavigate();

  useEffect(() => {
    async function getMembers() {
      try {
        const result = await apiParticipant.getGroupParticipant(token, groupId);
        //console.log(result);
        setMembers(result);
      } catch (err) {
        console.log(err.response.data.message);
        if (err.response.status === 401) navigate("/sign-in");
      }
    }
    getMembers();
  }, [toggle]);

  return (
    <BaseScreen>
      <Title>Membros</Title>
      <ul items={members.length}>
        {members.map((el) => (
          <UserCard key={el.id} data={el} />
        ))}
      </ul>
      <UserSeach
        members={members}
        groupId={groupId}
        token={token}
        toggle={toggle}
        setToggle={setToggle}
      />
    </BaseScreen>
  );
}

// const Container = w.div(`
//    w-full
//     h-screen
//     bg-gradient-to-b from-blue-400 to-teal-400	
//     flex
//     items-start	
//     justify-center
//     overflow-auto
//     pt-[100px]	   
    
// `);

// const WhiteBox = w.div(`
// w-full  md:w-6/12 bg-slate-100 min-h-full flex flex-col items-center justify-start  
// `);

// const Box = w.div(`
// flex flex-col items-center 
// `);

const Title = w.h1(`
text-3xl font-bold leading-none text-gray-900 dark:text-white mb-[20px]
`);
