import { Route, Routes } from "react-router-dom"
import Sidebar from "./components/sidebar/Sidebar"
import Products from "./pages/products/Products"
import Users from "./pages/users/Users"

function App() {

  return (
    <>
      <div className="admin__dashboard">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/Users" element={<Users />} />
        </Routes>
      </div>
    </>
  )
}

export default App
