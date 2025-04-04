import { Routes, Route } from "react-router-dom"
import Register from "../views/Auth/pages/Register"
import Login from "../views/Auth/pages/Login"
import Dashboard from "../views/Dashboard"
import Category from "src/views/Category"
import AdminDashboard from "src/layouts/DashboardLayout"
import Attribute from "src/views/Attribute"
const AppRoutes = () => {
  return (
      <Routes>
        <Route path="/admin" element={<AdminDashboard />}>
          
          <Route path="dashboard" element={<Dashboard/>} />
          <Route path="category" element={<Category/>} />
          <Route path="attribute" element={<Attribute/>} />
          <Route path="category/*" element={<Category />} />
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login/>} />
      </Routes>
  )
}

export default AppRoutes
