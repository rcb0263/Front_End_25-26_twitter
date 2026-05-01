'use client'
import { useEffect, useState } from "react";
import "./style.css"
import { User } from "@/types";

export const LayoutNS = () => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const user = document.cookie
        .split("; ")
        .find(e => e.startsWith("user="));
        if (!user) return;
        try {
        const userParsed = JSON.parse(
            decodeURIComponent(user.split("=")[1])
        );
        setUser(userParsed);
        } catch {
        setUser(null);
        }
    }, []);
    return(
        <div className="layout">
            <a className="" href="/">
                <div className="logoImage">N</div>
                <span className="logoWords"> Nebrija<span className="logoWord"> Social</span>
                </span>
            </a>
            
            <div className="botonesLayout">
                {user && (
                <a href={`/profile/${user._id}`}>
                    <button className="boton-user">
                    {user.username[0].toUpperCase()}
                    </button>
                </a>
                )}
                <a href="/">
                    <button type="button" data-slot="button" className="botonL">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-house h-5 w-5" aria-hidden="true">
                            <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z">
                                </path>
                        </svg>
                    </button>
                </a>
                <button type="button" data-slot="button" className="botonL">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-log-out h-4 w-4" aria-hidden="true">
                        <path d="m16 17 5-5-5-5">
                            </path>
                        <path d="M21 12H9">
                            </path>
                        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4">
                            </path>
                    </svg>
                </button>
            </div>
        </div>
    )
}