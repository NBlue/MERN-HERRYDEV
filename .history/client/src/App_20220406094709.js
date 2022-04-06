import "./App.css";
import { Routes, Route } from "react-router-dom";
import Auth from "./views/Auth";
import Landing from "./components/layout/Landing";
import AuthContextProvider from "./contexts/AuthContext"; // Lấy ra context đã được xuất
import ProtectedRoute from "./components/routing/ProtectedRoute";
import PostContextProvider from "./contexts/PostContext";

function App() {
    return (
        <AuthContextProvider>
            <PostContextProvider>
                <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route path="/login" element={<Auth authRoute="login" />} />
                    <Route
                        path="/register"
                        element={<Auth authRoute="register" />}
                    />
                    <Route
                        path="/dashboard"
                        element={
                            <>
                                <NavbarMenu />
                                <Dashboard />
                            </>
                        }
                    />
                    <Route
                        path="/about"
                        element={
                            <>
                                <NavbarMenu />
                                <About />;
                            </>
                        }
                    />
                    {/* <Route
                        path="/test"
                        element={<ProtectedRoute pathRoute="test" />}
                    /> */}
                </Routes>
            </PostContextProvider>
        </AuthContextProvider>
    );
}

export default App;

// <ProtectedRoute pathRoute="dashboard" />
// <ProtectedRoute pathRoute="about" />
