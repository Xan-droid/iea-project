import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import LogIn from './pages/LogIn';
import AdminHome from "./pages/AdminHome";
import UserHome from "./pages/UserHome";
import getProfile from "./services/getProfile";

function App() {

    const isAuthenticated = !!localStorage.getItem('access_token')
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LogIn />} />
                <Route
                    path="/adminHome"
                    element={
                        <PrivateRoute
                            isAuthenticated={isAuthenticated}
                            requiredProfile="1"
                        >
                            <AdminHome />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/userHome"
                    element={
                        <PrivateRoute
                            isAuthenticated={isAuthenticated}
                            requiredProfile="2"
                        >
                            <UserHome />
                        </PrivateRoute>
                    }
                />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </BrowserRouter>
    )
}

const PrivateRoute = ({ isAuthenticated, requiredProfile, children }) => {

    const [profile, setProfile] = useState(null)
    const location = useLocation()

    if(!isAuthenticated) {
        return <Navigate to="/"/>
    }
    useEffect(() => {
        try {
            const fetchProfile = async () => {
                const profile = await getProfile()
                setProfile(profile)
            }
            fetchProfile()
        } catch (error) {
            throw Error('Error al ejecutar la solicitud')
        }

    }, [isAuthenticated])

    if(profile != null) {
        if (!isAuthenticated || Number(profile) !== Number(requiredProfile))
            return <Navigate to="/"  state={{ from: location }}/>
    }
    return children;
};


export default App
