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

ANND THE SETUP IS DONE. WELL, THAT TOOK LONGER THAN I EXPECTED.😬

Now, let's get into the action.

# Introduction to Tanstack Query

## What is it?

`Tanstack query(Formally known as react query)` is like a global state manager for data fetching and caching.

You know that when you are fetching data from the server you have to make a request and wait for the response and there can be different possible situations, mainly:

- Loading
- Success
- Error

Then you have to set it up a side-effect using useEffect hook to activate the fetching logic when a component is starting. 

This is generally how things goes. 

Well, tanstack query does it all for you and many more. It'll handle all the needed states and give extra features that can be a little tougher to implement by yourself.

## How to use it?

First let's fetch the data using the traditional methods. 

I'll make a api configuration file so that I don't have to write the same code again and again.

Make a new file named `api.ts` in your `src` folder.

```tsx {.line-numbers}
//src/api.ts
import axios from "axios";

export const api = axios.create({
    baseURL: "http://localhost:3000/",
});
```

Now, I can use this `api` object to send requests to the json server at `http://localhost:3000/`. I won't have to write the same code again and again.

Now, let's get the data from the `/users` endpoint and render it in the app.

```tsx {.line-numbers}
//src/App.tsx
import { useEffect, useState } from "react";
import { api } from "./api";

function App() {
  // types for the data
  type dataType = {
    id: number;
    name: string;
    email: string;
    password: string;
  };

  // states I have to use
  const [data, setData] = useState<dataType[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  // function to fetch the data
  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await api.get<dataType[]>("/users");
      setData(res.data);
    } catch (error) {
      setError(error as Error);
    } finally {
      setLoading(false);
    }
  };

  // side-effect to fetch the data when loading
  useEffect(() => {
    fetchData();
  }, []);


  // checking the states
  if (loading) return <div>Loading...</div>;

  if (error) return <div>Error: {error.message}</div>;

  if (!data) return <div>No data</div>;

  //finally render the data
  return (
    <div>
      {data.map((user) => (
        <div key={user.id}>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
```

This is what a general data fetching logic looks like. 4-5 steps each time. If you are a little experienced with react, you already know whats going on here.

1. Set the states for loading, error and data.
2. Create a function to fetch the data that will set the states to loading to true and try to fetch the data from the api. If successful, set the data state to the response data. If not, set the error state to the error. Finally, set the loading state to false.
3. Check every state and return the appropriate component.

That's how it normally works. Now, let's see how to use tanstack query.

```tsx {.line-numbers}
//src/App.tsx
import { useEffect, useState } from "react";
import { api } from "./api";
import { useQuery } from "@tanstack/react-query";

function App() {
  // types for the data
  type dataType = {
    id: number;
    name: string;
    email: string;
    password: string;
  };

  // using tanstack query to get all the previous states directly
  const { data, error, isPending } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await api.get<dataType[]>("/users");
      return res.data;
    },
  });

  // checking the states
  if (isPending) return <div>Loading...</div>;

  if (error) return <div>Error: {error.message}</div>;

  if (!data) return <div>No data</div>;

  //finally return the data
  return (
    <div>
      {data.map((user) => (
        <div key={user.id}>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
```

This is the same logic as before but using tanstack query. Just one hook doing all the heavy lifting.  Now, the main part is that I removed the `useState` and `useEffect` hooks completely and the all the needed states are given to me directly from tanstack query.

> PS: in tanstack query the loading state is called `isPending`.

now, let's break it down.

# The Query Object

Let's analyze the `useQuery` hook.

```tsx {.line-numbers}
//src/App.tsx
const { data, error, isPending } = useQuery({
  queryKey: ["users"],
  queryFn: async () => {
    const res = await api.get<dataType[]>("/users");
    return res.data;
  },
});
```

The `useQuery` hook takes an object as a parameter and inside that object you mainly have to pass 2 things.

- The `queryKey` which is an array of strings that will be used to identify the query.
- The `queryFn` which is a function that will be used to fetch the data.

Let's talk about what the useQuery hook returns.

# What happens when you use the useQuery hook?

First the useQuery runs the `queryFn` and if successful it returns what is returned from the `queryFn` to the `data` state. 

That's why I returned `res.data` from the `queryFn`. It's exactly like the try block in the `fetchData` function.

useQury hook will automatically set the `isPending` state to true while the `queryFn` is running and will set it to false once the `queryFn` is done.

Adn if the `queryFn` throws an error, it will set the `error` state to the error.

Exactly what we manually did with manual use of `useState` and `useEffect`.

So, the useQuery hook will return a `useQueryResult` object that contains the `data`, `error` and `isPending` states.

And this object can have a looot of other properties that can be used to control the query. 

Just take a look at the [documentation](https://tanstack.com/query/v5/docs/framework/react/reference/useQuery).

This query object will have attributes like `data`, `isPending`, `error`, `fetchStatus`, `isFetching` and many more.

You can use these states and function for you specific needs.

And also this object is returned by other query hooks like `useQueries`. `useQueryClient` or `useSuspenseQuery`.

## What does the `queryKey` do?

The `queryKey` is an array of strings that will be used to identify the query. It's important to use a unique key for each query.

Let's make a button to fetch the data again when we click on it.

```tsx {.line-numbers}
//src/App.tsx
...

function App() {
  ...

  const { data, error, isPending, refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await api.get<dataType[]>("/users");
      return res.data;
    },
  });

...
```

Here, I'm using the `refetch` function from the `useQueryResult` object. This function will refetch the data.

Now we, can just add button to trigger the `refetch` function.

```tsx {.line-numbers}
//src/App.tsx
...

  //finally return the data
  return (
    <div>
      ...
      <button onClick={() => refetch()}>Re-fetch</button>
    </div>
  );
...
```

And that's it!

Now, go open the frontend in your browser and click the re-fetch button. You'll see that nothing is being re-fetched.

This because of the `queryKey`. The `queryKey` is used to identify the query and as we are re-fetching the same query and nothing has changed the react-query will use the cached data. If anything have changed is the data. You should have seen the loading icon while the data was being fetched.


This is awesome right? The useQuery hook is doing almost all of the heavy lifting for us.

So, queryKey property is a unique key that will be used to identify the query. It's important to use a unique key for each query.

Now, if you really want to see if the re-fetch is happening or not you can destructure the `isRefetching` state from the `query` object and check if it's true or false.

This state is set to true when the query is being refetched.

Try it out yourself.

We'll get to know more properties of this object as we progress through this article. But time to go deeper into the useQuery hook.

# Query Options

I'll restructure some things before we get going.

It's best practice to not write the query function directly in the useQuery hook. Instead, write it in a separate function and pass it as a prop to the useQuery hook.

I'll put the query from the first example in the `fetchUsers` function and pass it as a prop to the useQuery hook.

in the 