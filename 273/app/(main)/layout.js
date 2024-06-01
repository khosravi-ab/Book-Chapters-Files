
import { Inter } from "next/font/google";
import "@/app/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default:"Main App",
    template: "Main App ! %s"
  },
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa-IR" dir="rtl">
      <body className={inter.className}>{children}</body>
    </html>
  );
}