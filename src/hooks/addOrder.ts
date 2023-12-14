import { useMutation } from "@tanstack/react-query";
import { CompletedOrder } from "../common/interfaces";
import axios from "axios";

const addOrder = (order: CompletedOrder) => {
  return useMutation({
    mutationFn: (order: CompletedOrder) => {
      return axios.post<CompletedOrder>("http://localhost:3000/orders", order).then((res) => res.data);
    },
  });
};

export default addOrder;
