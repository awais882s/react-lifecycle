// import ChildClassComponent from "./Components/ChildClassComponent";
// import LifeCycleMethodsInClass from "./Components/LifeCycleMethodinClass";
import DashBoard from "./Components/DashBoard/dashBoard";
import LifeCycleMethodsInHook from "./Components/lifeCycleMethodsInHook";
import Products from "./Components/products/products";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* <LifeCycleMethodsInClass />
      <ChildClassComponent /> */}
      <Products />
      {/* <LifeCycleMethodsInHook />
      <DashBoard /> */}
    </div>   
  );
}
export default App;
