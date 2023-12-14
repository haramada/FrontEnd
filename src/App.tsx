import "./App.css";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReportComponent from "./components/Reports";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <ReportComponent />
      <ToastContainer />
    </>
  );
}

export default App;
