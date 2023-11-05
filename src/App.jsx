import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";


const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      {/* <Hero></Hero> */}
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default App;