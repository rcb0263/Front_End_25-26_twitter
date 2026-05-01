"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Post } from "@/types";
import { api } from "@/lib/api/axios";
import { commentPost, retweetPost, toggleLikePost } from "@/lib/api/database";

const Page = () => {
  const params = useParams();
  const id = params.id as string;

  const [post, setPost] = useState<Post | null>(null);
  const [comment, setComment] = useState("");

  useEffect(() => {
    const fetchPost = async () => {
      const res = await api.get(`/api/posts/${id}`);
      setPost(res.data);
    };

    if (id) fetchPost();
  }, [id]);

  const like = async () => {
    const data = await toggleLikePost(id);
    setPost(data);
  };

  const retweet = async () => {
    const data = await retweetPost(id);
    setPost(data);
  };

  const sendComment = async () => {
    if (!comment.trim()) return;

    const data = await commentPost(id, comment);
    setPost(data);
    setComment("");
  };

  if (!post) return <p>Cargando...</p>;

  return (
    <div className="centrado">
      {!post&&<h1>Cargando</h1>}
    {post&&
    
    <div className="contenedor">
      <h2>{post.autor.username}</h2>

      <p>{post.contenido}</p>

      <small>
        {new Date(post.createdAt).toLocaleString()}
      </small>

      <div >
        <button className="action-like" onClick={like}>
          ❤️ {post.likes.length}
        </button>

        <button className="action-retweet" onClick={retweet}>
          🔁 {post.retweets.length}
        </button>

        <button className="action-comment">
          💬 {post.comentarios.length}
        </button>
      </div>

      <div >
        <h3>Comentarios</h3>

        <div style={{ display: "flex", gap: 8 }}>
          <input
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Escribe un comentario..."
          />
          <button onClick={sendComment}>
            Enviar
          </button>
        </div>

        <div style={{ marginTop: 10 }}>
          {post.comentarios.map((c) => (
            <div key={c._id}>
              <p>{c.autor.username}</p>: {c.contenido}
            </div>
          ))}
        </div>
      </div>
    </div>}
    </div>
  );
};

export default Page;