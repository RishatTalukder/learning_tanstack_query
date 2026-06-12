# Learning Tanstack Query

I was doing a project and I stumbled upon this. And got some nice reviews from the community too. So, here I go.

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

Tanstack query has three core concepts:
- Queries
- Mutations
- Query Invalidation

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

This because of the `queryKey`. The `queryKey` is used to identify the query and as we are re-fetching the same query, it instantly displays the existing cached data so the UI remains interactive. If the newly fetched data has changed, TanStack Query automatically overwrites the cache and updates the React state to reflect the new data on the screen. If the fetched data is identical, it leaves the cache as-is and optimizes performance by preventing an unnecessary UI re-render


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

Make a new file named `queryFunctions.ts` in your `src` folder.

```tsx {.line-numbers}
//src/queryFunctions.ts
import { api } from "./api";

export const fetchUsers = async () => {
    const res = await api.get("/users");
    return res.data;
};
```

now, we can use this function as a prop to the useQuery hook.

```tsx {.line-numbers}
//src/App.tsx
import { useEffect, useState } from "react";
import { api } from "./api";
import { useQuery } from "@tanstack/react-query";
import { fetchUsers } from "./queryFunctions";

function App() {
  // types for the data
  type dataType = {
    id: number;
    name: string;
    email: string;
    password: string;
  };

  const { data, error, isPending, refetch, isRefetching } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  // checking the states
  if (isPending) return <div>Loading...</div>;

  if (error) return <div>Error: {error.message}</div>;

  if (isRefetching) return <div>Re-fetching...</div>;

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
      <button onClick={() => refetch()}>Re-fetch</button>
    </div>
  );
}

export default App;
```

This final code will work exactly the same as the previous one. The only difference is that we're passing the query function as a prop to the useQuery hook.

One last thing is that I have to add some more `users` in the db.json file.

```json
{
    "users": [
        {
            "id": 1,
            "name": "John Doe",
            "email": "2B7Pd@example.com",
            "password": "password123"
        },
        {
            "id": 2,
            "name": "Jane Doe",
            "email": "2B7Pd@example.com",
            "password": "password123"
        },
        {
            "id": 3,
            "name": "Jack Die",
            "email": "2B7Pd@example.com",
            "password": "password123"
        },
        {
            "id": 4,
            "name": "Bob dope",
            "email": "2B7Pd@example.com",
            "password": "password123"
        }

    ]
}
```

And we can now learn more about the `useQuery` hook.

## Multiple QueryKeys

One thing that is very common in fetching data is getting that data ccording to a certain ID. For example, each of the users has an ID.

We can fetch a single user information from `/users/:id` endpoint.

> Json-server pre-configures the endpoints to add dynamic routes by getting the id of the objects in the array.

Go ahead, type `http://localhost:3000/users/1` in your browser and you'll see the user information with Id 1.

But what about fetching them using useQuery hook?

We can follow, the same steps as we did in the first example.

let's make a query function is the `queryFunctions.ts` file.

```tsx {.line-numbers}
import { api } from "./api";
export type dataType = {
    id: number;
    name: string;
    email: string;
    password: string;
  };

export const fetchUsers = async () => {
    const res = await api.get<dataType[]>("/users");
    return res.data;
};

export const fetchUserById = async (id: number) => {
    const res = await api.get<dataType>(`/users/${id}`);
    return res.data;
};
```

> I have added the `dataType` type to the `fetchUserById` function because Im working in typescript.

Now, let's setup a new component for this example. Make a new folder in the src folder named `components`.

Now, make a new component file named `RenderUser.tsx` in the `components` folder.

```tsx {.line-numbers}
//src/components/RenderUser.tsx
import React, { useState } from "react";

const RenderUser = () => {
  const [id, setId] = useState(1);

  return (
    <div>
      <input
        type="number"
        value={id}
        onChange={(e) => setId(parseInt(e.target.value))}
      />
      <button>Get User</button>
    </div>
  );
};

export default RenderUser;

```

