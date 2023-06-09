"use client"

import { ReactNode, createContext, useState, useContext, useEffect } from "react"
import { getAuth, onAuthStateChanged } from "firebase/auth"
import type { User } from "firebase/auth"
import {usePathname, useRouter} from "next/navigation"
import { app } from "@/lib/FirebaseConfig"

export type UserType = User | null

export type AuthContextProps = {
    user: UserType
}

export type AuthProps = {
    children: ReactNode
}

const AuthContext = createContext<Partial<AuthContextProps>>({})

export const useAuthContext = () => {
    return useContext(AuthContext)
}
export const AuthProvider = ({children}:AuthProps) => {
    const router = useRouter()
    const auth = getAuth(app)
    const [user, setUser] = useState<UserType>(null)
    const pathname = usePathname()
    const isAvailableForViewing =
        pathname === "/about" ||
        pathname === "/login" ||
        pathname === "/signup"
    const value = {
        user,
    }

    useEffect(()=>{
        const authStateChanged = onAuthStateChanged(auth, async(user) =>{
            setUser(user)
            if(!user && !isAvailableForViewing){
                await router.push("/login")
            }
        } )
        return () => {
            authStateChanged()
        }
    },[])

    return(
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}