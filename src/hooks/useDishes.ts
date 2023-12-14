import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Dish {
  id: number;
  dishName: string;
  price: number;
  dishType: string;
}

const useDishes = (dishType: string | undefined) => {
  const fetchDishes = async () => {
    return axios.get<Dish[]>("http://localhost:3000/menu/dishes", { params: { type: dishType } }).then((res) => res.data);
  };

  return useQuery<Dish[], Error>({
    queryKey: dishType ? ["dishes", dishType] : ["dishes"],
    queryFn: fetchDishes,
  });
};

export default useDishes;
