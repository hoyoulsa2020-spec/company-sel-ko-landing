"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  ChevronRight,
  Hammer,
  MessageCircle,
  Smartphone,
  Sparkles,
  Users,
} from "lucide-react";

const CTA_URL = "https://sel-ko.co.kr";

const fadeUp = {
  initial: { opacity: 0, y: 14 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-64px" },
  transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const },
};

function SectionTitle({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <div className="inline-flex items-center gap-2">
        <span className="h-px w-6 bg-gradient-to-r from-transparent to-indigo-300 sm:w-10" aria-hidden />
        <span className="rounded-full border border-indigo-100 bg-indigo-50/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-indigo-700">
          {eyebrow}
        </span>
        <span className="h-px w-6 bg-gradient-to-l from-transparent to-indigo-300 sm:w-10" aria-hidden />
      </div>
      <h2 className="mt-5 text-balance text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">{title}</h2>
      {description ? (
        <p className="mt-3 text-pretty text-base leading-relaxed text-slate-600 sm:text-lg">{description}</p>
      ) : null}
    </div>
  );
}

const btnPrimary =
  "inline-flex h-12 items-center justify-center gap-2 rounded-2xl bg-gradient-to-b from-indigo-600 to-indigo-700 px-6 text-base font-semibold text-white shadow-[0_1px_0_rgba(255,255,255,0.12)_inset,0_8px_24px_rgba(79,70,229,0.35)] ring-1 ring-indigo-500/20 transition hover:from-indigo-500 hover:to-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 active:translate-y-px";

const btnSecondary =
  "inline-flex h-12 items-center justify-center rounded-2xl border border-slate-200/90 bg-white/90 px-6 text-base font-semibold text-slate-800 shadow-sm ring-1 ring-slate-900/[0.04] backdrop-blur-sm transition hover:border-slate-300 hover:bg-white hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-400 active:translate-y-px";

