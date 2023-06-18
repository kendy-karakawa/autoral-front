import Header from "../components/Header/header";
import { w } from "windstitch";

export default function GroupResumePage() {
  return (
    <Container>
      <Header />
      <WhiteBox>
        <Title>Visão geral</Title>
        <TableBox>
          <Table>
            <Thead>
              <tr>
                <Th>Gasto total do grupo</Th>
                <Td>R$ 25653,00</Td>
              </tr>
            </Thead>
            <Tbody>
              <tr>
                <Th>Sua parte Total</Th>
                <Td>R$ 653,00</Td>
              </tr>
              <tr>
                <Th>Total pago por você</Th>
                <Td>R$ 1653,00</Td>
              </tr>
              <tr>
                <Th>Total a receber</Th>
                <Td>R$ 25653,00</Td>
              </tr>
            </Tbody>
          </Table>
        </TableBox>
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
text-3xl font-bold leading-none text-gray-900 dark:text-white mt-[140px] mb-[20px]
`);

const TableBox = w.div(`
w-6/12 overflow-x-auto shadow-md sm:rounded-lg
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
