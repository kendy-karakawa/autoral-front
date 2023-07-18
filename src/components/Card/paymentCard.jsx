import { w } from "windstitch";
import EditButton from "../Buttons/EditButton";
import DeleteButton from "../Buttons/DeleteButton";
import { maskDate, maskValue } from "../../utils/masks";

export default function PaymentCard({ data, memberQty, userId, token, setToggle}) {
  const {expenseId, name, value, paidBy, createdAt, divisions} = data

  const divisionMembers = divisions.map(obj => obj.name).join(', ')
  
  const date = createdAt.split('T')[0]

  

  return (
    <CardContainer>
        <Img src={paidBy.image}/>
        <Time>{maskDate(date)}</Time>
        <Title>{`${paidBy.name} pagou R$ ${maskValue(value)} para ${name}`}</Title>
        <P>Dividido entre: 
          <Names> {memberQty === divisions.length ? "Todos" : divisionMembers}</Names>
        </P>
        <ButtonBox>
        {/* {userId === paidBy.userId && <EditButton expenseId={expenseId}/>} */}
        {userId === paidBy.userId && <DeleteButton expenseId={expenseId} token={token} setToggle={setToggle}/>}
        </ButtonBox>
    </CardContainer>
  );
}

const CardContainer = w.li(`mb-6 ml-6`);

const Img = w.img(`
absolute w-8 h-8 bg-gray-200 rounded-full ring-2 mt-1.5 -left-4 border border-white 
`)

const Time = w.time(`
mb-1 text-sm font-normal leading-none text-gray-900   
`)

const Title = w.h3(`
text-lg font-semibold text-gray-900 
`);

const P = w.p(`
mb-2 text-base font-normal text-gray-900   
`)

const Names = w.span(`
mb-2 text-base font-bold text-gray-900   

`)

const ButtonBox = w.div(`flex items-center justify-between w-20 `);



