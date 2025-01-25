import { useLocation } from "react-router-dom";
import TopBar from "./TopBar";

export default function Details() {
    const location = useLocation();
    const { post } = location.state || {};

    if (!post) {
        return <p>404. No post found</p>;
    }

    return (
        <div>
            <TopBar />
            <div>
                <h1>{post.title}</h1>
                <p>{post.name}</p>
                <p>{post.date}</p>
                <h2>{post.description}</h2>
            </div>
            <div>
                <h2>Kommentit:</h2>
                <ul>
                    {post.comments.map((comment, i) => (
                        <li key={i}>
                            <p>{comment.name}</p>
                            <p>{comment.date}</p>
                            <h3>{comment.comment}</h3>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
