import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const noto = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "셀인코치 — 믿을 수 있는 시공 연결",
  description:
    "셀프인테리어 소비자와 전문 시공업체를 연결하는 플랫폼. 웹에서 가입하고, 곧 앱도 만나보세요.",
  openGraph: {
    title: "셀인코치",
    description: "믿을 수 있는 시공 연결, 셀인코치에서 시작하세요.",
    locale: "ko_KR",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className={noto.variable}>
      <body className="min-h-screen bg-slate-50 font-sans text-slate-900 antialiased">{children}</body>
    </html>
  );
}
