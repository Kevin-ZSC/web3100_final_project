import Lessons from "./components/Lessons";
import Main from "./components/Main";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/lessons' element={<Lessons />} />
        </Routes>
      </BrowserRouter>
  
    </>
  )
}

export default App
