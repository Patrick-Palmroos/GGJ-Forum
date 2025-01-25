import hobbies from "./json/hobbies.json";
import { Link } from "react-router-dom";
import TopBar from "./TopBar";
import "./Sections.css";
import lock from "../public/lock.png";
import { useEffect, useState } from "react";

export default function Hobbies() {
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
            <h1>Harrastukset</h1>
            <ul>
                {hobbies.sections.map((section, i) => (
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
