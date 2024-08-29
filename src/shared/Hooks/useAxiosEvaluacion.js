
import axios from 'axios';

const https = require('https');
const useAxiosEvaluacion = () => {

    const HEADER = {
        'Accept': 'application/json',
        "X-Requested-With": "XMLHttpRequest",
        "Content-Type": "application/json",
    }
    const clienteAxios = axios.create({
        baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
        headers: HEADER,
    });

    return clienteAxios;
};

export default useAxiosEvaluacion;