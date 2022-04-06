import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Auth from "./views/Auth";
import Landing from "./components/layout/Landing";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Auth authRoute="login" />} />
            <Route path="/register" element={<Auth authRoute="register" />} />
        </Routes>
    );
}

export default App;
