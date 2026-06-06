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