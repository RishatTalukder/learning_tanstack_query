import { queryOptions } from "@tanstack/react-query";
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

export const fetchIdQueryOption = (fetchedId: number) => queryOptions({
    queryKey: ["user", fetchedId],
    queryFn: () => fetchUserById(fetchedId!),
    enabled: fetchedId !== null,
});


export const deleteUser = async (id: number) => {
    try {
        await api.delete(`/users/${id}`);
    } catch (error) {
        console.log(error);
    }
}