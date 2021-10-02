import axios from 'axios';

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNGViNmY4Zjg0MTBhYTY1OTk0MTJhNyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzMzA3NzExOCwiZXhwIjoxNjMzMzM2MzE4fQ.PMJPzuJSIxHImTurjC51mPpwFCYDFlXaLkxgujII1nI"
// const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken

export const publicRequest = axios.create({
    baseURL: BASE_URL
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers:{token:`Bearer ${TOKEN}`}
})