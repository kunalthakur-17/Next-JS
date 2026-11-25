import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./compontents/common/Header";
import Footer from "./compontents/common/Footer";

export const metadata = {
  title: "Kunal Thakur | Software Engineer",
  description:
    "Portfolio of Kunal Thakur, a software engineer specializing in React.js, Next.js, TypeScript, Python, and FastAPI.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
    
    >
      <body className="min-h-full flex flex-col">
        <Header />
        {children}
        <Footer />
        </body>

    </html>
  );
}
