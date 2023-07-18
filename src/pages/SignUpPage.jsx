import { w } from "windstitch";
import { useState } from "react";
import { useNavigate, Link, Navigate } from "react-router-dom";
import Input from "../components/Form/Input";
import Button from "../components/Form/Button";
import apiAuth from "../services/ApiAuth";

export default function SignUpPage() {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { name, phone, email, password, confirmPassword } = userInfo;
  const [disable, setDisable] = useState(false);
  const [senhaInvalida, setSenhaInvalida] = useState(false);

  async function createAccount(e) {
    e.preventDefault();
    setDisable(true);

    if (password !== confirmPassword) {
      setDisable(false);
      setSenhaInvalida(true);
      return;
    }

    const body = { name, phone, email, password };
    try {
      await apiAuth.signUp(body);
      navigate("/sign-in");
      setDisable(false);
    } catch (err) {
      alert(err.response.data.message);
      setDisable(false);
    }
  }

  return (
    <Container>
      <WhiteBox>
        <Title>Cadastro</Title>
        <Form onSubmit={createAccount}>
          <Input
            label="name"
            type="text"
            placeholder="Nome"
            value={name}
            required
            disabled={disable}
            onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
          />
          <Input
            label="Phone"
            type="phone"
            placeholder="Telefone"
            value={phone}
            pattern="[0-9]{11}"
            title="Por favor, digite um telefone válido com 11 dígitos"
            required
            disabled={disable}
            onChange={(e) =>
              setUserInfo({ ...userInfo, phone: e.target.value })
            }
          />
          <Input
            label="E-mail"
            type="email"
            placeholder="E-mail"
            value={email}
            required
            disabled={disable}
            onChange={(e) =>
              setUserInfo({ ...userInfo, email: e.target.value })
            }
          />
          <Input
            label="Password"
            type="password"
            placeholder="Senha"
            value={password}
            pattern="[A-Za-z0-9]{6,}"
            title="Digite pelo menos 6 caracteres alfanuméricos"
            required
            disabled={disable}
            onChange={(e) =>
              setUserInfo({ ...userInfo, password: e.target.value })
            }
          />
          <Input
            label="Password"
            type="password"
            placeholder="Confirmar Senha"
            value={confirmPassword}
            required
            disabled={disable}
            onChange={(e) =>
              setUserInfo({ ...userInfo, confirmPassword: e.target.value })
            }
          />
          {senhaInvalida && (
            <Div>
              <Error>As senhas não correspondem.</Error>
            </Div>
          )}
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

const Container = w.div(`
w-full h-screen bg-gradient-to-b from-blue-400 to-teal-400	
flex items-center	justify-center overflow-auto	  
`);
const WhiteBox = w.div(`
w-full md:w-6/12 bg-slate-100  h-full flex flex-col items-center justify-center  
`);
const Title = w.h1(`
text-3xl font-bold leading-none text-gray-900 
`);

const MiniText = w.p(`
text-sm font-medium text-gray-500 mt-2
`);
const Div = w.div(`w-full`);
const Form = w.form(`w-6/12 flex flex-col`);
const A = w.span(`text-[#81C2FF]`);
const Error = w.p(`text-sm text-[#fd1303]`);
