import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {Home} from '../index'

export function Routers(){
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
        </Routes>
    </BrowserRouter>
}