import type { Metadata } from "next";
import "./globals.css";

const title = "Dozer";
const description = "제 17기 AI·SW 마에스트로 최연소 팀";

export const metadata: Metadata = {
  title,
  description,
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    title,
    description,
    siteName: "Dozer",
    locale: "ko_KR",
    type: "website",
    images: [
      {
        url: "/OG.png",
        width: 1774,
        height: 887,
        alt: "Dozer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/OG.png"],
  },
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
