import { w } from "windstitch";

export default function PaymentTable({ paymentsInfo }) {

  return (
    <TableBox>
      <Table>
        <Tbody>
          {paymentsInfo.map((el, i) => (
            <tr key={i}>
              <Th>{el}</Th>
            </tr>
          ))}
        </Tbody>
      </Table>
    </TableBox>
  );
}

const TableBox = w.div(`
w-6/12 min-w-[385px] overflow-x-auto shadow-md sm:rounded-lg mt-8
`);

const Table = w.table(`
w-full text-sm  text-gray-500 
`);

const Thead = w.thead(`
bg-gray-100 border-b 
`);

const Tbody = w.tbody(`
bg-white border-b 
`);

const Th = w.th(`
px-6 py-4 font-medium text-left text-gray-900 whitespace-nowrap 
`);

const Td = w.td(`
px-6 py-4 font-medium text-right text-gray-900 whitespace-nowrap 
`);
