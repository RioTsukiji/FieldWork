"use client"

import './globals.css'
import { Inter } from 'next/font/google'
import {AuthProvider} from "@/lib/context/AuthContext";
import React from "react";
import createStore from "@/ducks/createStore";
import {AppProps} from "next/app";
import {Provider} from "react-redux";

const inter = Inter({ subsets: ['latin'] })

const metadata = {
  title: 'Fieldwork App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
  Component,
  pageProps
}: {
  children: React.ReactNode
  Component: AppProps
  pageProps: AppProps
}) {
  return (
    <html lang="en">
      <AuthProvider>
        <Provider store={createStore()}>
          <body className={inter.className}>{children}</body>
        </Provider>
      </AuthProvider>
    </html>
  )
}
