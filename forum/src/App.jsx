import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Details from "./Details";
import Hobbies from "./Hobbies";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/details" element={<Details />} />
                <Route path="/hobbies" element={<Hobbies />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
