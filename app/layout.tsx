// app/layout.tsx

import "../styles/globals.css";
import Layout from "../components/Layout";

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
      <body>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}
