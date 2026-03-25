import type { Metadata } from "next";
import Link from "next/link";

import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "개인정보처리방침 | 셀코",
  description:
    "셀코 개인정보처리방침. 수집 항목, 이용 목적, 보관 기간, 제3자 제공, 이용자 권리 및 문의처 안내.",
  alternates: { canonical: "/privacy" },
  openGraph: {
    title: "개인정보처리방침 | 셀코",
    description:
      "셀코 개인정보처리방침. 수집 항목, 이용 목적, 보관 기간, 제3자 제공, 이용자 권리 및 문의처 안내.",
    url: `${SITE_URL}/privacy`,
    type: "website",
  },
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <header className="border-b border-slate-200/80 bg-white">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-4 py-4 sm:px-6">
          <Link
            href="/"
            className="text-sm font-semibold text-indigo-600 underline-offset-4 transition hover:text-indigo-800 hover:underline"
          >
            ← 셀코
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
        <article className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-soft ring-1 ring-slate-900/[0.03] sm:p-8 md:p-10">
          <h1 className="text-balance text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            개인정보처리방침
          </h1>

          <p className="mt-8 text-pretty text-[15px] leading-relaxed text-slate-700 sm:text-base">
            셀코(이하 &quot;회사&quot;)는 이용자의 개인정보를 중요하게 생각하며 관련 법령을 준수합니다.
          </p>

          <section className="mt-10">
            <h2 className="text-lg font-bold tracking-tight text-slate-900 sm:text-xl">{`1. 수집하는 개인정보 항목`}</h2>
            <p className="mt-4 text-pretty text-[15px] leading-relaxed text-slate-700 sm:text-base">
              회사는 서비스 제공을 위해 아래의 정보를 수집할 수 있습니다.
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-[15px] leading-relaxed text-slate-700 sm:text-base">
              <li>이름, 연락처, 이메일, 주소</li>
              <li>공사 관련 정보 및 상담 내용</li>
            </ul>
          </section>

          <section className="mt-10">
            <h2 className="text-lg font-bold tracking-tight text-slate-900 sm:text-xl">{`2. 개인정보 수집 및 이용 목적`}</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-[15px] leading-relaxed text-slate-700 sm:text-base">
              <li>서비스 제공 및 계약 이행</li>
              <li>고객 상담 및 문의 대응</li>
              <li>서비스 개선 및 운영 관리</li>
            </ul>
          </section>

          <section className="mt-10">
            <h2 className="text-lg font-bold tracking-tight text-slate-900 sm:text-xl">{`3. 개인정보 보관 및 이용 기간`}</h2>
            <p className="mt-4 text-pretty text-[15px] leading-relaxed text-slate-700 sm:text-base">
              수집된 개인정보는 수집 및 이용 목적 달성 후 3년간 보관 후 파기합니다.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-lg font-bold tracking-tight text-slate-900 sm:text-xl">{`4. 개인정보 제3자 제공`}</h2>
            <p className="mt-4 text-pretty text-[15px] leading-relaxed text-slate-700 sm:text-base">
              회사는 서비스 제공을 위해 시공업체 등에게 필요한 범위 내에서 정보를 제공할 수 있습니다.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-lg font-bold tracking-tight text-slate-900 sm:text-xl">{`5. 이용자의 권리`}</h2>
            <p className="mt-4 text-pretty text-[15px] leading-relaxed text-slate-700 sm:text-base">
              이용자는 언제든지 자신의 개인정보를 조회, 수정, 삭제 요청할 수 있습니다.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-lg font-bold tracking-tight text-slate-900 sm:text-xl">{`6. 개인정보 보호`}</h2>
            <p className="mt-4 text-pretty text-[15px] leading-relaxed text-slate-700 sm:text-base">
              회사는 개인정보 보호를 위해 합리적인 보안 조치를 적용합니다.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-lg font-bold tracking-tight text-slate-900 sm:text-xl">{`7. 문의처`}</h2>
            <p className="mt-4 text-[15px] leading-relaxed text-slate-700 sm:text-base">
              이메일:{" "}
              <a
                href="mailto:hoyoulsa2020@gmail.com"
                className="font-medium text-indigo-600 underline-offset-2 hover:underline"
              >
                hoyoulsa2020@gmail.com
              </a>
            </p>
            <p className="mt-2 text-[15px] leading-relaxed text-slate-700 sm:text-base">
              연락처:{" "}
              <a href="tel:010-2382-4229" className="font-medium text-indigo-600 underline-offset-2 hover:underline">
                010-2382-4229
              </a>
            </p>
          </section>

          <p className="mt-10 text-pretty text-sm leading-relaxed text-slate-500 sm:text-[15px]">
            본 방침은 시행일로부터 적용됩니다.
          </p>
        </article>
      </main>

      <footer className="border-t border-slate-200/80 bg-white">
        <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
          <div className="flex flex-col items-center gap-3 text-center">
            <div className="flex items-center gap-2">
              <span
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-600 to-violet-700 text-xs font-bold text-white shadow-sm"
                aria-hidden
              >
                셀
              </span>
              <span className="text-sm font-bold tracking-tight text-slate-900">셀코</span>
            </div>
            <p className="max-w-sm text-xs leading-relaxed text-slate-500">
              소비자와 시공업체를 직접 연결하는 셀프인테리어 플랫폼입니다.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-sm">
              <Link
                href="/experience"
                className="font-semibold text-indigo-600 underline-offset-4 transition hover:text-indigo-800 hover:underline"
              >
                기능·사용 경험 소개
              </Link>
              <span className="hidden text-slate-300 sm:inline" aria-hidden>
                |
              </span>
              <span className="font-semibold text-slate-900">개인정보처리방침</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
