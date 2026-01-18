import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../api/axios";
import SearchBar from "../components/SearchBar";

const PostList = () => {
    const [posts, setPosts] = useState([]);

    const fetchPosts = async () => {
        const res = await api.get("/getdatas");
        setPosts(res.data.posts);
    };

    const searchPosts = async (query) => {
        if (!query) return fetchPosts();

        const res = await api.get(`/search?q=${query}`);
        setPosts(res.data);
    };

    const deletePost = async (id) => {
        await api.delete(`/deletedata/${id}`);
        fetchPosts();
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    return (
        <div className="max-w-5xl mx-auto p-6">

            <h1 className="text-4xl font-bold text-center mb-6">
                My Blog
            </h1>

            <SearchBar onSearch={searchPosts} />

            <div className="flex justify-center mt-4">
                <Link
                    to="/create"
                    className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition"
                >
                    + Create New Post
                </Link>
            </div>


            <div className="mt-10 space-y-10">
                {posts?.map((post) => (
                    <article
                        key={post._id}
                        className="group bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition"
                    >

                        <h2 className="text-2xl font-bold mb-2 group-hover:text-green-600 transition">
                            {post.title}
                        </h2>


                        <div className="text-sm text-gray-500 mb-4">
                            <span>{post.author}</span>
                            <span className="mx-2">•</span>
                            <span>
                                {new Date(post.createdAt).toDateString()}
                            </span>
                        </div>

                        <p className="text-gray-700 leading-relaxed">
                            {post.content?.slice(0, 180)}...
                        </p>


                        <div className="mt-6 flex justify-between items-center">
                            <Link
                                to={`/view/${post._id}`}
                                className="text-green-600 font-medium hover:underline"
                            >
                                Read more →
                            </Link>

                            <div className="flex gap-4 text-sm">
                                <Link
                                    to={`/edit/${post._id}`}
                                    className="text-green-600 hover:underline"
                                >
                                    Edit
                                </Link>
                                <button
                                    onClick={() => deletePost(post._id)}
                                    className="text-red-600 hover:underline"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
};

export default PostList;
