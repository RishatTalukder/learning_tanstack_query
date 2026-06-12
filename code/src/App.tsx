// import { useEffect, useState } from "react";
// import { api } from "./api";
// import { useQuery } from "@tanstack/react-query";
// import { fetchUsers } from "./queryFunctions";
import { Suspense, useState } from "react";
import RenderUser from "./components/RenderUser";
import StaleFrsh from "./components/StaleFrsh";
import Invalidation from "./components/Invalidation";
import Mutations from "./components/Mutations";

function App() {
  // // types for the data
  // type dataType = {
  //   id: number;
  //   name: string;
  //   email: string;
  //   password: string;
  // };

  // // // states I have to use
  // // const [data, setData] = useState<dataType[] | null>(null);
  // // const [loading, setLoading] = useState(false);
  // // const [error, setError] = useState<Error | null>(null);

  // // // function to fetch the data
  // // const fetchData = async () => {
  // //   try {
  // //     setLoading(true);
  // //     const res = await api.get<dataType[]>("/users");
  // //     setData(res.data);
  // //   } catch (error) {
  // //     setError(error as Error);
  // //   } finally {
  // //     setLoading(false);
  // //   }
  // // };

  // // // side-effect to fetch the data when loading
  // // useEffect(() => {
  // //   fetchData();
  // // }, []);

  // const { data, error, isPending, refetch, isRefetching } = useQuery({
  //   queryKey: ["users"],
  //   queryFn: fetchUsers,
  // });

  // // checking the states
  // if (isPending) return <div>Loading...</div>;

  // if (error) return <div>Error: {error.message}</div>;

  // if (isRefetching) return <div>Re-fetching...</div>;

  // if (!data) return <div>No data</div>;

  //finally return the data

  const [toggle, setToggle] = useState(true);
  return (
    <div>
      {/* {data.map((user) => (
        <div key={user.id}>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      ))} */}
      {/* <button onClick={() => refetch()}>Re-fetch</button> */}
      {/* <Suspense
      fallback={<h1>Loading...</h1>}
      >
        <RenderUser />
      </Suspense> */}
      {/* <RenderUser /> */}
      {toggle && <StaleFrsh />}
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
      {/* <Invalidation /> */}
      <Mutations />
    </div>
  );
}

export default App;
