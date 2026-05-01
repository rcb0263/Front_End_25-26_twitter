'use client'
import { LoginContainer } from "@/components/login";
import "./style.css"
import { useEffect, useState } from "react";
import { getPostsHome, retweetPost, toggleLikePost } from "@/lib/api/database";
import { Post } from "@/types";
import { PostCard } from "@/components/listaPosts";
import { CreatePostCard } from "@/components/publicarPost";

const Page = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [page, setPage] = useState(1);
  const [totalPaginas, setTotalPaginas] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    getPostsHome(page, 10)
      .then((data) => {
        setPosts(data.posts);
        setTotalPaginas(data.totalPaginas);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setLoading(false);
      });

  }, [page]);

  return (
    <div>
      <div className="mainPage">
        <CreatePostCard/>

        {loading && <p>Cargando...</p>}

        {!loading &&
          <div className="listaPostCard">
          { posts.map((post) => (
            <PostCard
              key={post._id}
              post={post}
            />
          ))}
          </div>
          }

      </div>
    </div>
  );
};

export default Page;

