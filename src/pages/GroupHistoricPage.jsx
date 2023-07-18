import { useEffect, useState } from "react";
import { w } from "windstitch";
import { useNavigate, useParams } from "react-router-dom";
import PaymentCard from "../components/Card/paymentCard";
import apiExpense from "../services/ApiExpense";
import useToken from "../hooks/useToken";
import useData from "../hooks/useData";
import BaseScreen from "../components/BaseScreen/BaseScreen";

export default function GroupHistoricPage() {
  const navigate = useNavigate();
  const { groupId } = useParams();
  const token = useToken();
  const user = useData()
  const [expenses, setExpenses] = useState([]);
  const [memberQty, setMemberQty] = useState(0)
  const [toggle, setToggle] = useState(false)


  useEffect(() => {
    async function getAllExpenses() {
      try {
        const result = await apiExpense.getExpenses(token, groupId);
        //console.log(result)
        setExpenses(result.expenses)
        setMemberQty(result.quantity)
      } catch (err) {
        console.log(err.response.data.message);
        if (err.response.status === 401) navigate("/sign-in");
      }
    }

    getAllExpenses();
  }, [toggle]);

  return (
    <BaseScreen>
        <Title>Historico</Title>
        <>
        {expenses.length === 0 && <h3>Não existe despesas ainda!</h3>}
          <CardBox>
            {expenses.map((el)=> (
            <PaymentCard 
            key={el.expenseId} 
            data={el}
            memberQty={memberQty}
            userId={user.id}
            token={token}
            setToggle={setToggle}
            />))}
            
          </CardBox>
        </>
    </BaseScreen>
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
 w-full md:w-6/12 bg-slate-100 min-h-full flex flex-col items-center justify-start  
`);

const Box = w.div(`w-10/12 flex min-h-[50%] `);

const Title = w.h1(`
text-3xl font-bold leading-none text-gray-900  mb-[20px]
`);

const CardBox = w.ol(`
relative border-l border-white-900 
`);
