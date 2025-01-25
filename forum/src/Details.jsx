import { useLocation } from "react-router-dom";
import TopBar from "./TopBar";
import "./posts.css";

export default function Details() {
    const location = useLocation();
    const { post } = location.state || {};

    if (!post) {
        return <p>404. No post found</p>;
    }

    return (
        <div>
            <TopBar />
            <div className="postDesc">
                <h1>{post.title}</h1>
                <div className="details">
                    <p>{post.name}</p>
                    <p>{post.date}</p>
                </div>
                <h2>{post.description}</h2>
            </div>
            <div className="comments">
                <h2>Kommentit:</h2>
                <ul>
                    {post.comments.map((comment, i) => (
                        <li key={i}>
                            <h4>{comment.name}</h4>
                            <p>{comment.date}</p>
                            <h3>{comment.comment}</h3>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