Here, I have setup a simple input field to get the user ID and a button to fetch the user.

So, now we have to add it to the `App` component.

```tsx {.line-numbers}
//src/App.tsx
import RenderUser from "./components/RenderUser";

function App() {
  return (
    <div>
      <RenderUser />
    </div>
  );
}

export default App;
```

I've commented out almost everything in the `App` component from exmple 1 because I want to keep it clean for this exmaple and now you should see a input field and a button rendered in the browser screen.

From the first example, we know how to use the `useQuery` hook to fetch data.

Now, What I want to do is enter a ID in the input field and then click the button to fetch the user.

Now, we know how the `useQuery` hook works. Let's try it like the first example.

```tsx {.line-numbers}
//src/components/RenderUser.tsx
import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { fetchUserById } from "../queryFunctions";

const RenderUser = () => {
  const [id, setId] = useState(1);

  const { data, isPending, error } = useQuery({
    queryKey: ["user"],
    queryFn: () => fetchUserById(id),
  });

  return (
    <div>
      {isPending && <h1>Loading...</h1>}
      {error && <h1>{error.message}</h1>}
      {data && (
        <div>
          <h1>{data.name}</h1>
          <h1>{data.email}</h1>
          <h1>{data.password}</h1>
        </div>
      )}
      <input
        type="number"
        value={id}
        onChange={(e) => setId(parseInt(e.target.value))}
      />
      <button>Get User</button>
    </div>
  );
};

export default RenderUser;

```

> I'm checking the conditional states inside the RenderUser component because I don't want to break the UI or hide the input field whenever an error occurs. I want the input field to remain rendered at all times.

In the original code, I passed id as a parameter to fetchUserById(id), expecting that updating the input would automatically run the fetch function again.

If you test that setup, it works perfectly on the first load for User 1. However, changing the ID input afterward completely fails to update the user data on the screen.

Why? Because the useQuery hook only activates automatically when its queryKey changes.

> As a component mounts, the useQuery hook activates automatically. After that, it will only re-fetch if a value inside the queryKey changes (or due to background triggers like window refocus). 

TanStack Query has no idea the dependencies changed. To fix this, the state variable must be included in the key.

This way every time the input value changes, the queryKey will change and the useQuery hook will re-run.

So, simply just add ["user", id] to the queryKey array and it should work.

Nice right?

Now, this is not what I wanted. I wanted to fetch the user when the button is clicked instead of when the input value changes.

How, do we do that?

We can add a `enabled` prop to the useQuery hook to stop it from automatically running.

```tsx {.line-numbers}
//src/components/RenderUser.tsx
const { data, isPending, error, refetch } = useQuery({
    queryKey: ["user", id],
    queryFn: () => fetchUserById(id),
    enabled: false,
  });
```

This will stop the useQuery hook from automatically running.

But the problem the query will never run if we don't use the `refetch` function. For now we can comment it out.

Now, we laid the groundwork that wheneven id state will change the useQuery hook will re-run.

So, first we need to stop that. This might seem a little counterintuitive but everything will eventually work out. Trust me on this. 

> If we keep id inside both our typing input and the queryKey, TanStack Query gets confused the moment a user types. As you type a new number, the queryKey changes instantly. This resets the query status back to isPending and wipes your current data off the screen before you even get a chance to press the button!

To fix this, we need to completely `separate` the id we are currently typing from the id we actually want to fetch.
We do this by introducing a second state variable: fetchedId.

```tsx {.line-numbers}
// 1. This state tracks what the user is typing
const [id, setId] = useState(1);
// 2. This state ONLY updates when the button is actually clicked 
const [fetchedId, setFetchedId] = useState<number | null>(null);

```

Now, instead of hooking useQuery up to our frantic typing input, we point it directly at fetchedId.

