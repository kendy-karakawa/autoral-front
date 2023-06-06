import { Container, Title, WhiteBox } from "../assets/styles";
import Button from "../components/Form/Button";
import Input from "../components/Form/Input";
import Header from "../components/Header/header";
import { w } from "windstitch";

export default function CriateGroupPage() {
  return (
    <Container>
      <WhiteBox>
        <Header />
        <Title>Crie seu grupo</Title>
        <Form>
          <Input />
          <Button>Criar grupo</Button>
        </Form>
      </WhiteBox>
    </Container>
  );
}

const Form = w.form(`w-6/12 flex flex-col`);
