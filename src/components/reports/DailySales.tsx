import { useState } from "react";
import useReportsDailySales from "../../hooks/useRepoDailySales";

export default function DailySalesReportComponent() {
  const { data } = useReportsDailySales();
  const sales = data?.completedOrders;

  const filtered = sales?.map((item) => item.totalPrice);
  const totalSales = filtered?.reduce((prev, cur) => (cur += prev));
  return (
    <>
      <h3 className="mb-4">Daily Revenue Report</h3>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Order Date</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          {sales?.map((sale) => (
            <tr>
              <th>{sale.id}</th>
              <th>{sale.orderDate.substring(0, 10)}</th>
              <th>{sale.totalPrice}</th>
            </tr>
          ))}

          <tr>
            <th></th>
            <th>
              <h4>Total Sales</h4>
            </th>
            <th>{totalSales}</th>
          </tr>
        </tbody>
      </table>
    </>
  );
}
