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
  const { data: res } = await axios.get(
    `${import.meta.env.VITE_APP_API_URL}/expense/${groupId}`,
    createConfig(token)
  );
  return res;
}

async function deleteExpense(token, expenseId) {
  await axios.delete(
    `${import.meta.env.VITE_APP_API_URL}/expense/${expenseId}`,
    createConfig(token)
  );
  return
}

async function getGeneralExpensevalues(token, groupId){
  const { data: res } = await axios.get(
    `${import.meta.env.VITE_APP_API_URL}/expense/general/${groupId}`,
    createConfig(token)
  );
  return res;
}

const apiExpense = {
  splitExpenseWithMembers,
  getExpenses,
  deleteExpense,
  getGeneralExpensevalues
};

export default apiExpense;
