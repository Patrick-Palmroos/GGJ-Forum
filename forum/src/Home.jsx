import home from "./json/home.json";
import { Link } from "react-router-dom";
import TopBar from "./TopBar";

export default function Home() {
    return (
        <div>
            <TopBar />
            <h1>Home</h1>
            <ul>
                {home.sections.map((section, i) => (
                    <li key={i}>
                        <Link to={"/section"} state={{ section }}>
                            {section.sectionName}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
