import { w } from "windstitch";
import JoinButton from "../Buttons/JoinButton";
import HandleButton from "../Buttons/HandleButton";

export default function GroupCard() {
  return (
    <CardContainer>
      <Div>
        <Img />
        <Groupname>nome do grupo</Groupname>
      </Div>
      <Div>
        <HandleButton/>
      </Div>
      
    </CardContainer>
  );
}

const CardContainer = w.div(`
    w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow 
    dark:bg-gray-800 dark:border-gray-700  p-3 flex items-center justify-between	
`);

const Img = w.img(`
w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500
`);

const Div = w.div(`
flex items-center 
`)

const Groupname = w.p(`
text-1xl font-semibold text-gray-900 dark:text-white ml-2
`);
