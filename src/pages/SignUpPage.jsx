import { w } from "windstitch";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Container, MiniText, Title, WhiteBox } from "../assets/styles";
import Input from "../components/Form/Input";
import Button from "../components/Form/Button";

export default function SignUpPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  return (
    <Container>
      <WhiteBox>
        <Title>Cadastro</Title>
        <Form>
          <Input
            label="name"
            type="text"
            placeholder="Nome"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            label="Phone"
            type="phone"
            placeholder="Telefone"
            fullWidth
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <Input
            label="E-mail"
            type="text"
            placeholder="E-mail"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            label="Password"
            type="password"
            fullWidth
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input
            label="Password"
            type="password"
            fullWidth
            placeholder="Confirmar Senha"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <Div>
            <MiniText>
              Ja tem cadastro ?{" "}
              <Link to={"/sign-in"}>
                <A>Login</A>
              </Link>
            </MiniText>
          </Div>
          <Button>Continuar</Button>
        </Form>
      </WhiteBox>
    </Container>
  );
}

const Div = w.div(`w-6/12`);
const Form = w.form(`w-6/12 flex flex-col`)
const A = w.span(`text-[#81C2FF]`);
