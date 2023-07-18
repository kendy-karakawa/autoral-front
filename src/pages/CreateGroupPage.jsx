import { useState } from "react";
import Button from "../components/Form/Button";
import Input from "../components/Form/Input";
import Header from "../components/Header/header";
import { w } from "windstitch";
import apiGroup from "../services/ApiGroup";
import { useNavigate } from "react-router-dom";
import useToken from "../hooks/useToken";
import BaseScreen from "../components/BaseScreen/BaseScreen";

export default function CreateGroupPage() {
  const [disable, setDisable] = useState(false);
  const [groupName, setGroupName] = useState("");
  const navigate = useNavigate();
  const token = useToken();

  async function onSubmit(e) {
    e.preventDefault();
    try {
      await apiGroup.create(token, groupName);
      setGroupName("");
      navigate("/");
    } catch (err) {
      console.log(err.response.data.message);
      if (err.response.status === 401) navigate("/sign-in");
    }
  }

  return (
    <BaseScreen>
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
    </BaseScreen>
  );
}

const Form = w.form(
  `flex min-w-[300px] md:min-w-[400px] flex-col items-center justify-between `
);

const Title = w.h1(`
text-3xl font-bold leading-none text-gray-900 mb-[20px]
`);
