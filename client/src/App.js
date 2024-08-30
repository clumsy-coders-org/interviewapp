
import {Route,Routes} from "react-router-dom"
import Signup from "./Component/Signup";

function App() {

  
  return (
    <div className="App">

      <Routes>

        <Route element={<Signup/>} path="/signup"  />


      </Routes>
     
    </div>
  );
}

export default App;
