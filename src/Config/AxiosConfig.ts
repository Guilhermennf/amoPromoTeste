import axios from "axios";

const AxiosConfig = axios.create({
    baseURL: "https://mocki.io",
    timeout: 5000,
    headers: {
        "Content-Type": "application/json",
    },
});

export default AxiosConfig;
