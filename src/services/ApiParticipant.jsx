import axios from "axios";
import { createConfig } from "./ApiAuth";

async function getAcceptedStatus(groupId){
    const {data:res} = await axios.get(`${import.meta.env.VITE_APP_API_URL}/participants/${groupId}`, createConfig(token));
    return res
}

async function updateAcceptedStatus(token, participantId, groupId){
    await axios.put(`${import.meta.env.VITE_APP_API_URL}/participant/update/${participantId}`, {groupId}, createConfig(token))
    return
}

async function deleteParticipant(token, participantId, groupId){
    await axios.delete(`${import.meta.env.VITE_APP_API_URL}/participant/delete/${participantId}?groupId=${groupId}`, createConfig(token))
    return
}

const apiParticipant = {
    getAcceptedStatus,
    updateAcceptedStatus,
    deleteParticipant
}

export default apiParticipant