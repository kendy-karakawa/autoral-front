import { w } from "windstitch";
import apiParticipant from "../../services/ApiParticipant";
import useToken from "../../hooks/useToken";

export default function HandleButton({participantId, groupId, toggle, setToggle, setAcceptedStatus}) {
  const token = useToken()

  async function accept(e){
    e.preventDefault();
    try {
      await apiParticipant.updateAcceptedStatus(token, participantId, groupId)
      setAcceptedStatus(true)
    } catch (err) {
      alert(err.response.data.message);
    }
  }

  async function decline(e){
    e.preventDefault();
    try {
      await apiParticipant.deleteParticipant(token, participantId, groupId)
      setToggle(!toggle)
    } catch (err) {
      alert(err.response.data.message);
    }
  }

  return (
    <Div>
      <AcceptButton type="button" onClick={accept}>Aceitar</AcceptButton>
      <DeclineButton type="button" onClick={decline}>Recusar</DeclineButton>
    </Div>
  );
}

const Div = w.div(`flex items-center justify-between`)

const DeclineButton  = w.button(
  `text-red-700 hover:text-white border border-red-700 hover:bg-red-800 
  focus:ring-4 focus:outline-none focus:ring-red-300 font-medium 
  rounded-lg text-sm px-3 py-2 text-center mr-2 
  dark:border-red-500 dark:text-red-500 dark:hover:text-white 
  dark:hover:bg-red-600 dark:focus:ring-red-900`
);

const AcceptButton = w.button(
  `text-green-700 hover:text-white border border-green-700 hover:bg-green-800 
  focus:ring-4 focus:outline-none 
  focus:ring-green-300 font-medium rounded-lg 
  text-sm px-3 py-2 text-center  mr-2 
  dark:border-green-500 dark:text-green-500 dark:hover:text-white 
  dark:hover:bg-green-600 dark:focus:ring-green-900`
);
