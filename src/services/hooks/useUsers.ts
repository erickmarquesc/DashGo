import { useQuery } from "react-query";
import { api } from "../../services/api";

export async function getUsers(page: number) {
  const { data, headers } = await api.get('users', {
    params: {
      page,
    }
  });

  const totalCount = Number(headers['x-total-count'])

  return {data,totalCount};
};

export function useUsers(page: number) {
  return useQuery(['users', page], () => getUsers(page), {
    staleTime: 1000 * 60 * 10,
  });
};