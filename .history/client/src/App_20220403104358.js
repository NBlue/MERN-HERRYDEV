import "./App.css";
import { Routes, Route } from "react-router-dom";
import Auth from "./views/Auth";
import Landing from "./components/layout/Landing";
import AuthContextProvider from "./contexts/AuthContext"; // Lấy ra context đã được xuất

function App() {
    return (
        <AuthContextProvider>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/login" element={<Auth authRoute="login" />} />
                <Route
                    path="/register"
                    element={<Auth authRoute="register" />}
                />
            </Routes>
        </AuthContextProvider>
    );
}

export default App;
