import hobbies from "./json/hobbies.json";
import { Link } from "react-router-dom";
import TopBar from "./TopBar";
import "./Sections.css";
import lock from "../public/lock.png";

export default function Hobbies() {
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
