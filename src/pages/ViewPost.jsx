import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api/axios";

const ViewPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    api.get(`/getdata/${id}`).then(res => setPost(res.data));
  }, [id]);

  if (!post) return <p className="text-center">Loading...</p>;

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-amber-50">{post.title}</h1>
      <p className="text-amber-50">{post.author}</p>
      <p className="mt-4 text-amber-50">{post.content}</p>
    </div>
  );
};

export default ViewPost;
