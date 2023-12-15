/**
 * Act as the parent component for other report components
 */
import { useState } from "react";
import DailySalesReportComponent from "./DailySales";
import FamousReportComponent from "./FamousDish";

export default function ReportComponent() {
  const [currentReport, setCurrentReport] = useState<number>(1);

  return (
    <>
      <h3>Select a Report</h3>
      <select className="form-select mb-4" aria-label="Default select example" onChange={(event) => setCurrentReport(parseInt(event.currentTarget.value))}>
        <option value={1}>Daily Sales Report</option>
        <option value={2}>Famous Dish Report</option>
      </select>

      {currentReport === 1 && <DailySalesReportComponent />}
      {currentReport === 2 && <FamousReportComponent />}
    </>
  );
}
