# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


+ Frontend 

Once you clone this repository you've to run this command:

1. go to frontend folder:
    - cd Frontend

2. Install tailwindcss with vite:
    - npm install tailwindcss @tailwindcss/vite

3. Add tailwindcss in vite.config.js:
Make sure your vite.config.js file look like this:
    import { defineConfig } from 'vite'
    import react from '@vitejs/plugin-react'
    import tailwindcss from '@tailwindcss/vite'
    export default defineConfig({
    plugins: [
        react(),
        tailwindcss(),
    ],
    })

4. Import this to index.css if not not yet have:
    @import "tailwindcss";

now you can enjoy with tailwindcss in your project keep going!

Don't forget to test with command:
    - npm run dev 
or
    - npm start