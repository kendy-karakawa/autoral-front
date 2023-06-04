import axios from "axios";

function signUp(body) {
  return axios.post(`${import.meta.env.VITE_APP_API_URL}/user`, body);
}

function signIn(body) {
  return axios.post(`${import.meta.env.VITE_APP_API_URL}/sigin`, body);
}

function signOut(token) {
  axios.delete(`${import.meta.env.VITE_APP_API_URL}/sigin`, createConfig(token));
}

const apiAuth = {
  signUp,
  signIn,
  signOut,
};

export default apiAuth;
