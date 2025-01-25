import { useLocation } from "react-router-dom";
import TopBar from "./TopBar";
import { Link } from "react-router-dom";

export default function Sections() {
    const location = useLocation();
    const { section } = location.state || {};

    if (!section) {
        return <p>404. No posts found</p>;
    }

    return (
        <div>
            <TopBar />
            <h1>Home</h1>
            <ul>
                {section.posts.map((post) => (
                    <li key={post.id}>
                        <Link to={"/details"} state={{ post }}>
                            {post.title}
                        </Link>
                        <p>julkaisija: {post.name}</p>
                        <p>pvm: {post.date}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
