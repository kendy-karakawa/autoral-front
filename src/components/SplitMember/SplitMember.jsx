import { useEffect, useState } from "react";
import { w } from "windstitch";
import SelectUserCard from "../Card/SelectUserCard";
import apiParticipant from "../../services/ApiParticipant";

export default function SplitMember({ token, groupId}) {
  const [unselectMembers, setUnselectMembers] = useState([]);
  const [selectedMembers, setSelectedMembers] = useState([]);

 useEffect(() => {
    async function getMembers() {
      try {
        const result = await apiParticipant.getGroupParticipant(token, groupId);
        //console.log(result);
        setUnselectMembers(result);
      } catch (err) {
        console.log(err.response.data.message);
        //console.log(err);
        if (err.response.status === 401) navigate("/sign-in");
      }
    }
    
    getMembers();
    
  }, []);
    
  function addUser(user) {
    const removeUser = unselectMembers.filter((item) => item.id !== user.id)
    setUnselectMembers(removeUser)
    setSelectedMembers([...selectedMembers, user]);
  }

  function removeUser(user) {
    const removeUser = selectedMembers.filter((item) => item.id !== user.id);
    setSelectedMembers(removeUser);
    setUnselectMembers([...unselectMembers, user])
  }
    
    
  
  return (
    <MemberBox>
      {selectedMembers.length !== 0 && <Title>Membros selecionados</Title>}
      <ul items={selectedMembers.length}>
      {selectedMembers.map((el) => (
          <SelectUserCard 
          key={el.id}
          data={el}
          removeUser={removeUser}
          addUser={addUser}
          add={false}
          />
        ))}
      </ul>
      <Title>Selecione os membros para a divisão</Title>
      <ul items={unselectMembers.length}>
        {unselectMembers.map((el) => (
          <SelectUserCard 
          key={el.id}
          data={el}
          removeUser={removeUser}
          addUser={addUser}
          add={true}
          />
        ))}
      </ul>
    </MemberBox>
  );
}

const MemberBox = w.div(`
flex flex-col items-center justify-between mt-3
`);

const Title = w.h1(`
text-1xl font-medium leading-none text-gray-900 dark:text-white mt-3 mb-3
`);
