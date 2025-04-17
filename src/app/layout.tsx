"use client"
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Dashboard from "../components/dashboard/Dashboard";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import ModalLoading from "@/components/ModalLoading";
import Alert from "@/components/Alert";

const inter = Inter({ subsets: ["latin"] });

/* export const metadata: Metadata = {
  title: "Inventario demo",
  description: "",
}; */

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true} >
        <Provider store={store}  >
          <Dashboard>
            {children}
            <ModalLoading/>
            <Alert/>
          </Dashboard>
        </Provider>
      </body>
    </html>
  );
}