export function Landing() {
  return (
    <>
      <main className="pb-[calc(5.75rem+env(safe-area-inset-bottom))] sm:pb-[calc(5.25rem+env(safe-area-inset-bottom))]">
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-slate-200/70 bg-slate-50">
          {/* Background */}
          <div
            className="pointer-events-none absolute inset-0 bg-grid-fade bg-grid opacity-[0.65]"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-indigo-400/25 blur-3xl"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -right-20 top-32 h-64 w-64 rounded-full bg-violet-400/20 blur-3xl"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-200/80 to-transparent"
            aria-hidden
          />

          <div className="relative mx-auto max-w-5xl px-4 pb-16 pt-6 sm:px-6 sm:pb-24 sm:pt-8">
            {/* Brand row */}
            <div className="mb-10 flex items-center justify-between gap-4 sm:mb-14">
              <div className="flex items-center gap-2.5">
                <span
                  className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-violet-700 text-sm font-bold text-white shadow-md ring-1 ring-white/20"
                  aria-hidden
                >
                  셀
                </span>
                <span className="text-[15px] font-bold tracking-tight text-slate-900">셀인코치</span>
              </div>
              <a
                href={CTA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-indigo-700 underline-offset-4 transition hover:text-indigo-800 hover:underline"
              >
                웹 가입
              </a>
            </div>

            <div className="mx-auto max-w-3xl">
              <motion.div {...fadeUp}>
                <div className="flex justify-center">
                  <span className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-white/80 px-3 py-1 text-xs font-medium text-indigo-800 shadow-sm ring-1 ring-slate-900/[0.04] backdrop-blur-sm">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-400 opacity-60" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-indigo-500" />
                    </span>
                    셀프인테리어 · 시공 매칭
                  </span>
                </div>

                <h1 className="mt-6 text-balance text-center text-[1.7rem] font-bold leading-[1.25] tracking-tight text-slate-900 sm:text-[2.35rem] sm:leading-tight">
                  믿을 수 있는 시공 연결,
                  <br />
                  <span className="bg-gradient-to-r from-indigo-700 via-violet-700 to-indigo-700 bg-clip-text text-transparent">
                    셀인코치
                  </span>
                  에서 시작하세요
                </h1>
                <p className="mx-auto mt-5 max-w-xl text-pretty text-center text-[15px] leading-relaxed text-slate-600 sm:text-lg">
                  간편한 상담부터 업체 연결까지. 지금은 웹으로 빠르게 가입하고 이용할 수 있으며, 모바일 앱도
                  곧 만나보실 수 있습니다.
                </p>

                <div className="mt-9 flex flex-col gap-3 sm:mx-auto sm:max-w-lg sm:flex-row sm:justify-center sm:gap-4">
                  <a href={CTA_URL} target="_blank" rel="noopener noreferrer" className={btnPrimary}>
                    지금 가입하기
                    <ArrowRight className="h-4 w-4 opacity-90" aria-hidden />
                  </a>
                  <a href="#app-soon" className={btnSecondary}>
                    앱 출시 예정 안내
                  </a>
                </div>

                <p className="mt-8 text-center text-xs text-slate-500">
                  가입은{" "}
                  <span className="font-medium text-slate-600">새 탭에서 열리며</span>, 별도 앱 설치 없이
                  시작할 수 있습니다.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 서비스 소개 */}
        <section className="relative border-b border-slate-200/70 bg-white py-16 sm:py-24">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <motion.div {...fadeUp}>
              <SectionTitle
                eyebrow="서비스 소개"
                title="필요한 순간, 부담 없이 연결됩니다"
                description="소비자와 시공업체 모두를 위한 경험을 설계했습니다."
              />
            </motion.div>
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: Hammer,
                  title: "시공업체 연결",
                  body: "검증된 업체와 매칭해 불필요한 비교 시간을 줄입니다.",
                },
                {
                  icon: MessageCircle,
                  title: "간편한 상담 시작",
                  body: "몇 가지 정보만으로 상담 흐름을 빠르게 시작할 수 있습니다.",
                },
                {
                  icon: Smartphone,
                  title: "모바일 이용",
                  body: "이동 중에도 웹으로 주요 흐름을 이어갈 수 있습니다.",
                },
                {
                  icon: Sparkles,
                  title: "앱 출시 예정",
                  body: "더 편한 이용을 위해 네이티브 앱을 준비 중입니다.",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ delay: i * 0.05, duration: 0.4 }}
                  className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-gradient-to-b from-white to-slate-50/80 p-5 shadow-soft ring-1 ring-slate-900/[0.02] transition duration-300 hover:-translate-y-0.5 hover:border-indigo-200/80 hover:shadow-card"
                >
                  <div
                    className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-200/70 to-transparent opacity-0 transition group-hover:opacity-100"
                    aria-hidden
                  />
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-700 text-white shadow-md ring-1 ring-white/15">
                    <item.icon className="h-5 w-5" aria-hidden />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold tracking-tight text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.body}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 고객 섹션 */}
        <section className="relative border-b border-slate-200/70 bg-slate-50 py-16 sm:py-24">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <motion.div {...fadeUp}>
              <SectionTitle
                eyebrow="고객"
                title="인테리어, 시작이 어렵지 않도록"
                description="상담부터 연결까지 한 흐름으로 안내합니다."
              />
            </motion.div>
            <ul className="mx-auto mt-12 max-w-2xl space-y-3">
              {[
                { icon: MessageCircle, text: "상담 간편 — 필요한 내용만 정리해 빠르게 시작" },
                { icon: Building2, text: "업체 연결 — 조건에 맞는 시공 파트너를 연결" },
                { icon: CheckCircle2, text: "웹 가입 가능 — 별도 앱 없이도 가입·이용 가능" },
              ].map((row, i) => (
                <motion.li
                  key={row.text}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06, duration: 0.35 }}
                  className="flex gap-4 rounded-2xl border border-slate-200/90 bg-white p-4 shadow-sm ring-1 ring-slate-900/[0.02] transition hover:border-indigo-200/90 hover:shadow-md sm:p-5"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-50 to-white text-indigo-700 ring-1 ring-indigo-100">
                    <row.icon className="h-5 w-5" aria-hidden />
                  </div>
                  <p className="flex min-h-[3rem] items-center text-[15px] leading-relaxed text-slate-700 sm:text-base">
                    {row.text}
                  </p>
                </motion.li>
              ))}
            </ul>
          </div>
        </section>

        {/* 업체 섹션 */}
        <section className="relative border-b border-slate-200/70 bg-white py-16 sm:py-24">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <motion.div {...fadeUp}>
              <SectionTitle
                eyebrow="시공업체"
                title="고객과의 만남을 더 가볍게"
                description="참여 부담을 줄이고, 연결에 집중할 수 있도록 구성했습니다."
              />
            </motion.div>
            <ul className="mx-auto mt-12 max-w-2xl space-y-3">
              {[
                { icon: Users, text: "고객 확보 — 상담·매칭 흐름을 통해 문의 기회를 확대" },
                { icon: CheckCircle2, text: "간편 참여 — 웹 기반으로 빠르게 시작할 수 있습니다" },
                { icon: Smartphone, text: "앱 대응 예정 — 이후 앱 환경에서도 운영을 이어갈 수 있도록 준비 중" },
              ].map((row, i) => (
                <motion.li
                  key={row.text}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06, duration: 0.35 }}
                  className="flex gap-4 rounded-2xl border border-slate-200/90 bg-gradient-to-b from-slate-50 to-white p-4 shadow-sm ring-1 ring-slate-900/[0.02] transition hover:border-slate-300 hover:shadow-md sm:p-5"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-slate-800 to-slate-950 text-white shadow-md ring-1 ring-white/10">
                    <row.icon className="h-5 w-5" aria-hidden />
                  </div>
                  <p className="flex min-h-[3rem] items-center text-[15px] leading-relaxed text-slate-700 sm:text-base">
                    {row.text}
                  </p>
                </motion.li>
              ))}
            </ul>
          </div>
        </section>

        {/* 이용 방법 */}
        <section className="relative border-b border-slate-200/70 bg-slate-50 py-16 sm:py-24">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <motion.div {...fadeUp}>
              <SectionTitle eyebrow="이용 방법" title="접속 → 가입 → 이용" />
            </motion.div>

            <div className="mx-auto mt-12 max-w-3xl">
              <div
                className="flex flex-col gap-4 sm:flex-row sm:items-stretch sm:gap-2"
                role="list"
                aria-label="이용 방법 3단계"
              >
                {[
                  { step: "1", title: "접속", desc: "웹으로 셀인코치에 들어옵니다." },
                  { step: "2", title: "가입", desc: "간단한 정보로 계정을 만듭니다." },
                  { step: "3", title: "이용", desc: "상담·연결 흐름에 맞춰 진행합니다." },
                ].map((s, i) => (
                  <div key={s.step} className="flex flex-1 items-center gap-2 sm:min-w-0">
                    <motion.div
                      role="listitem"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08, duration: 0.4 }}
                      className="relative w-full flex-1 rounded-2xl border border-slate-200/90 bg-white p-5 text-center shadow-soft ring-1 ring-slate-900/[0.02]"
                    >
                      <span className="inline-flex h-10 min-w-[2.5rem] items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-700 text-sm font-bold text-white shadow-md ring-1 ring-white/15">
                        {s.step}
                      </span>
                      <h3 className="mt-4 text-lg font-semibold tracking-tight text-slate-900">{s.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.desc}</p>
                    </motion.div>
                    {i < 2 ? (
                      <div
                        className="hidden shrink-0 items-center justify-center text-slate-300 sm:flex"
                        aria-hidden
                      >
                        <ChevronRight className="h-6 w-6" strokeWidth={1.5} />
                      </div>
                    ) : null}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 앱 출시 */}
        <section id="app-soon" className="relative border-b border-slate-200/70 bg-white py-16 sm:py-24">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <motion.div
              {...fadeUp}
              className="relative overflow-hidden rounded-3xl border border-indigo-100/80 bg-gradient-to-br from-indigo-50/90 via-white to-violet-50/50 p-8 shadow-card ring-1 ring-indigo-100/60 sm:p-10"
            >
              <div
                className="pointer-events-none absolute -right-16 top-0 h-40 w-40 rounded-full bg-indigo-400/20 blur-3xl"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute -left-10 bottom-0 h-32 w-32 rounded-full bg-violet-400/15 blur-3xl"
                aria-hidden
              />

              <div className="relative text-center">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/70 px-3 py-1 text-xs font-semibold text-indigo-900 shadow-sm ring-1 ring-slate-900/[0.04] backdrop-blur-sm">
                  <Sparkles className="h-3.5 w-3.5 text-indigo-600" aria-hidden />
                  Coming soon
                </div>
                <h2 className="mt-5 text-balance text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                  곧 앱으로 만나요
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-pretty text-base leading-relaxed text-slate-600 sm:text-lg">
                  지금은 <strong className="font-semibold text-slate-900">웹에서 먼저</strong> 가입하고 이용해
                  주세요. 앱이 출시되면 동일한 계정으로 더 편한 경험을 이어갈 수 있도록 준비하고 있습니다.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 마지막 CTA */}
        <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-20 text-white sm:py-24">
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_50%_-30%,rgba(99,102,241,0.35),transparent)]"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_80%_100%,rgba(139,92,246,0.2),transparent)]"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.12]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            }}
            aria-hidden
          />

          <div className="relative mx-auto max-w-2xl px-4 text-center sm:px-6">
            <motion.div {...fadeUp}>
              <p className="text-sm font-medium text-indigo-200/90">셀인코치</p>
              <h2 className="mt-3 text-balance text-2xl font-bold tracking-tight sm:text-3xl">
                지금 sel-ko.co.kr에서 가입하세요
              </h2>
              <p className="mt-4 text-pretty text-base text-slate-300 sm:text-lg">
                클릭 한 번으로 시작할 수 있습니다. 새 탭에서 안전하게 열립니다.
              </p>
              <a
                href={CTA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-flex h-12 items-center justify-center gap-2 rounded-2xl bg-white px-7 text-base font-semibold text-slate-900 shadow-[0_1px_0_rgba(255,255,255,0.9)_inset,0_12px_40px_rgba(0,0,0,0.35)] ring-1 ring-white/30 transition hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:translate-y-px"
              >
                웹사이트로 이동
                <ArrowRight className="h-4 w-4" aria-hidden />
              </a>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-slate-200/80 bg-white">
          <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
            <div className="flex flex-col items-center gap-3 text-center">
              <div className="flex items-center gap-2">
                <span
                  className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-600 to-violet-700 text-xs font-bold text-white shadow-sm"
                  aria-hidden
                >
                  셀
                </span>
                <span className="text-sm font-bold tracking-tight text-slate-900">셀인코치</span>
              </div>
              <p className="max-w-sm text-xs leading-relaxed text-slate-500">
                셀프인테리어 소비자와 시공업체를 연결하는 서비스입니다.
              </p>
            </div>
          </div>
        </footer>
      </main>

      {/* Sticky CTA */}
      <div className="pointer-events-none fixed inset-x-0 bottom-0 z-50 flex justify-center p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] sm:p-4">
        <div className="pointer-events-auto w-full max-w-lg overflow-hidden rounded-2xl border border-white/70 bg-white/95 shadow-dock ring-1 ring-slate-900/[0.06] backdrop-blur-xl sm:flex sm:items-center sm:justify-between sm:gap-4 sm:px-4 sm:py-3">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-indigo-200/80 to-transparent sm:hidden" />
          <div className="px-4 pt-3 sm:flex sm:items-center sm:gap-3 sm:px-0 sm:pt-0">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-violet-700 text-xs font-bold text-white shadow-sm sm:mt-0">
              셀
            </div>
            <p className="mt-2 text-center text-sm font-medium text-slate-800 sm:mt-0 sm:text-left">
              <span className="block sm:inline">웹에서 빠르게 </span>
              <span className="font-semibold text-slate-900">가입</span>하고 시작해 보세요
            </p>
          </div>
          <div className="p-3 pt-2 sm:flex sm:shrink-0 sm:p-2">
            <a
              href={CTA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-b from-indigo-600 to-indigo-700 px-5 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(79,70,229,0.35)] ring-1 ring-indigo-500/25 transition hover:from-indigo-500 hover:to-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:w-auto active:translate-y-px"
            >
              가입하러 가기
              <ArrowRight className="h-4 w-4" aria-hidden />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
