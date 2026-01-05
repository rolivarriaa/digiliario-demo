module.exports = {
  reactStrictMode: false,

  trailingSlash: true,
  images: {
    domains: [
      "res.cloudinary.com",
      "lh3.googleusercontent.com",
      "https://lh3.googleusercontent.com/",
      "images.unsplash.com",
    ],
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },

  headers: () => [
    {
      source: "/:path*",
      headers: [
        {
          key: "Cache-Control",
          value: "no-store",
        },
        { key: "Access-Control-Allow-Origin", value: "*" },
      ],
    },
  ],
};
