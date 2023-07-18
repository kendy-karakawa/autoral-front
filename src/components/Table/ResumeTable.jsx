import { w } from "windstitch";
import { maskValue } from "../../utils/masks";

export default function ResumeTable({values, userBalance}){
    const {value, positive} = userBalance

    return(
        <TableBox>
          <Table>
            <Thead>
              <tr>
                <Th>Gasto total do grupo</Th>
                <Td>R$ {maskValue(values.group)}</Td>
              </tr>
            </Thead>
            <Tbody>
              <tr>
                <Th>Sua parte Total</Th>
                <Td>R$ {maskValue(values.userPart)}</Td>
              </tr>
              <tr>
                <Th>Total pago por você</Th>
                <Td>R$ {maskValue(values.userPaid)} </Td>
              </tr>
              <tr>
                <Th>Total a { positive ? "receber" : "pagar"}</Th>
                <Td>R$ {maskValue(value)}</Td>
              </tr>
            </Tbody>
          </Table>
        </TableBox>
    )
}


const TableBox = w.div(`
w-6/12 min-w-[385px] overflow-x-auto shadow-md sm:rounded-lg
`);

const Table = w.table(`
w-full text-sm  text-gray-500 dark:text-gray-400
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