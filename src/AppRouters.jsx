import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import MainPage from './pages/MainPage'
import Error from './pages/Error'
import Login from './pages/Login'
import Registration from './pages/Registration'
import MyTracks from './pages/MyTracks'
import Collections from './pages/Collections'
import { ProtectedRoute } from './ProtectedRoute/PtotectedRoute'
import { getCookie } from './utils/utils'
function AppRouters() {
    const [isAllowed] = useState(Boolean(getCookie('token')))

    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/registration" element={<Registration />} />
            <Route element={<ProtectedRoute isAllowed={isAllowed} />}>
                <Route path="/" element={<MainPage />} />
                <Route path="/my-tracks" element={<MyTracks />} />
                <Route path="/collections/:id" element={<Collections />} />
            </Route>
            <Route path="*" element={<Error />} />
        </Routes>
    )
}

export default AppRouters
