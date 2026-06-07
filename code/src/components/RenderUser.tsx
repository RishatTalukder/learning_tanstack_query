import { useQuery, queryOptions } from "@tanstack/react-query";
import React, { useState } from "react";
import { fetchUserById } from "../queryFunctions";

const RenderUser = () => {
  const [id, setId] = useState(1);
  const [fetchedId, setFetchedId] = useState<number | null>(null);

  const fetchIdQueryOption = queryOptions({
    queryKey: ["user", fetchedId],
    queryFn: () => fetchUserById(fetchedId!),
    enabled: fetchedId !== null,
  });

  const { data, isPending, error, isFetching } = useQuery(fetchIdQueryOption);

  const handleGetUser = () => {
    if (!isNaN(id)) {
      setFetchedId(id);
    }
  };

  return (
    <div>
      {isFetching && <h1>Loading...</h1>}
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
      <button onClick={() => handleGetUser()}>Get User</button>
    </div>
  );
};

export default RenderUser;
