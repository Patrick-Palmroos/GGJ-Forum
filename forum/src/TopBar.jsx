import { Link } from "react-router-dom";
import "./TopBar.css";
import home from "../public/home.png";
import planet from "../public/planet.png";

export default function TopBar() {
    return (
        <div className="topBar">
            <h1>Ulkoilmaharrastajat</h1>
            <div className="nav">
                <img src={home} alt="Home icon" />
                <Link to={"/"}>Koti</Link>
                <img src={planet} alt="planet icon" />
                <Link to={"/hobbies"}>Harrastukset</Link>
            </div>
        </div>
    );
}
