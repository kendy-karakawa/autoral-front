import axios from "axios";
import { useEffect, useState } from "react";

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
    feach()
  }, []);

  return <h1>Estou na home {test}</h1>;
}
