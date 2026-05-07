import { Routes, Route } from 'react-router-dom'
import { Home } from '../index'

export function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  )
}