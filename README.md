<<<<<<< HEAD
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
=======
# my-portfolio
"My personal portfolio website built with React"
>>>>>>> 89c54a716c26f132b1f3109dfa0e6612da3274f2


1. User browser mein URL dalta hai
         ↓
2. index.html load hota hai
         ↓
3. main.jsx run hota hai
         ↓
4. App.jsx load hota hai
         ↓
5. React Router current URL check karta hai
         ↓
6. Sahi component select karta hai (Home/About/Skills/etc)
         ↓
7. Component render hota hai
         ↓
8. Agar component mein images hain:
   - assets/ se import → bundle mein include
   - public/ se → direct serve
         ↓
9. Tailwind CSS apply hoti hai
         ↓
10. Screen par dikhta hai



React Component Render Hota Hai
         ↓
Virtual DOM Banata Hai (Memory mein)
         ↓
ReactDOM Real DOM Banata Hai (Screen par)
         ↓
User Dekhta Hai