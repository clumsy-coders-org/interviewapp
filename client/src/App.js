
import {Route,Routes} from "react-router-dom"
import Signup from "./Component/Signup/Signup";
import HomePage from "./Component/Home/HomePage";

function App() {

  
  return (
    <div className="App">

      <Routes>

        <Route element={<HomePage/>} path="/"  />
        <Route element={<Signup/>} path="/signup"  />


      </Routes>
     
    </div>
  );
}

export default App;
