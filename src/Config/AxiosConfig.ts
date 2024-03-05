import axios from "axios";

const AxiosConfig = axios.create({
    baseURL: "https://mocki.io",
    headers: {
        "Content-Type": "application/json",
    },
});

export default AxiosConfig;
