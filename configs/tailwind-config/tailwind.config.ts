import type { Config } from "tailwindcss";

const config: Omit<Config, "content"> = {
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#002968",
          bg: "rgba(0, 41, 104, 0.06)",
        },
        category_border: "#EBEBEB",
      },
      fontSize: {
        body1: ["12px", { lineHeight: "24px", fontWeight: "400" }],
        body2: ["12px", { lineHeight: "24px", fontWeight: "500" }],
        body3: ["16px", { fontWeight: "500" }],
        title: ["16px", { fontWeight: "700" }],
      },
      fontFamily: {
        sans: ["Pretendard", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
