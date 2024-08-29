/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        unoptimized: true,
    },
    async redirects() {
        return [
            {
                source: '/',
                destination: '/evaluacion',
                permanent: true, // Usa `false` si no deseas que sea una redirección permanente (301)
            },
        ];
    },
};

export default nextConfig;
