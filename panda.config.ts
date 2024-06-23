import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  presets: ["@shadow-panda/preset"],
  preflight: true,
  jsxFramework: "react",
  emitPackage: true,

  include: [
    "./src/components/**/*.{ts,tsx,js,jsx}",
    "./src/app/**/*.{ts,tsx,js,jsx}",
  ],

  exclude: [],

  theme: {
    extend: {
      tokens: {
        colors: {
          primary: {
            100: { value: "#DCFCD4" },
            200: { value: "#B3F9AB" },
            300: { value: "#80EF7E" },
            400: { value: "#80EF7E" },
            500: { value: "#5CE067" },
            600: { value: "#20AF46" },
            700: { value: "#169243" },
            800: { value: "#169243" },
            900: { value: "#086139" },
          },
        },
        radii: {
          sm: { value: "4px" },
          md: { value: "8px" },
          lg: { value: "16px" },
          xl: { value: "24px" },
          xxl: { value: "32px" },
          full: { value: "9999px" },
        },
      },
      semanticTokens: {
        colors: {
          primary: {
            DEFAILT: {
              value: {
                base: "primary.500",
                _dark: "primary.100",
              },
            },
          },
        },
      },
    },
  },

  outdir: "styled-system",
});