```tsx {.line-numbers}
const { data, isPending, error } = useQuery({
  // Point the key and function to our submission state
  queryKey: ["user", fetchedId],
  queryFn: () => fetchUserById(fetchedId!),
  
  // Magic line: Stay idle until the user actually clicks the button for the first time
  enabled: fetchedId !== null, 
});
```

Look at how beautifully this solves all our problems at once:

   1. **No accidental triggers**: Typing inside the input box updates id, but leaves fetchedId completely alone. The UI stays perfectly stable while typing.
   2. **Strict button control**: The fetch only activates inside our button's handleGetUser function, where we explicitly call setFetchedId(id).
   3. **Perfect caching**: Because fetchedId is in the queryKey, TanStack Query will cache every user individually (["user", 1], ["user", 2]). If you search for User 1, switch to User 2, and then search for User 1 again, it loads instantly from the cache without hitting your API a second time!

By decoupling our UI state from our network trigger state, we get the absolute best of both worlds.


And now, we can just add a handle click function to our button that will check if the `id` is valid or not. If it is, it will set the `fetchedId` state to the `id` value and when the `fetchedId` is not null, the query will run.

```tsx {.line-numbers}
const handleGetUser = () => {
    if (!isNaN(id)) {
      setFetchedId(id);
    }
  }
```

And now the only task is to bring this all togather.

```tsx {.line-numbers}
//src/components/RenderUser.tsx
import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { fetchUserById } from "../queryFunctions";

const RenderUser = () => {
  const [id, setId] = useState(1);
  const [fetchedId, setFetchedId] = useState<number | null>(null);

  const { data, isPending, error } = useQuery({
    queryKey: ["user", fetchedId],
    queryFn: () => fetchUserById(fetchedId!),
    enabled: fetchedId !== null,
  });

  const handleGetUser = () => {
    if (!isNaN(id)) {
      setFetchedId(id);
    }
  }

  return (
    <div>
      {isPending && <h1>Loading...</h1>}
      {error && <h1>{error.message}</h1>}
      {data && (
        <div>
          <h1>{data.name}</h1>
          <h1>{data.email}</h1>
          <h1>{data.password}</h1>
        </div>
      )}
      <input
        type="number"
        value={id}
        onChange={(e) => setId(parseInt(e.target.value))}
      />
      <button onClick={()=>handleGetUser()}>Get User</button>
    </div>
  );
};

export default RenderUser;
```

> **Note**: The `handleGetUser` function is a simple function that checks if the `id` is a number, and if it is, it sets the `fetchedId` state to the `id` value.

Everything should work how we wanted. The user data should only load when we click the button.

Only one thing left to do. A simple bug, you should see a `loading...` text rendered on the screen even though nothing is loading all the time.

This is because of the `isPending` state. It is a boolean state that is set to true when the query is loading, and false when it is done.

In this case you can use `isFetching` instead of `isPending` which is a boolean state that is by default set to false. But In any state, if the query is fetching at any time (including background refetching) isFetching will be true.

> **Note**: Is pending is related to the state of the `queryFn` function. It is only false if the queryFn is in `error` or `success` state. 

Now, there are a lot of other properties we can pass in the `useQuery object`. And those can ne very useful for different situations. 

The above exmpale is for `dependent querys` which are queries that depend on the results of another query. 

There can be multiple queries that depend on the results of another query.

Or Multiple queries that has to be fetched at the same time.

Let's talk more about these.

## Query Options

By now I think you userstand that the objext passed inside the `useQuery` is the most important thing.

This is called a `Query options object`.

```tsx {.line-numbers}
const { data, isPending, error } = useQuery({
  queryKey: ["user", fetchedId],
  queryFn: () => fetchUserById(fetchedId!),
  enabled: fetchedId !== null,
});
```

This query can be written separately as:

```tsx {.line-numbers}
const fetchIdQueryOption = {
    queryKey: ["user", fetchedId],
    queryFn: () => fetchUserById(fetchedId!),
    enabled: fetchedId !== null,
  };

  const { data, isPending, error, isFetching } = useQuery(fetchIdQueryOption);
```

