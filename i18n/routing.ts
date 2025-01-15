import { createNavigation } from "next-intl/navigation";
import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "id", "zh"], // Bahasa yang didukun
  defaultLocale: "en", // Default bahasa
  pathnames: {
    "/about": {
      en: "/about",
      id: "/tentang",
      zh: "/关于",
    },
    "/contact": {
      en: "/contact",
      id: "/kontak",
      zh: "/联系",
    },
    "/product": {
      en: "/product",
      id: "/produk",
      zh: "/产品",
    },
    "/solutions": {
      en: "/solutions",
      id: "/solusi",
      zh: "/解决方案",
    },
    "/partnership": {
      en: "/partnership",
      id: "/kemitraan",
      zh: "/合作",
  },
  },
});

export type Locale = (typeof routing.locales)[number];
export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);

  //[locales]
