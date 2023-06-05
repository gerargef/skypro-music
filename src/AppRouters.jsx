import React, { useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import MainPage from './pages/MainPage'
import Error from './pages/Error'
import Login from './pages/Login'
import Registration from './pages/Registration'
import MyTracks from './pages/MyTracks'
import Collections from './pages/Collections'
import { ProtectedRoute } from './ProtectedRoute/PtotectedRoute'
import { getCookie } from './utils/utils'
import { useSelector } from 'react-redux'
import { userSelector } from './store/selectors/selectors'
function AppRouters() {
    const [isAllowed, setIsAllowed] = useState(Boolean(getCookie('token')))

    const navigate = useNavigate()
    const { isAuthenticated } = useSelector(userSelector)
    React.useEffect(() => {
        setIsAllowed(isAuthenticated)
    }, [navigate])
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
