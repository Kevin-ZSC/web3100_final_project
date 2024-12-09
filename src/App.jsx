import Lessons from "./components/Lessons";
import Main from "./components/Main";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  
  return (
    <>
      <BrowserRouter basename="/web3100_final_project/">
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/lessons' element={<Lessons />} />
        </Routes>
      </BrowserRouter>
  
    </>
  )
}

export default App
