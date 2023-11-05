import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";


const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      {/* <Hero></Hero> */}
      <Outlet></Outlet>
    </div>
  );
};

export default App;