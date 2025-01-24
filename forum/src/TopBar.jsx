import { Link } from "react-router-dom";

export default function TopBar() {
    return (
        <div>
            <h1>This is the topbar</h1>
            <Link to={"/"}>Koti</Link>
            <Link to={"/hobbies"}>Harrastukset</Link>
        </div>
    );
}
