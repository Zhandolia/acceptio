// app/layout.tsx

import "../styles/globals.css"; // Correct path to globals.css
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Bishop",
  description: "Affordable, Comprehensive, and Personalized College Admissions Support.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
