import {Route, Routes} from "react-router-dom";
import Home from "@Pages/Home";
import Buryatia from "@Pages/Buryatia";
import Kaliningrad from "@Pages/Kaliningrad";
import BaseLayout from "@Components/BaseLayout";
import Baikal from "@Pages/Baikal";


function App() {

  return (
      <Routes>
        <Route path="/" element={<BaseLayout/>}>
          <Route index element={<Home/>}/>
          <Route path="/baikal" element={<Baikal/>}/>
          <Route path="/buryatia" element={<Buryatia/>}/>
          <Route path="/kaliningrad" element={<Kaliningrad/>}/>
        </Route>
      </Routes>
  )
}

export default App
