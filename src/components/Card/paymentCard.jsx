import { w } from "windstitch";
import JoinButton from "../Buttons/EditButton";
import DeleteButton from "../Buttons/DeleteButton";

export default function PaymentCard({ }) {
  
  

  return (
    <CardContainer>
        <Img></Img>
        <Time>February 2022</Time>
        <Title>Kendy pagou R$ 500,00 para Transporte</Title>
        <P>Dividiu igualmente com todos</P>
        <ButtonBox>
        <JoinButton/>
        <DeleteButton/>
        </ButtonBox>
        
        {/* <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">Learn more <svg class="w-3 h-3 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></a> */}
    </CardContainer>
  );
}

const CardContainer = w.li(`mb-6 ml-6`);

const Img = w.div(`
absolute w-10 h-10 bg-gray-200 rounded-full mt-1.5 -left-5 border border-white 
dark:border-gray-900 dark:bg-gray-700
`)

const Time = w.time(`
mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500   
`)

const Title = w.h3(`
text-lg font-semibold text-gray-900 dark:text-white
`);

const P = w.p(`
mb-2 text-base font-normal text-gray-500 dark:text-gray-400   
`)

const ButtonBox = w.div(`flex items-center justify-between w-20 `);



