# React + Vite + pnpm
```bash
pnpm install
pnpm run dev || pnpm dev
```
__Tailwind Configuration__
```bash
pnpm install -D tailwindcss postcss autoprefixer
pnpm dlx tailwindcss init -p
```

### tailwind.config.js

```sh
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### index.css
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```