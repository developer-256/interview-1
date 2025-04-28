/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
import "./src/env.js";

/** @type {import("next").NextConfig} */
const config = {
  images: {
    remotePatterns: [
      { hostname: "developer-256.github.io", protocol: "https" },
      {
        protocol: "https",
        hostname: "jcosu3vnwz.ufs.sh",
        // port: "",
        // pathname: "/f/",
      },
    ],
  },
};

export default config;
