import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import { KakaoChatButton } from "@/components/KakaoChatButton";
import { SITE_URL } from "@/lib/site";

const noto = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "셀인코치 | 인테리어 시공 연결 서비스",
  description:
    "소비자와 전문 시공업체를 연결하는 셀인코치. 웹에서 바로 가입하고 시작하세요.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "셀인코치 | 인테리어 시공 연결 서비스",
    description:
      "소비자와 전문 시공업체를 연결하는 셀인코치. 웹에서 바로 가입하고 시작하세요.",
    type: "website",
    url: SITE_URL,
    siteName: "셀인코치",
    locale: "ko_KR",
  },
  twitter: {
    card: "summary_large_image",
    title: "셀인코치 | 인테리어 시공 연결 서비스",
    description:
      "소비자와 전문 시공업체를 연결하는 셀인코치. 웹에서 바로 가입하고 시작하세요.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className={noto.variable}>
      <head>
        <meta name="naver-site-verification" content="a22b2944c2ffd977efa414e0d11244d253a0f624" />
      </head>
      <body className="min-h-screen bg-slate-50 font-sans text-slate-900 antialiased">
        {children}
        <KakaoChatButton />
      </body>
    </html>
  );
}
