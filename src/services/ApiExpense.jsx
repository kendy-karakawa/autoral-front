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

async function getExpenses(token, groupId) {
  const {data:res} = await axios.get(
    `${import.meta.env.VITE_APP_API_URL}/expense/${groupId}`,
    createConfig(token)
  );
  return res;
}

const apiExpense = {
  splitExpenseWithMembers,
  getExpenses
};

export default apiExpense;
