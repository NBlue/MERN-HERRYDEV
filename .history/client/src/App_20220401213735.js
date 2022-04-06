import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
//import Landing from "./components/layout/Landing";

import HomePage from "./components/Home";
import NewsPage from "./components/News";
import ContactPage from "./components/Home";

function App() {
    return (
        <div className="app">
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/news">News</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/news" element={<NewsPage />} />
                <Route path="/contact" element={<ContactPage />} />
            </Routes>
        </div>
    );
}

export default App;
