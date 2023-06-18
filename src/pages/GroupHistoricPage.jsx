import { useEffect, useState } from "react";
import Header from "../components/Header/header";
import { w } from "windstitch";
import { useParams } from "react-router-dom";
import PaymentCard from "../components/Card/paymentCard";
import apiExpense from "../services/ApiExpense";
import useToken from "../hooks/useToken";
import useData from "../hooks/useData";

export default function GroupHistoricPage() {
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
        console.log(result)
        setExpenses(result.expenses)
        setMemberQty(result.quantity)
      } catch (error) {
        console.log(err.response.data.message);
        if (err.response.status === 401) navigate("/sign-in");
      }
    }

    getAllExpenses();
  }, [toggle]);

  return (
    <Container>
      <Header />
      <WhiteBox>
        <Title>Historico</Title>
        <OlBox>
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
        </OlBox>
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
 w-full md:w-6/12 bg-slate-100 min-h-full flex flex-col items-center justify-start  
`);

const OlBox = w.div(`w-10/12 flex min-h-[50%] `);

const Title = w.h1(`
text-3xl font-bold leading-none text-gray-900 dark:text-white mt-[140px] mb-[20px]
`);

const CardBox = w.ol(`
relative border-l border-gray-400`);
