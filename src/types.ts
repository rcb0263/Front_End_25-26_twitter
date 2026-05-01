export type User = {
  _id: string;
  username: string;
  email: string;
};

export type Comentario = {
  _id: string;
  contenido: string;
  autor: {
    _id: string;
    username: string;
  };
  fecha: string; // ISO date
};

export type Retweet = {
  usuario: string;
  fecha: string;
};


export type Post = {
  _id: string;
  contenido: string;
  autor: {
    _id: string;
    username: string;
  };
  likes: string[];
  retweets: Retweet[];
  comentarios: Comentario[];
  createdAt: string;
  updatedAt: string;
};

export type AuthResponse = {
  user: User;
  token: string;
};

export type HomeResponse = {
  posts: Post[];
  pagina: number;
  totalPaginas: number;
  totalPosts: number;
};

export type ProfileResponse = {
  user: User;
  posts: Post[];
};

export type FollowResponse = {
  siguiendo: boolean;
  user: User;
};


