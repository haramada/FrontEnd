import "./App.css";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NavBar from "./components/NavBar";

import OrderComponent from "./components/Order";
import { Route } from "react-router-dom";
import ReportComponent from "./components/reports/Reports";

function App() {
  return (
    <>
      <NavBar />
      <main className="container">
        <switch>
          <Route path="/orders" component={OrderComponent} exact />
          <Route path="/reports" component={ReportComponent} exact />
        </switch>
      </main>

      <ToastContainer />
    </>
  );
}

export default App;
