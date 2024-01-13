/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
 experimental: {
    images: true, // Make sure this is a valid configuration option
    // Other experimental options if any
  },
};

module.exports = nextConfig
