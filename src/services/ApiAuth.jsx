import axios from "axios";

async function signUp(body) {
  return axios.post(`${import.meta.env.VITE_APP_API_URL}/user`, body);
}

async function signIn(body) {
  const {data:res} = await axios.post(`${import.meta.env.VITE_APP_API_URL}/sigin`, body);
  return res
}

async function signOut(token) {
  axios.delete(`${import.meta.env.VITE_APP_API_URL}/siginout`, createConfig(token));
}

const apiAuth = {
  signUp,
  signIn,
  signOut,
};

export default apiAuth;

export function createConfig(token){
  return{
      headers: {
          Authorization: `Bearer ${token}`
      }
  }
}