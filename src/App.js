import React from 'react';
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Login from './components/Login';
import Navigation from './components/Navigation';
import Dashboard from './components/Dashboard';
import Service from './components/Service';
import PrivateRoutes from './components/PrivateRoutes';
import Admin from './components/Admin';


function App() {
    const [user, setUser] = React.useState(null);
    const handleLogin = () => setUser({ id: '1', name: 'robin', rol:1, permissions:3 });
    const handleLogout = () => setUser(null);


    return (
        <div>
            <h1>Welcome to React Router!</h1>

            

            

            { user ? (
                        <>
                        <HashRouter>
                            <Navigation />
                            <Routes>    
                                <Route index element={<Login/>} />
                                <Route path="/login" element={<Login/>} />
                                <Route element={ <PrivateRoutes isAllowed={!!user} /> } >
                                    <Route path='home' element={<Home user={user} />} />
                                    <Route path='service' element={<Service user={user} />}  />                                    
                                </Route>
                                <Route element={ <PrivateRoutes isAllowed={!!user && user.rol === 3} />} >
                                    <Route path="/admin" element={<Admin user={user}/>} />
                                    <Route path="/dashboard" element={<Dashboard user={user}/>} />
                                </Route>
                                <Route path="*" element={<p>NOT FOUND 404</p>} />
                            </Routes>
                        </HashRouter>
                        <button onClick={handleLogout}>Sign Out</button>
                        </>
                    ) : (
                        <button onClick={handleLogin}>Sign In</button>
                    )
                    
            }
        </div>
    );
}

export default App;