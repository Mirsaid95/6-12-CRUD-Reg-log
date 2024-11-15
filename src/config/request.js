import axios from "axios";
import { loadState } from "./storage";

function getAccessToken() {
    const user = loadState("token")
    return user ? user.accessToken : null
}

const request = axios.create({
    baseURL: "http://localhost:3000"
});
    
request.interceptors.request.use((config) => {
    const token = getAccessToken();
    config.headers.Authorization = `Bearer ${token}`;
    return config
})


export { request }