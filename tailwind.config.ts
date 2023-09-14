import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "default": "#232946"
      },
      dropShadow: {
        "2xl-s": "0 25px 35px rgb(0 0 0 / 0.15)"
      },
      borderWidth: {
        "1": "1px"
      }
    },
  },
  plugins: [],
}
export default config
