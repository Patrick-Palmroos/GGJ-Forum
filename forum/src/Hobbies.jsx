import hobbies from "./json/hobbies.json";
import { Link } from "react-router-dom";
import TopBar from "./TopBar";
import "./Sections.css";
import x from "../public/cross.png";

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
                                <img src={x} alt="X symbol" />
                                <p>(sinulla ei ole pääsy oikeuksia)</p>
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}
