'use client';

import Link from "next/link";
import { Post } from "@/types";
import "./style.css"
import { useState } from "react";
import { retweetPost, toggleLikePost } from "@/lib/api/database";
type Props = {
  post: Post;
};

export const PostCard = (params: Props) => {
    const [post, setPost] = useState<Post>(params.post);

    const now = new Date();
    const date = new Date(post.createdAt);
    let tiempo = '';
    const diferenciaMilis = now.getTime() - date.getTime();
    if(diferenciaMilis<60 *60000){
        tiempo = String(Math.floor(diferenciaMilis / 60000)) + 'm';
    }else if(diferenciaMilis<60 *60000* 24){
        tiempo = String(Math.floor(diferenciaMilis / 3600000)) + 'h';
    }else{
        tiempo = new Date(post.createdAt).toLocaleTimeString()
    }
    

  return (
    <div className="post-card">
    <div className="post-card-contents">
        <Link href={`/profile/${post.autor._id}`} className="shrink-0">
        <div className="post-user">
            <h2>{post.autor.username[0].toUpperCase()}</h2>
        </div>
        </Link>
        <div className="post">
            <div className="post-content">
                <Link
                href={`/profile/${post.autor._id}`}
                className="colorNegro"
                >
                <strong>{post.autor.username}</strong>
                </Link>
                <span className="">
                {tiempo}
                </span>
            </div>
            <Link href={`/post/${post._id}`} className="post-content">
                <p className="">
                {post.contenido}
                </p>
            </Link>
            <div className="post-actions">
                <button
                onClick={async () => {
                    const updated = await toggleLikePost(post._id);
                    setPost(updated);
                }}
                className="action-btn action-like"
                >
                ❤️ <span>{post.likes.length}</span>
                </button>
                <button 
                onClick={async () => {
                    const updated = await retweetPost(post._id);
                    setPost(updated);
                }}
                className="action-btn action-retweet"
                >
                🔁 <span>{post.retweets.length}</span>
                </button>
                <Link
                href={`/post/${post._id}`}
                className="action-btn action-comment"
                >
                💬 <span>{post.comentarios.length}</span>
                </Link>
            </div>
        </div>
    </div>
    </div>
  );
};