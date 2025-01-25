import home from "./json/home.json";
import { Link } from "react-router-dom";
import TopBar from "./TopBar";
import "./Sections.css";
import { useState, useEffect } from "react";
import lock from "../public/lock.png";

export default function Home() {
    const [isLogged, setIsLogged] = useState(null);

    useEffect(() => {
        const logged = localStorage.getItem("user");

        if (logged !== null) {
            setIsLogged(logged);
            console.log(logged);
        }
    }, []);

    return (
        <div className="section">
            <TopBar />
            <h1>Koti</h1>
            <ul>
                {home.sections.map((section, i) => (
                    <li key={i}>
                        {section.isOpen ? (
                            <Link to={"/section"} state={{ section }}>
                                {section.sectionName}
                            </Link>
                        ) : isLogged !== null &&
                          section.users.includes(isLogged) ? (
                            <Link to={"/section"} state={{ section }}>
                                {section.sectionName}
                            </Link>
                        ) : (
                            <div className="closed">
                                <p>{section.sectionName}</p>
                                <img src={lock} alt="lock symbol" />
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}
