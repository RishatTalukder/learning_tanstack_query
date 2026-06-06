# Learning Tanstack Query

I was doing a project and I stumbled upon this. And got some nice reviews from the community to here I go.

My name is `Md. Rishat Talukder` and this is `Learning Tanstack Query with ITVAYA`

- [LinkedIn](https://www.linkedin.com/in/pro-programmer/)
- [YouTube](http://www.youtube.com/@itvaya)
- [gtihub](https://github.com/RishatTalukder/learning_tanstack_query)
- [Gmail](talukderrishat2@gmail.com)
- [discord](https://discord.gg/ZB495XggcF)

**Prerequisites**

- Must have nodejs and npm installed in your system.
- Good understanding of React and basic request handling with Axios and state management with contextAPI and useReducer.
- Good knowledge of JavaScript.
- Basic knowledge of TypeScript because I'll be using typescript for this repo.(For now just think of everything is javascript but with .ts or .tsx instead of .js or .jsx)

# Setup

You can install everything in this project using `npm` but I don't like `npm` so I'm using `pnpm` instead.

## Install pnpm

You can follow the [official installation guide](https://pnpm.io/installation) to install pnpm for you operating system.

Or if you have nodejs installed, you can use the following command to install pnpm globally.

Just open your terminal and run the following command:

```bash
npm install -g pnpm@latest-11
```

Wait for the installation to finish and you're good to go.

## Make a new ReactTS project using Vite

```bash
pnpm create vite
```

After running this command you'll be prompted to enter the name of your project.

I entered `code`. That's why you'll see a folder named `code` in the [repository](https://github.com/RishatTalukder/learning_tanstack_query). It's the react app. 

You can name the app whatever you like.

Then you'll be asked to select a framework. Select `react`.

then you have to choose a varient. If you are a pure js programmer choose `Javascript`. I'll choose `Typescript` for this repo because I need some practice of typescript.

> Don't worry. Everything is the same just I'll be adding some extra colons to just tell what type of variable it is.

Now, run the following commands:

```bash
cd code
pnpm install
pnpm dev
```

`pnpm dev` will start the server and open the app in your browser by typing `o + enter` in your terminal.

## Install dependencies

Now, we will need some extra libraries for tanstack to work properly.

- Axios for making HTTP requests
- Tanstack Query because this article is all about tanstack query.

Now, to install tanstack query and axios, run the following command:

```bash
pnpm add @tanstack/react-query axios
```

Also, if you are using `vs code` you should install the `eslint plugin`.

```bash
pnpm add -D @tanstack/eslint-plugin-query
```

One last thing, a temporary backend server. We can do that using `json-server`.

```bash
pnpm add json-server
```

Now, make a new file named `db.json` in your `root` project folder. It's a jason file that will hold some temporary data.

```json
{
    "users": [
        {
            "id": 1,
            "name": "John Doe",
            "email": "2B7Pd@example.com",
            "password": "password123"
        }
    ]
}
```

As, you can see that here I have a `users` property inside the `db.json` file and it has an array of users. The properties inside the json will become the endpoint for that data.

Run this command:

```bash
npx json-server db.json
```

This will start the server and you can access it by typing `http://localhost:3000` in your browser.

Here, if you want to access the users array you have to add `/users` to the end of the url. So, the url will be `http://localhost:3000/users`.

> Try it out, you'll see a list of users in the browser.


## Integrate tanstack query in the project

First things first, after all the installations are done, open the `src` folder of your project and remove all the files except `App.jsx/App.jx/App.ts/App.tsx` and `main.jsx/main.jx/main.ts/main.tsx` files.

Now, you'll see a lot of errors. No need to panic. You'll see those errors because all the files we just removed are being imported in the `main` file or the `App` file. Just removing those bad imports should fix the issues.

> From now on think of every `.ts` as `.js` and every `.tsx` as `.jsx if you made a `reactjs` app.

Your `main.jsx/main.jx/main.ts/main.tsx` file should look something like this:

```tsx {.line-numbers}
//src/main.tsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

Your `App.tsx` file should look something like this:

```tsx {.line-numbers}
//src/App.tsx
function App() {
  return <div>Nice and clean</div>;
}

export default App;
```

Now, we have a clean app and we should now integrate tanstack query in it.

First, I would recomment you go to the [documentations](https://tanstack.com/query/latest/docs/framework/react/overview). Read the documentation from `overview`  to `Devtools`. 

> Reading docs is an important skill for any developer.

First we have to wrap out app component with the `QueryClientProvider` component.

```tsx {.line-numbers}
//src/main.tsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </StrictMode>,
);
```

Now, let's break it down. 

- First, we import the `QueryClient` and `QueryClientProvider` from `@tanstack/react-query`.
- Then, we create a new instance of `QueryClient`. This query client object will hold the much needed information for tanstack query to work.
- Now, we pass this `queryClient` object to the `QueryClientProvider` component. This component will act as a context provider for all the data and making tanstack query work everywhere in the whole app.
- Then, we wrap our `App` component in the `QueryClientProvider` component. This will make tanstack query work in our app.


## Optional but recommended: Adding devtools

Tanstack query comes with a built-in devtools. And you can use this dev tools to monitor if every query is working properly in your app and also you can keep track of the state variables controlled by tanstack query.

run this following command in terminal:

```bash
pnpm add @tanstack/react-query-devtools
```
Now, open the `main.tsx` file and import the `ReactQueryDevtools` component from `@tanstack/react-query-devtools` and right above your `App` component render the `ReactQueryDevtools` component.

```tsx {.line-numbers}
//src/main.tsx
...

import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
    {/* Right above your App */}
      <ReactQueryDevtools/>
      <App />
    </QueryClientProvider>
  </StrictMode>,
);
```

YOu restart the server and after opening it in the browser you should see a floating icon on the bottom right corner of your screen. 

When you click it it'll automatically open a tab section where you can see a lot of information about your queries.

