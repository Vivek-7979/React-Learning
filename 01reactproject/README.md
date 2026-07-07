# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.





### About installing and setting up enviroment of react 
To learn about the react . Read from the documentation : " react.dev "

to start the react inside any folder . do these 
1. install the node.js from google 
2. add the folder in git repository by running only 2 commands ( optional but recommended ) 
3. download the react library - a. react-dom ( for creating websites )
                                 b. react - native ( for creating mobile apps )
4. Now to install the react library in the folder . So , the environment would be setup to work with react .
  (i) First way / command = npx create-react-app "name of file in which we want react"    { It runs with => npm run start }
                           { Its pure React(no vite etc.) . But , not recommended . Because it is a very time taking process as it installs bulky files that are event not requreed ar first }
  (ii) Second way / command = npm create @vitelatest "project name" [ Recommended ]
                             -> It creates / downloads the react with vite (it is a bundler/package - as react doesnot comes alone) .
                             ->  write folder name , slelect - react , select - Js , select - Eslinut ......
                              TO RUN : this folder . first go to that folder by wirtitn "cd reactprojeect" {cd = change directory }
                                       Then ; write => a.   npm install ( to install the remaining requirements . like - node modules )
                                                       b.  npm run dev              { In that folder only by or correct it by cd }
