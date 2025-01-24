import home from "./json/home.json";
import { Link } from "react-router-dom";
import TopBar from "./TopBar";

export default function Home() {
    return (
        <div>
            <TopBar />
            <h1>Home</h1>
            <ul>
                {home.posts.map((post) => (
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
