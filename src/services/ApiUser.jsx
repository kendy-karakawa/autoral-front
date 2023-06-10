import axios from "axios";
import { createConfig } from "./ApiAuth";

async function getUsersWithSearchTerm(token, searchTerm, groupId) {
  const { data: res } = await axios.get(
    `${
      import.meta.env.VITE_APP_API_URL
    }/user/search/${searchTerm}?groupId=${groupId}`,
    createConfig(token)
  );
  return res
}

const apiUser = {
  getUsersWithSearchTerm,
};

export default apiUser;
