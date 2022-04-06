import "./App.css";
import { Routes, Route } from "react-router-dom";
import Landing from "./components/Landing";

import HomePage from "./components/Home";
import NewsPage from "./components/News";
import ContactPage from "./components/Home";

function App() {
    return (
        <div className="app">
            <nav>
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/news">News</a>
                    </li>
                    <li>
                        <a href="/contact">Contact</a>
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
