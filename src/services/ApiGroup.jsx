import axios from "axios";
import { createConfig } from "./ApiAuth";

async function create(body) {
  return axios.post(`${import.meta.env.VITE_APP_API_URL}/group`, body);
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
