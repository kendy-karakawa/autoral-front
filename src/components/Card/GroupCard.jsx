import { w } from "windstitch";
import JoinButton from "../Buttons/JoinButton";
import HandleButton from "../Buttons/HandleButton";
import { useEffect, useState } from "react";
import apiParticipant from "../../services/ApiParticipant";

export default function GroupCard({ data, toggle, setToggle }) {
  const { id: participantId, userId, groupId, accepted, Groups } = data;
  const { name: groupName, image: groupImage } = Groups;
  const [acceptedStatus, setAcceptedStatus] = useState(accepted);

  
  return (
    <CardContainer>
      <Div>
        <Img src={groupImage} />
        <Div>
          <Groupname>{groupName}</Groupname>
        </Div>
      </Div>
      <Div>
        {acceptedStatus ? (
          <JoinButton groupId={groupId} />
        ) : (
          <HandleButton
            participantId={participantId}
            groupId={groupId}
            toggle={toggle}
            setToggle={setToggle}
            setAcceptedStatus={setAcceptedStatus}
          />
        )}
      </Div>
    </CardContainer>
  );
}

const CardContainer = w.div(`
    min-w-[300px] md:min-w-[400px]
    bg-white border border-gray-200 rounded-lg shadow 
    p-3 flex items-center justify-between mt-2
`);

const Img = w.img(`
w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 
`);

const Div = w.div(`
flex items-center 
`);

const Groupname = w.p(`
text-1xl font-semibold text-gray-900  ml-2
`);
