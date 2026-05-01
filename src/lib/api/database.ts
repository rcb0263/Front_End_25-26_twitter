import { HomeResponse, ProfileResponse } from "@/types";
import { api } from "./axios"





export const Register = async (data: {
  username: string;
  email: string;
  password: string; }) => 
{
  const response = await api.post("/api/auth/register", data);
  
  return response.data;
};

export const Login = async (data: {
  email: string;
  password: string; }) => 
{
  const response = await api.post("/api/auth/login", data);
  
  return response.data;
};

export const getPostsHome = async (page = 1, limit = 10): Promise<HomeResponse> => {
  const res = await api.get(`/api/home?page=${page}&limit=${limit}`);
  return res.data;
};
export const crearPost = async ({contenido}:{contenido: string}) => {
  const response = await api.post("/api/posts", {
    contenido,
  });

  return response.data;
};

export const toggleLikePost = async (postId: string) => {
  const response = await api.post(`/api/posts/${postId}/like`);
  return response.data;
};

export const retweetPost = async (postId: string) => {
  const response = await api.post(`/api/posts/${postId}/retweet`);
  return response.data;
};

export const commentPost = async (postId: string, contenido: string) => {
  const response = await api.post(`/api/posts/${postId}/comment`, {
    contenido,
  });
  return response.data;
};

export const getMe = async () => {
  const res = await api.get("/api/users/me");
  return res.data;
};

export const getUserProfile = async (userId: string) => {
  const res = await api.get(`/api/users/${userId}/profile`);
  return res.data;
};

export const toggleFollow = async (userId: string) => {
  const res = await api.post(`/api/users/${userId}/follow`);
  return res.data;
};

export const getPostById = async (postId: string) => {
  const res = await api.get(`/api/posts/${postId}`);
  return res.data;
};

export const getMyProfile = async (): Promise<ProfileResponse> => {
  const res = await api.get("/api/users/me");
  return res.data;
};