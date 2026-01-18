
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";

const CreatePost = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: "",
    content: "",
    author: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    await api.post("/post", form);
    navigate("/");
  };

  return (
    <form className="max-w-xl mx-auto p-6 space-y-4" onSubmit={handleSubmit}>
      <h2 className="text-2xl font-bold">Create Post</h2>

      <input
        className="w-full p-2 border rounded"
        placeholder="Title"
        required
        onChange={(e) => setForm({ ...form, title: e.target.value })}
      />

      <textarea
        className="w-full p-2 border rounded"
        placeholder="Content"
        onChange={(e) => setForm({ ...form, content: e.target.value })}
      />

      <input
        className="w-full p-2 border rounded"
        placeholder="Author"
        onChange={(e) => setForm({ ...form, author: e.target.value })}
      />

      <button className="bg-black text-white px-4 py-2 rounded">
        Submit
      </button>
    </form>
  );
};

export default CreatePost;