Because in the end it's just a simple object. You can export the object from other files and use it here if you want, it'll work the same. 

Another better way to write this is using the `queryOptions` function.

```tsx {.line-numbers}
const fetchIdQueryOption = queryOptions({
    queryKey: ["user", fetchedId],
    queryFn: () => fetchUserById(fetchedId!),
    enabled: fetchedId !== null,
  });

  const { ... } = useQuery(fetchIdQueryOption);
```

Whats the benifit of using this?

Well, not much but it makes the code a little bit more readable and if you are using `typescript` then you can get type checking and property references. With plain object you won't get any of that.

Now, one more thing you can do is re-use the `queryOptions` object in multiple places.

Let's say you move the `queryOptions` object to the `queryFunctions` file.

```tsx {.line-numbers}
//src/queryFunctions.ts
const fetchIdQueryOption = queryOptions({
    queryKey: ["user", fetchedId],
    queryFn: () => fetchUserById(fetchedId!),
    enabled: fetchedId !== null,
  });
```

Naturally this won't work because the `queryOptions` is taking `fetchId` state as an argument but the `fetchId` state is not in the `queryFunctions` file.

So, you can turn the `fetchIdQueryOption` object into a function that returns the `queryOptions` object.

```tsx {.line-numbers}
//src/queryFunctions.ts
const fetchIdQueryOption = (fetchedId: number) => queryOptions({
    queryKey: ["user", fetchedId],
    queryFn: () => fetchUserById(fetchedId!),
    enabled: fetchedId !== null,
  });
```

and now you can import and pass the `fetchedId` state to the `fetchIdQueryOption` function.

```tsx {.line-numbers}
//src/components/RenderUser.tsx
const RenderUser = () => {
  const [id, setId] = useState(1);
  const [fetchedId, setFetchedId] = useState<number | null>(null);


  const { data, isPending, error, isFetching } = useQuery(fetchIdQueryOption(fetchedId!));

  ...

}
```

As you can see, instead of passing the `fetchedIdQueryOption` object to the `useQuery` hook, you pass the `fetchedIdQueryOption` **FUNCTION** to the `useQuery` hook and inside this function you pass the `fetchedId` state and eveything works just fine.

## Suspense Query

Exactly the same as `useQuery` but with the `guerantee` that the data will be available.

You can write it like this:

```tsx {.line-numbers}
const { data, isPending, error } = useSuspenseQuery({
  queryKey: ["user", fetchedId],
  queryFn: () => fetchUserById(fetchedId!),
  enabled: fetchedId !== null,
});
```

You know that `useQuery` hook can return the data as `unavailable` because it is async. But with the `useSuspenseQuery` hook will wait for the data to be available before rendering the component. 

This hook works with the `react suspense` feature. You have to wrap the <RenderUser /> component with the <Suspense /> component in the `App` component.

You should see that the UI is now waiting for the data to be available before rendering the component.

> useSuspenseQuery hook completely ignores the `enabled` prop.

So, in this case the component will not work if you use `useSuspenseQuery` instead of `useQuery`.

> Enabled prop stops the useQury hook to fetch the data if the ID is null. But now as either way useSuspenseQuery will fetch the data, it'll show an error because there is no `/users/null` endpoint.

## Queries

Let's say you have a component where multiple query has to be done simultaneously.

You can use the `useQueries` hook to do that.

Everything stays the same.

```tsx {.line-numbers}
const querieOptions1 = queryOptions({
    queryKey: ...,
    queryFn: ...,
    enabled: ...,  
})

const querieOptions2 = queryOptions({
    queryKey: ...,
    queryFn: ...,
    enabled: ...,  
})
```

You can define these re-usable query options objects and you can pass these as a array to the `useQueries` hook.

