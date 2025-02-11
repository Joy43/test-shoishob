import { Inter } from "next/font/google";
import "./globals.css";
import Cursor from "./components/Cursor";
import { AuthProvider } from "./hooks/useAuth";
import { Toaster } from "react-hot-toast";

// Import Inter font
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], 
});

export const metadata = {
  title: "shoishob",
  description:
    "Shoishob is a leading kids fashion brand in Bangladesh that represents style and quality since 2008, mostly distinguished for its true our own quality designs and fabrics. Shoishob aspires to deliver what every kid’s wardrobe needs.",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <Cursor />
        <AuthProvider>
          <Toaster />
          <div className="max-w-screen-2xl mx-auto "> 
      {children}
    </div>
        </AuthProvider>
      </body>
    </html>
  );
}
