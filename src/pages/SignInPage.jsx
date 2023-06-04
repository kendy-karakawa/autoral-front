import { useState } from "react";
import { Container, MiniText, Title, WhiteBox } from "../assets/styles";
import Input from "../components/Form/Input";
import Button from "../components/Form/Button";
import { Link } from "react-router-dom";
import { w } from "windstitch";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <Container>
      <WhiteBox>
        <Title>Login</Title>
        <Form>
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
          <Div>
            <MiniText>
              Ainda nao tem uma conta ?{" "}
              <Link to={"/sign-up"}>
                <A>Cadastre</A>
              </Link>
            </MiniText>
          </Div>
          <Button>Entrar</Button>
        </Form>
      </WhiteBox>
    </Container>
  );
}

const Div = w.div(`w-6/12`);
const Form = w.form(`w-6/12 flex flex-col`)
const A = w.span(`text-[#81C2FF]`);
