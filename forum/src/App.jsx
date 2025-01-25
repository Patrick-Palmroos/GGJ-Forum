import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Details from "./Details";
import Hobbies from "./Hobbies";
import Sections from "./Sections";

function App() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/details" element={<Details />} />
                <Route path="/hobbies" element={<Hobbies />} />
                <Route path="/section" element={<Sections />} />
            </Routes>
        </HashRouter>
    );
}

export default App;
