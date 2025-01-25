import hobbies from "./json/hobbies.json";
import { Link } from "react-router-dom";
import TopBar from "./TopBar";

export default function Hobbies() {
    return (
        <div>
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
                            <p>{section.sectionName}</p>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}
