import "./App.css";
import { Routes, Route } from "react-router-dom";
import Landing from "./compoents/Landing";

import HomePage from "./compoents/Home";
import NewPage from "./compoents/New";
import ContactPage from "./compoents/Home";

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
        </div>
    );
}

export default App;
