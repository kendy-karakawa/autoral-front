import { useState } from "react";
import Button from "../components/Form/Button";
import Input from "../components/Form/Input";
import Header from "../components/Header/header";
import { w } from "windstitch";
import apiGroup from "../services/ApiGroup";
import { useNavigate } from "react-router-dom";
import useToken from "../hooks/useToken";

export default function CreateGroupPage() {
  const [disable, setDisable] = useState(false);
  const [groupName, setGroupName] = useState("");
  const navigate = useNavigate();
  const token = useToken()

  async function onSubmit(e) {
    e.preventDefault();
    try {
      await apiGroup.create(token, groupName);
      setGroupName("")
      navigate("/")
    } catch (err) {
      console.log(err.response.data.message);
      if(err.response.status === 401) navigate("/sign-in")
    }
  }

  return (
    <Container>
      <Header />
      <WhiteBox>
        <Title>Crie seu grupo</Title>
        <Form onSubmit={onSubmit}>
          <Input
            label="groupName"
            type="text"
            placeholder="Nome"
            value={groupName}
            required
            disabled={disable}
            onChange={(e) => setGroupName(e.target.value)}
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

const Form = w.form(
  `w-6/12 flex min-h-[50%] flex-col items-center justify-between `
);

const Title = w.h1(`
text-3xl font-bold leading-none text-gray-900 dark:text-white mt-[140px] mb-[20px]
`);


