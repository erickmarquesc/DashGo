import { useQuery } from "react-query";
import { api } from "../../services/api";

export async function getUsers() {
  const { data } = await api.get('users');

  return data;
};

export function useUsers() {
  return useQuery('users', getUsers, {
    staleTime: 1000 * 5,
  });
};