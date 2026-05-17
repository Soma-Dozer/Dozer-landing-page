import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dozer",
  description: "AI·SW Maestro 17th · Youngest Team",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        {children}
      </body>
    </html>
  );
}
