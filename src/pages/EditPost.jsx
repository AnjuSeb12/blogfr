import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../api/axios";

const EditPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: "",
    content: "",
    author: "",
  });

  useEffect(() => {
    api.get(`/getdata/${id}`).then(res => setForm(res.data));
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();

    await api.put(`/updatabyid/${id}`, form);
    navigate("/");
  };

  return (
    <form className="max-w-xl mx-auto p-6 space-y-4" onSubmit={handleUpdate}>
      <h2 className="text-2xl font-bold">Edit Post</h2>

      <input
        className="w-full p-2 border rounded text-amber-50"
        value={form.title}
        onChange={(e) => setForm({ ...form, title: e.target.value })}
      />

      <textarea
        className="w-full p-2 border rounded text-amber-50"
        value={form.content}
        onChange={(e) => setForm({ ...form, content: e.target.value })}
      />

      <input
        className="w-full p-2 border rounded text-amber-50"
        value={form.author}
        onChange={(e) => setForm({ ...form, author: e.target.value })}
      />

      <button className="bg-green-600 text-white px-4 py-2 rounded">
        Update
      </button>
    </form>
  );
};

export default EditPost;
