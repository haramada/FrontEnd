import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Dish } from "../common/interfaces";

const useFamousDish = (dishType: string) => {
  const fethDishe = () => {
    return axios.get<Dish>("http://localhost:3000/reports/famous-dish", { params: { type: dishType } }).then((res) => res.data);
  };

  return useQuery({
    queryKey: ["dishes", dishType],
    queryFn: fethDishe,
    staleTime: 10_000,
  });
};

export default useFamousDish;
