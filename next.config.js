/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {
      API_OPEN_URL: "http://localhost:1337/api"
    },
}

module.exports = nextConfig
