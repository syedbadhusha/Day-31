import { BrowserRouter,Route,Routes } from "react-router-dom"
import Dashboard from "./Dashboard"
import Createbooks from "./Createbooks"
import Createauthers from "./Createauthers"
import Editbook from "./Editbook"
import Editauther from "./Editauther"
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard/>}/>
          <Route path="/createbooks" element={<Createbooks/>}/>
          <Route path="/Createauthers" element={<Createauthers/>}/>
          <Route path="/editbook/:id" element={<Editbook/>}/>
          <Route path="/editauther/:id" element={<Editauther/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
