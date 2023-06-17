import axios from "axios";
import { createConfig } from "./ApiAuth";

async function splitExpenseWithMembers(token, body) {
  await axios.post(
    `${import.meta.env.VITE_APP_API_URL}/expense`,
    body,
    createConfig(token)
  );
  return;
}

const apiExpense = {
  splitExpenseWithMembers,
};

export default apiExpense;
