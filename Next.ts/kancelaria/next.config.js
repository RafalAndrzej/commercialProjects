/** @type {import('next').NextConfig} */
const nextConfig = {
   reactStrictMode: true,
};

module.exports = nextConfig;

module.exports = {
   env: {
      service: process.env.SMTP_SERVICE,
      hostname: process.env.SMTP_HOST,
      username: process.env.SMTP_USER,
      userPassword: process.env.SMTP_PASSWORD,
   },
};
