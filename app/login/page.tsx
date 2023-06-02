"use client"

import {useState} from "react";

export default function Page() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        // ログイン処理を実行するなどの操作をここに追加します
    };

    return (
        <main className="min-h-screen flex items-center justify-center">
            <div className="max-w-md w-full p-6 bg-white rounded shadow">
                <h2 className="text-2xl font-bold mb-6">ログイン</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="username" className="block mb-1">
                            ユーザーID
                        </label>
                        <input
                            type="text"
                            id="username"
                            className="w-full px-3 py-2 border rounded"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
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
                </form>
            </div>
        </main>
    )
}
