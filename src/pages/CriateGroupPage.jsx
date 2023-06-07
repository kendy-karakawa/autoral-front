import { useState } from "react";
import Button from "../components/Form/Button";
import Input from "../components/Form/Input";
import Header from "../components/Header/header";
import { w } from "windstitch";

export default function CriateGroupPage() {
  const [disable, setDisable] = useState(false);
  const [name, setName] = useState("");

  return (
    <Container>
      <Header />
      <WhiteBox>
        
        <Title>Crie seu grupo</Title>
        <Form>
        <Input
            label="name"
            type="text"
            placeholder="Nome"
            fullWidth
            value={name}
            required
            disabled={disable}
            onChange={(e) => setName(e.target.value)}
          />
          <Button>Criar grupo</Button>
        </Form>
    
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

const Form = w.form(`w-6/12 flex min-h-[50%] flex-col items-center justify-between `);

const Title = w.h1(`
text-3xl font-bold leading-none text-gray-900 dark:text-white mt-[140px] mb-[20px]
`);

const MiniText = w.p(`
text-sm font-medium text-gray-500 dark:text-gray-300 mt-2
`);

const CardBox = w.div(`
w-6/12 h-full flex flex-col items-center justify-between
`)

const ButtonBox = w.div(`w-6/12 mb-[50px]`)

