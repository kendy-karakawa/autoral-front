import axios from "axios";
import { createConfig } from "./ApiAuth";
import useToken from "../hooks/useToken";

async function getAcceptedStatus(groupId){
    const token = useToken()
    const {data:res} = await axios.get(`${import.meta.env.VITE_APP_API_URL}/participants/${groupId}`, createConfig(token));
    return res
}

const apiParticipant = {
    getAcceptedStatus
}

export default apiParticipant