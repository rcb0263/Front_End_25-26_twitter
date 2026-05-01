'use client';

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Post } from "@/types";
import { api } from "@/lib/api/axios";
import { PostCard } from "@/components/listaPosts";
import { getMyProfile, getUserProfile } from "@/lib/api/database";
import "./style.css"
type ProfileResponse = {
  user: {
    _id: string;
    username: string;
    email: string;
  };
  posts: Post[];
};

const ProfilePage = () => {
  const params = useParams();
  const id = params.id as string;

  const [profile, setProfile] = useState<ProfileResponse | null>(null);
  const [loading, setLoading] = useState(true);

  const getProfile = async () => {
      getMyProfile()
      .then(e => setProfile(e))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    if (id) getProfile();
  }, [id]);
  return (
    <div className="centrado">
      {loading&&<h1>Cargando</h1>}
      {profile&&
      <div className="contenedor">
      <div className="usuarioA ">
        <div className="usuario">
          {profile.user.username[0].toUpperCase()}
        </div>

        <div className="">
          <h2>{profile.user.username}</h2>
          <p>{profile.user.email}</p>
        </div>
      </div>
      <div className="">
        {profile.posts.length === 0 && (
          <p className="">Este usuario no tiene posts</p>
        )}

        {profile.posts.map((post) => (
          <PostCard key={post._id} post={post} />
        ))}
      </div>

    </div>
    }

    </div>
  );
};

export default ProfilePage;