```tsx {.line-numbers}

const UseQueriesExample = useQueries({
    queries: [querieOptions1, querieOptions2]
})

```

> **Note**: The `useQueries` will take an object and inside that object you can pass a property called `queries` which is an array of query options objects.

The `useQueries` hook will return an array of objects. Each object willl have the results for each query passed in the `queries` array.

```tsx {.line-numbers}

const [result1, result2] = useQueries({
    queries: [querieOptions1, querieOptions2]
})

```

If you want you can destructure the results from the array directly.

```tsx {.line-numbers}

const [
  { data: data1, isPending: isPending1, error: error1 },
  { data: data2, isPending: isPending2, error: error2 },
] = useQueries({
    queries: [querieOptions1, querieOptions2]
})

```

And that's it. For the very basics. You can also use `useSuspenseQueries` for multiple suspense quries and they will work the same way as `useSuspenseQuery` hook. Try it out yourself.

# Stale And Fresh Data

Okay, Time to dig deeper.

You guys already know that you have to pass the `queryKey` to the `useQuery` hook. 

Let's say you have two different `useQuery` hooks with `["users"]` and `["posts"]` query key.

When this queries are activated tanstack uses these key to keey track of the `data`. This is called `caching`.

Now, whever you use the same queries again the data will be fetched from the cache first and after the data is fetched the `data state` will update.

Now, how do you define which stays in cache and re-used, for how long?

## Stale Time

In tanstack query you can define the `staleTime` option for each query.

This state time defines if the component should use the cached data completely or use the queryFn to fetch the data.

> Stale time is a number in milliseconds to define how long the data should be cached.

```tsx {.line-numbers}
queryOptions({
    queryKey: ...,
    queryFn: ...,
    staleTime: 60000 // 1 minute
})
```

Here, I'm setting staletime to 1 minute by passing 60000 milliseconds which 60 seconds.

This tells, tanstack query to use the cached data for 1 minute. And in that 1 minute if the query is re-run, tanstack will not use the queryFn to do network requests.

Let's try it out.

I'll setup a new component in the `components` folder named `StaleFresh.tsx`.

```tsx {.line-numbers}
//src/components/StaleFresh.tsx

import React from 'react'
import { fetchUsers } from '../queryFunctions'
import { useQuery } from '@tanstack/react-query'

const StaleFresh = () => {
    const {data} = useQuery({
        queryKey: ['users'],
        queryFn: fetchUsers,
        staleTime: 60000
    })
  return (
    <div>
      This is the data
      {JSON.stringify(data)}
    </div>
  )
}

export default StaleFresh
```

This component will send a request to the backend to get the data and as I've set the staleTime to 1 minute it'll keep the data fresh for 1 minute.


Now, I'll setup a toggle button to mount and unmount the component.

```tsx {.line-numbers}
...
function App() {

  const [toggle, setToggle] = useState(true);
  return (
    <div>
      {toggle && <StaleFersh />}
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
    </div>
  );
}

export default App;
```

Now, got to open you browser and go to the inspect tools network tab. Select the `fetch/XHR` tab and click the button to toggle the component. You'll see that the data is being re-fetched from cache every time the component is mounted but no network requests are being made.

You can also confirm that the data in cache is fresh by using the dev tools.

You can wait 1 min and toggle the component again and you'll see that the data is being re-fetched but this time the network request is being made.

So, 

> Stale time defines how long cached data of a query should be kept fresh.

> Fresh data means, when A data is fresh the queryFn of that query will not be called. 

> When the staleTime is over, the cached data becomes stale and the queryFn will be called to fetch the data. And the cycle continues... 

One nice thing is, If you are fetching some static data from backend that will never change you can set the `staleTime to Infinity`.

```tsx {.line-numbers}

const {data} = useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers,
    staleTime: Infinity
})

```

> This will keep ur data fresh forever and will fecth data only at start up but never again after that.

Now, this bring me to another scenario.

## Query invalidation

