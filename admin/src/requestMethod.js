import axios from 'axios';

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken
// const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNGViNmY4Zjg0MTBhYTY1OTk0MTJhNyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MzI3NDMxNywiZXhwIjoxNjQzNTMzNTE3fQ.E9BdkE43b1wEYEvM3hCOZ5_eGJ7FhuH86RFqFP2sNoA'

export const publicRequest = axios.create({
    baseURL: BASE_URL
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers:{token:`Bearer ${TOKEN}`}
})