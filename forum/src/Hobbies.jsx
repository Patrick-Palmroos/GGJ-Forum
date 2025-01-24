import hobbies from "./json/hobbies.json";
import { Link } from "react-router-dom";
import TopBar from "./TopBar";

export default function Hobbies() {
    return (
        <div>
            <TopBar />
            <h1>Harrastukset</h1>
            <ul>
                {hobbies.posts.map((post) => (
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
