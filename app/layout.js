import "./globals.css";
import Navbar from "../components/Navbar";

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <Navbar></Navbar>
        {children}
      </body>
    </html>
  );
}
