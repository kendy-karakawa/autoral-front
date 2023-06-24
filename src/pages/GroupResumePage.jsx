import { useEffect, useState } from "react";
import { w } from "windstitch";
import useToken from "../hooks/useToken";
import useData from "../hooks/useData";
import { useNavigate, useParams } from "react-router-dom";
import apiExpense from "../services/ApiExpense";
import { maskValue } from "../utils/masks";
import ResumeTable from "../components/Table/ResumeTable";
import PaymentTable from "../components/Table/PaymentTable";
import BaseScreen from "../components/BaseScreen/BaseScreen";

export default function GroupResumePage() {
  const navigate = useNavigate();
  const { groupId } = useParams();
  const token = useToken();
  const user = useData();
  const [values, setValues] = useState([]);
  const [userBalance, setUserbalance] = useState([]);
  const [paymentsInfo, setPaymentsInfo] = useState([]);

  useEffect(() => {
    async function getAllValues() {
      try {
        const result = await apiExpense.getGeneralExpensevalues(token, groupId);
        setValues(result);
        configUserBalance(result.members);
        paymentInformation(result.members);
        //console.log(result.members);
      } catch (err) {
        console.log(err.response.data.message);
        if (err.response.status === 401) navigate("/sign-in");
      }
    }

    getAllValues();
  }, []);

  function configUserBalance(element) {
    let value = null;
    for (const member of element) {
      if (member.name === user.name) {
        value = member.value;
      }
    }

    if (value >= 0) {
      setUserbalance({ value, positive: true });
      return;
    }
    setUserbalance({ value: value * -1, positive: false });
    return;
  }

  function paymentInformation(element) {
    const positive = [];
    const negative = [];

    for (const member of element) {
      if (member.value >= 0) {
        positive.push(member);
      } else {
        negative.push(member);
      }
    }

    const payments = [];

    let negativeIndex = 0;
    let positiveIndex = 0;

    while (negativeIndex < negative.length && positiveIndex < positive.length) {
      const negativeValue = negative[negativeIndex].value;
      const positiveValue = positive[positiveIndex].value;

      if (negativeValue > 0) {
        break;
      }

      const payment = Math.min(-negativeValue, positiveValue);
      negative[negativeIndex].value += payment;
      positive[positiveIndex].value -= payment;

      const negativeName = (negative[negativeIndex].name === user.name? "Você" : negative[negativeIndex].name)
      const positiveName = (positive[positiveIndex].name === user.name? "Você" : positive[positiveIndex].name)

      if (negative[negativeIndex].value === 0) {
        payments.push(
          `${negativeName} deve R$ ${maskValue(
            payment
          )} para ${positiveName}`
        );
        negativeIndex++;
      } else if (positive[positiveIndex].value === 0) {
        payments.push(
          `${negativeName} deve R$ ${maskValue(
            payment
          )} para ${positiveName}`
        );
        positiveIndex++;
      }
    }

    setPaymentsInfo(payments);
  }

  return (
    <BaseScreen>
     
        <Title>Visão geral</Title>
        <ResumeTable values={values} userBalance={userBalance} />
        <PaymentTable paymentsInfo={paymentsInfo} />
      
    </BaseScreen>
  );
}

// const Container = w.div(`
//     w-full
//     h-screen
//     bg-gradient-to-b from-blue-400 to-teal-400	
//     flex
//     items-center	
//     justify-center
//     overflow-auto	  
// `);

// const WhiteBox = w.div(`
// w-full md:w-6/12 bg-slate-100 min-h-full flex flex-col items-center justify-start  
// `);

// const Box = w.div(`
// flex flex-col items-center 
// `);

const Title = w.h1(`
text-3xl font-bold leading-none text-gray-900 dark:text-white mb-[20px]
`);
