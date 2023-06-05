import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../components/Header/header";
import { Container, WhiteBox } from "../assets/styles";

export default function HomePage() {
  const [test, setTest] = useState("");
  useEffect(() => {
    async function feach() {
      try {
        const data = await axios.get(
          `${import.meta.env.VITE_APP_API_URL}/test`
        );
        setTest(data.data);
      } catch (error) {
        console.log(error.message);
      }
    }
    feach();
  }, []);

  return (
    <Container>
      <WhiteBox>
      <Header></Header>
      <h1>Estou na home {test}</h1>
      </WhiteBox>
    </Container>
  );
}
