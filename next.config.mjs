/** @type {import('next').NextConfig} */
const nextConfig = {
 
    async redirects() {
        return [
            {
                source: '/',
                destination: '/evaluacion',
                permanent: true,
            },
        ];
    },
};

export default nextConfig;
