import { useLocation } from "react-router-dom";
import TopBar from "./TopBar";
import { Link } from "react-router-dom";
import "./posts.css";

export default function Sections() {
    const location = useLocation();
    const { section } = location.state || {};

    if (!section) {
        return <p>404. No posts found</p>;
    }

    return (
        <div className="posts">
            <TopBar />
            <h1>{section.sectionName}</h1>
            <ul>
                {section.posts.map((post) => (
                    <li key={post.id}>
                        <Link to={"/details"} state={{ post }} className="link">
                            {post.title}
                        </Link>
                        <div className="info">
                            <p>julkaisija: {post.name}</p>
                            <p>pvm: {post.date}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
