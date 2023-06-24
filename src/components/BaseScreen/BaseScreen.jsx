import { w } from "windstitch";
import Header from "../Header/header";

export default function BaseScreen({ children }) {
  return (
    <>
      <Header />

      <Container>
        <Box>{children}</Box>
      </Container>
    </>
  );
}

const Container = w.div(`
w-full h-screen pt-10 flex items-start justify-center bg-gradient-to-b from-blue-400 to-teal-400 overflow-auto  
`);

const Box = w.div(`
flex flex-col items-center w-full w-9/12
`);
