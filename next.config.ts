import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/en',
        permanent: true, // atau false jika Anda ingin pengalihan sementara
      },
    ];
  },
};

export default withNextIntl(nextConfig);