"use client"

import {useState} from "react";
import Link from "next/link";
import {app} from "@/lib/FirebaseConfig"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import {useRouter} from "next/navigation";


export default function Page() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const router = useRouter()
    const auth = getAuth(app)
    const handleSubmit = async (e) => {
        //デフォルトの設定をなくす
        e.preventDefault();
        await createUserWithEmailAndPassword(auth, email, password)
        router.push("/")
    };

    return (
        <main className="min-h-screen flex items-center justify-center">
            <div className="max-w-md w-full p-6 bg-white rounded shadow">
                <h2 className="text-2xl font-bold mb-6">ユーザー登録</h2>
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
                    <Link href={"/login"}>すでに登録している人はこちら</Link>
                </form>
            </div>
        </main>
    )
}