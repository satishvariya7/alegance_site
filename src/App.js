import Sidebar from "./components/sidebar/sidebar";
import "antd/dist/antd.css";
import ComponentRoutes from "./components/routes/routes";
import Header from "./components/header/header";
import { useEffect } from "react";
function App() {
  useEffect(()=>{
    const userName = localStorage.getItem("username");
    if(!userName){
      
    }
  },[])
  return (
    <div>
      <ComponentRoutes />
    </div>
  );
}

export default App;
