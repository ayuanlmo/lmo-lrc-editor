import axios from "axios";

axios.interceptors.response.use((r: any): any => {
    return r.data;
});

axios.interceptors.request.use(conf => {
    return conf;
});

export const POST = (url: string, params: object = {}) => {
    return axios.post(url, params);
};
