import { Route, Routes } from "react-router-dom"
import Sidebar from "./components/sidebar/Sidebar"
import Products from "./pages/products/Products"
import Users from "./pages/users/Users"
import { useSelector } from "react-redux"

function App() {
  const sidebar = useSelector(state => state.sidebar.value)

  return (
    <>
      <div className={`admin__dashboard ${sidebar ? "mini__sidebar" : ""}`}>
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
