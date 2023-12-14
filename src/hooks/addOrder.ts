import { useMutation } from "@tanstack/react-query";
import { CompletedOrder } from "../common/interfaces";
import axios, { AxiosError } from "axios";
import { toast } from "react-toastify";

const addOrder = (order: CompletedOrder) => {
  return useMutation({
    mutationFn: (order: CompletedOrder) => {
      return axios.post<CompletedOrder>("http://localhost:3000/orders", order).then((res) => res.data);
    },
    onError: (error: AxiosError) => {
      const dt = error.response?.data as any;
      let { errorDesc } = dt;
      toast(errorDesc);
    },
  });
};

export default addOrder;
