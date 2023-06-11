import axios from "axios";
import { createConfig } from "./ApiAuth";

async function create(token, groupName) {
  return await axios.post(`${import.meta.env.VITE_APP_API_URL}/group`, {groupName}, createConfig(token));
}

async function findUserGroup(token) {
    const {data:res} = await axios.get(`${import.meta.env.VITE_APP_API_URL}/group`, createConfig(token));
    return res
  }

const apiGroup = {
    create,
    findUserGroup
};

export default apiGroup;
