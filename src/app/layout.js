import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata = {
  title: "Kadyn Stafford",
  description: "Mother, wife, gamer, and web developer — a delightful blend of roles and skills.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='w-screen'>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
