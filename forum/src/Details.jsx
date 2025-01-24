import PropTypes from "prop-types";

Details.propTypes = {
    post: PropTypes.object,
};

export default function Details({ post }) {
    return (
        <div>
            <h1>{post.title}</h1>
            <h2>{post.description}</h2>
        </div>
    );
}
