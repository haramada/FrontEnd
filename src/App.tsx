import "./App.css";
import Order from "./components/Order";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Order />
      <ToastContainer />
    </>
  );
}

export default App;
