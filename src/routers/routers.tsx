import { Routes, Route, Navigate } from 'react-router-dom'
import { Home, Login, ProtectedRoute } from '../index'
import { UserAuth } from '../context/AuthContext'

export function Routers() {
  const {user}= UserAuth()
  return (
    <Routes>
      <Route element={<ProtectedRoute user={user} redirectTo='/login'/>}>
        <Route path="/" element={<Home />} />
      </Route>
      <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
    </Routes>
  )
} 