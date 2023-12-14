import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useReportsDailySales = () => {
  interface Sale {
    id: number;
    orderDate: string;
    totalPrice: number;
  }

  interface CompletedSale {
    count: number;
    completedOrders: Sale[];
  }

  const fetchReport = () => {
    return axios.get<CompletedSale>("http://localhost:3000/reports/daily-revenue").then((res) => res.data);
  };
  return useQuery({
    queryKey: ["sales"],
    queryFn: fetchReport,

    staleTime: 10_000,
  });
};

export default useReportsDailySales;
