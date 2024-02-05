import {Route, Routes} from "react-router-dom";
import Home from "@Pages/Home";
import Buryatia from "@Pages/Buryatia";
import Kaliningrad from "@Pages/Kaliningrad";
import TyumenTobolsk from "@Pages/TyumenTobolsk";
import Buryatia24 from "@Pages/Buryatia24";
import BaseLayout from "@Components/BaseLayout";


function App() {

  return (
      <Routes>
        <Route path="/" element={<BaseLayout/>}>
          <Route index element={<Home/>}/>
          <Route path="/buryatia" element={<Buryatia/>}/>
          <Route path="/kaliningrad" element={<Kaliningrad/>}/>
          <Route path="/tyumen-tobolsk" element={<TyumenTobolsk/>}/>
          <Route path="/buryatia-24" element={<Buryatia24/>}/>
        </Route>
      </Routes>
  )
}

export default App
