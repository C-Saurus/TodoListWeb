import axios from "axios";

const axiosinstance = axios.create ({
    baseURL: "https://631227cff5cba498da8dba91.mockapi.io",
    timeout: 5000,
    headers: {
        "content-type": "application/json",

    },
});

export default axiosinstance