I think everyone has seen this in their react app.

You make a request to fetch data or delete data and you think that the UI will update accordingly.

But nothing happends to the UI untill you refresh the page. This is because a request is not connected to the UI. It is a database operation.

So, whatever happens in the database the current UI should not be affected by it, thats the correct behavior right?

Same goed for tanstack query.

Let's say you have a function named `deleteUser` that deletes a user from the database.

```tsx {.line-numbers}
const deleteUser = (id) => {
  await axios.delete(`/users/${id}`);
}
```

Now, you have a component that shows a list of users.

```tsx {.line-numbers}
const Component = () => {
  const { data } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  return (
    <ul>
      {data.map((user) => (
        <li key={user.id}>
          {user.name} - {user.email}
          <button onClick={() => deleteUser(user.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};
```

> Here, each user is rendered with a delete button that calls the `deleteUser` function what should delete the user from the database.

This will not update the UI untill you call the `refetch` function for the `useQuery` hook.

So, we can use the `refetch` function to update the UI but that is not the correct way to do it.

The correct way to do it is to use the `invalidateQueries` function.

```tsx {.line-numbers}
import { useQuery, useQueryClient } from "@tanstack/react-query";

const Component = () => {
  const { data } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  const queryClient = useQueryClient();

  const handleDelete = async (id) => {
    await deleteUser(id);
    queryClient.invalidateQueries({
      queryKey: ["users"],
    });
  };

  return (
    <ul>
      {data.map((user) => (
        <li key={user.id}>
          {user.name} - {user.email}
          <button onClick={() => handleDelete(user.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );  
};

```

> InvalidateQueries is method of the queryClient object. That's we have to use the `useQueryClient` hook to get the queryClient object.

And I made a function called `handleDelete` that calls the `deleteUser` function and then calls the `invalidateQueries` function to invalidate the query.

> invalidateQueries takes an object where you must pass the `queryKey` which is an array of strings that will be used to identify the query and that query will be invalidated and refetched through the network.

Now, let's understand why I'm using the `invalidateQueries` function instead of the `refetch` function.

1. **Invalidation is Smart (Respects staleTime), refetch() is Brutalrefetch() forces a network request immediately, no matter what**. 
  - It completely `ignores` your `staleTime` configurations. Even if you fetched the exact same data one second ago and it is perfectly "fresh," refetch() will blindly hit your server again.
  - invalidateQueries() marks the data as "stale" (expired) first. It tells TanStack Query: "Hey, the data for this key is now old and dirty." 
    - If the component using that query is currently visible on the screen, TanStack Query will instantly refetch it in the background.
    - If the component is not on the screen (e.g., it's on a different page), TanStack Query will not fetch it right away. It will wait until the user navigates back to that page before pulling the fresh data. This saves massive amounts of server bandwidth.

2. Invalidation scale across your entire app (The Network Effect) 

  - Imagine you have a dashboard. You have a `UserProfile` component at the top of the screen, and a SettingsForm component at the bottom of the screen. Both rely on the ["user", id] data.

  - If you change the user's name in the SettingsForm and call a manual refetch() inside that form, only that specific instance of the hook refetches. The UserProfile component at the top of the screen might stay stuck showing the old name.

  - If you use queryClient.invalidateQueries({ queryKey: ["user", id] }), TanStack Query `broadcasts` a message to the entire application. Every single component on the screen that cares about ["user", id] will simultaneously `refresh` itself to show the brand-new data.

3. Invalidation works seamlessly with `Mutations`. I'll talk more about mutations right after this. 

One very minute details that I almost forgot to talk about is that the `invalidateQueries` function is also returning a promise. This means that `invalidateQueries` is a asyncronous function and some time might take to invalidate the query.

So, if you don't use await before calling the `invalidateQueries` function and do some operation connected to the query that is being invalidated, the operation will be executed on the OLD data, not the newly updated data.

Now, let's talk about Mutations.

# Mutations