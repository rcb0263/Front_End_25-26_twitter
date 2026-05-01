'use client';

import { useState } from "react";
import "./style.css"
import { crearPost } from "@/lib/api/database";

type Props = {
  onSubmit?: (content: string) => void;
  userInitial?: string;
};

export const CreatePostCard = ({ onSubmit, userInitial = "?" }: Props) => {
  const [text, setText] = useState("");

  const maxLength = 280;

  return (
    <div className="create-post-card">
      <form>
        <div className="create-post-card-contents">
          <div className="post-user">
            {userInitial.toUpperCase()}
          </div>
          <div className="post-Content">
            <textarea
              className="c"
              placeholder="post"
              value={text}
              onChange={(e) => setText(e.target.value)}
              maxLength={maxLength}
              rows={3}
            />

            <div className="">
              <span className="">
              </span>
                {text.length}/{maxLength}

              <button
                className=""
                disabled={!text}
                onClick={async (e) => {
                        e.preventDefault()
                        try {
                            const res = await crearPost({
                                contenido: text
                            })
                          //router.push("/")
                        } catch (error: any) {
                          console.error(error.response?.data || error.message);
                        }
                        }}
              >
                Publicar
              </button>
            </div>
          </div>

        </div>
      </form>
    </div>
  );
};