import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "셀인코치",
  description: "셀프인테리어 · 시공업체 매칭",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
