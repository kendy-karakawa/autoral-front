import { w } from "windstitch";
import { maskValue } from "../../utils/masks";
import { useEffect, useMemo, useState } from "react";

export default function PaymentTable({ membersValues }) {
  const [paymentsInfo, setPaymentsInfo] = useState([])
 
  useMemo(() => {
    const positive = [];
    const negative = [];

    for (const member of membersValues) {
      if (member.value >= 0) {
        positive.push(member);
      } else {
        negative.push(member);
      }
    }

    const payments = []

    let negativeIndex = 0;
    let positiveIndex = 0;
    
    while (negativeIndex < negative.length && positiveIndex < positive.length) {
      const negativeValue = negative[negativeIndex].value; //-5000
      const positiveValue = positive[positiveIndex].value; // 3000
    
      if (negativeValue > 0) {
        break;
      }
    
      const payment = Math.min(-negativeValue, positiveValue); // -5000
      negative[negativeIndex].value += payment; // -5000 + 3000 = -2000
      positive[positiveIndex].value -= payment; // 3000 - 3000 = 0
    
      if (negative[negativeIndex].value === 0) {
        payments.push(`${negative[negativeIndex].name} pagou R$ ${maskValue(payment)} para ${positive[positiveIndex].name}`);
        negativeIndex++;
      }else if(positive[positiveIndex].value === 0){
        payments.push(`${negative[negativeIndex].name} pagou R$ ${maskValue(payment)} para ${positive[positiveIndex].name}`);
        positiveIndex++;
      }

    }
    
    setPaymentsInfo(payments)
  }, [membersValues]);

  console.log(paymentsInfo)
  

  return (
    <TableBox>
      <Table>
        <Tbody>
          <tr>
            <Th>Sua parte Total</Th>
          </tr>
          <tr>
            <Th>Total pago por você</Th>
          </tr>
        </Tbody>
      </Table>
    </TableBox>
  );
}

const TableBox = w.div(`
w-6/12 min-w-[385px] overflow-x-auto shadow-md sm:rounded-lg mt-8
`);

const Table = w.table(`
w-full text-sm  text-gray-500 dark:text-gray-400
`);

const Thead = w.thead(`
bg-gray-100 border-b dark:bg-gray-800 dark:border-gray-700
`);

const Tbody = w.tbody(`
bg-white border-b dark:bg-gray-800 dark:border-gray-700
`);

const Th = w.th(`
px-6 py-4 font-medium text-left text-gray-900 whitespace-nowrap dark:text-white
`);

const Td = w.td(`
px-6 py-4 font-medium text-right text-gray-900 whitespace-nowrap dark:text-white
`);
