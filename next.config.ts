import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      new URL("https://randomuser.me/api/portraits/**"),
      new URL("https://placehold.co/**"),
      new URL("https://newsroom.esme.fr/wp-content/uploads/**"),
      new URL("https://www.ionis-group.com/wp-content/themes/**"),
      new URL("https://www.autobernard.com/**"),
      new URL("https://mecamarine73.com/**"),
      new URL("https://www.garageroubi69.fr/**"),
      new URL("https://i2t.ionis.io/**"),
    ],
  },
};

export default nextConfig;
