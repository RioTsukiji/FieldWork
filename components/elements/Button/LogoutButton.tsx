"use client"
import { app } from "@/lib/FirebaseConfig"
import { getAuth, signOut } from "firebase/auth"
import {useRouter} from "next/navigation";
import React from "react";

const LogoutButton = () => {
    const router = useRouter()
    const auth = getAuth(app)
    const handleLogout = async () => {
        await signOut(auth)
        await router.push("/login")
    }
    return (
        <button className="w-full py-2 px-4 bg-blue-800 text-white text-center rounded hover:bg-blue-600" onClick={handleLogout}>ログアウト</button>
    );
};

export default LogoutButton;