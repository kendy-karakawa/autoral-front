import { useEffect, useState } from "react";
import Header from "../components/Header/header";
import { w } from "windstitch";
import useToken from "../hooks/useToken";
import useData from "../hooks/useData";
import { useNavigate, useParams } from "react-router-dom";
import apiExpense from "../services/ApiExpense";
import { maskValue } from "../utils/masks";
import ResumeTable from "../components/Table/ResumeTable";
import PaymentTable from "../components/Table/PaymentTable";

export default function GroupResumePage() {
  const navigate = useNavigate();
  const { groupId } = useParams();
  const token = useToken();
  const user = useData();
  const [values, setValues] = useState([]);
  const [membersValues, setMemberValues] = useState([]);

  useEffect(() => {
    async function getAllValues() {
      try {
        const result = await apiExpense.getGeneralExpensevalues(token, groupId);
        //console.log(result.members);
        setValues(result);
        setMemberValues(result.members);
      } catch (err) {
        console.log(err.response.data.message);
        if (err.response.status === 401) navigate("/sign-in");
      }
    }

    getAllValues();
  }, []);

  const UserBalance = () => {
    let value = null;

    for (const member of membersValues) {
      if (member.name === user.name) {
        value = member.value;
        break;
      }
    }

    if (value >= 0) {
      return { value, positive: true };
    }
    return { value: value * -1, positive: false };
  };

  return (
    <Container>
      <Header />
      <WhiteBox>
        <Title>Visão geral</Title>
        <ResumeTable values={values} UserBalance={UserBalance} />
        <PaymentTable membersValues={membersValues} />
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

const Title = w.h1(`
text-3xl font-bold leading-none text-gray-900 dark:text-white mt-[100px] mb-[20px]
`);
