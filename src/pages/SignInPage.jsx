import { useContext, useState } from "react";
import { Container, MiniText, Title, WhiteBox } from "../assets/styles";
import Input from "../components/Form/Input";
import Button from "../components/Form/Button";
import { Link, useNavigate } from "react-router-dom";
import { w } from "windstitch";
import apiAuth from "../services/ApiAuth";
import { AuthContext } from "../contexts/auth";

export default function SignInPage() {
  const { setUserAuth } = useContext(AuthContext);
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });
  const { email, password } = loginInfo;
  const [disable, setDisable] = useState(false);
  const navigate = useNavigate();

  async function createSession(e) {
    e.preventDefault();
    setDisable(true);

    try {
      const body = { email, password };
      const user = await apiAuth.signIn(body);
      setUserAuth(user);
      localStorage.setItem(
        "user",
        JSON.stringify(user)
      );
      setDisable(false);
      navigate("/");
    } catch (err) {
      alert(err.response.data.message);
      setDisable(false);
    }
  }

  return (
    <Container>
      <WhiteBox>
        <Title>Login</Title>
        <Form onSubmit={createSession}>
          <Input
            label="E-mail"
            type="text"
            placeholder="E-mail"
            fullWidth
            value={email}
            required
            disabled={disable}
            onChange={(e) =>
              setLoginInfo({ ...loginInfo, email: e.target.value })
            }
          />
          <Input
            label="Password"
            type="password"
            fullWidth
            placeholder="Senha"
            value={password}
            required
            disabled={disable}
            onChange={(e) =>
              setLoginInfo({ ...loginInfo, password: e.target.value })
            }
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

const Div = w.div(`w-full`);
const Form = w.form(`w-6/12 flex flex-col`);
const A = w.span(`text-[#81C2FF]`);
