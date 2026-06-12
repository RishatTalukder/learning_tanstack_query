import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React from "react";
import {
  deleteUser,
  fetchIdQueryOption,
  fetchUserById,
  fetchUsers,
} from "../queryFunctions";

const Mutations = () => {
  const { data } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });
  const client = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: (id: number) => deleteUser(id),
    onMutate: ()=>{
      console.log('this is the mutation');
      return {
        id : 234
      }
    },
    onSuccess: (result, variables, onMutateResult, context) => {
      client.invalidateQueries({
        queryKey: ["users"],
      });
      console.log("context", context);
      console.log("onMutateResults", onMutateResult);
      console.log("result", result);
      console.log("variables", variables);
      
    }
  });

  const handleDelete = async (id: number) => {
    mutate(id);
  };

  return (
    <div>
      {data &&
        data.map((user) => (
          <div key={user.id}>
            <h1>{user.name}</h1>
            <h1>{user.email}</h1>
            <h1>{user.password}</h1>
            <button
              onClick={() => {
                handleDelete(user.id);
              }}
            >
              Delete
            </button>
          </div>
        ))}
    </div>
  );
};

export default Mutations;
