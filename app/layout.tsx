import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Do Caos ao Commit: Git & GitHub",
  description: "Apresentação interativa sobre Git e GitHub.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
