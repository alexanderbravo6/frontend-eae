'use client';
import axios from 'axios';
import { signOut } from 'next-auth/react';
import https from 'https';

const useAxiosRecuperarClave = (token = null) => {

    // Crear la instancia de Axios
    const clienteAxios = axios.create({
        baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
        headers: {
            'Accept': 'application/json',
            "X-Requested-With": "XMLHttpRequest",
            "Content-Type": "application/json",
        },
        withCredentials: false,
        httpsAgent: new https.Agent({
            rejectUnauthorized: false,
        }),
    });

    // Agregar un interceptor para manejar el token y errores
    clienteAxios.interceptors.request.use(
        (config) => {
            // Solo agregar Authorization si el token está disponible
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
            return config;
        },
        (error) => {
            return Promise.reject(error);
        }
    );

    clienteAxios.interceptors.response.use(
        (response) => {
            return response;
        },
        async (error) => {
            if (error.response && error.response.status === 401) {
                // Token expirado o no autorizado
                console.error("No autorizado o token expirado. Cerrando sesión...");
            }
            return Promise.reject(error);
        }
    );

    return clienteAxios;
};

export default useAxiosRecuperarClave;
