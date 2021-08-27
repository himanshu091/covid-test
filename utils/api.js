import axios from "axios";
import store from "../store/myStore";
import API_URL from "./API_URL";


// configuration
const instance = axios.create({
    baseURL: API_URL,
    headers: {
      'Content-Type': 'application/json',
    }
})

instance.defaults.headers.common['Authorization'] = `Bearer ${store.getState().auth.token}`;



export const getAllAppointments = async () => {
    const res = await instance.get(`/api/appointments`);
    return res.data
}

export const getAllReports = async () => {
    const res = await instance.get(`/api/report`);
    return res.data
}
export const addBarToAppointment = async (id, data) => {
    const res = await instance.post(`/api/update/${id}`, data);
    return res.data
}
export const addResultToReport = async (id, data) => {
    const res = await instance.post(`/api/declare/result/${id}`, data);
    return res.data
}
  