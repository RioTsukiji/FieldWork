"use client"

import {useState} from "react";
import { useRouter } from "next/navigation"
import Link from "next/link"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import { useAuthContext } from "@/lib/context/AuthContext"
import {app} from "@/lib/FirebaseConfig"

export default function Page() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const router = useRouter()
    const {user} = useAuthContext()
    const auth = getAuth(app)
    const isLoggedIn = !!user

    const handleSubmit = async(e) => {
        e.preventDefault();
        await signInWithEmailAndPassword(auth,email,password)
        router.push("/create")
    };
    const handleClose = async () => {
        await router.push("/")
    }

    return (
        <main className="min-h-screen flex items-center flex-col justify-center">
            <div className="max-w-md w-full p-6 bg-white rounded shadow">
                <h2 className="text-2xl font-bold mb-6">ログイン</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block mb-1">
                            メールアドレス
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="w-full px-3 py-2 border rounded"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block mb-1">
                            パスワード
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="w-full px-3 py-2 border rounded"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-blue-800 text-white rounded hover:bg-blue-600"
                    >
                        ログイン
                    </button>
                    <div className="flex flex-end mt-6">
                        ユーザ登録は
                        <Link href={"/signup"}>こちら</Link>
                        から
                    </div>
                </form>
            </div>
            { isLoggedIn ?
                <div className="alert max-w-md w-full mt-6 bg-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                         className="stroke-info shrink-0 w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <span>すでにログインしています</span>
                    <button className="btn btn-sm bg-blue-800 text-white hover:bg-blue-600" onClick={handleClose}>とじる</button>
                </div>
                :
                <div className="alert max-w-md w-full mt-6 bg-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                         className="stroke-info shrink-0 w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <span>ログインしてください</span>
                    <button className="btn btn-sm bg-blue-800 text-white hover:bg-blue-600" onClick={handleClose}>とじる</button>
                </div>
            }
        </main>
    )
}
