import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "Beyond the Data — Jesus Carlos G. Lazaro", description: "My Eskwelabs Innovation Fellowship Cohort 11 journey, projects, and reflections." };
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="en"><body>{children}</body></html>; }
