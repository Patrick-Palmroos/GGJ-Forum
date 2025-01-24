import { useLocation } from "react-router-dom";

export default function Details() {
    const location = useLocation();
    const { post } = location.state || {};

    if (!post) {
        return <p>404. No post found</p>;
    }

    return (
        <div>
            <h1>{post.title}</h1>
            <h2>{post.description}</h2>
        </div>
    );
}
