import Config from '../config';
import axios from "axios"

const httpInstance = axios.create({
    baseURL: Config.API_URL,
});


httpInstance.interceptors.request.use(
    async (config) => {
        const newConfig = { ...config };
        // newConfig.headers.Authorization = `Bearer ${token}`;
        // newConfig.headers["X-Versiob"] = "1.0";
        // newConfig.headers["X-Signature"] = DemoToken;
        return newConfig
    },

    (error) => {
        Promise.reject(error);
    }
);

httpInstance.interceptors.response.use(

    (response) => {
        return response
    },
    (error) => {
        Promise.reject(error);
    }
);

export default httpInstance;


/*

*/