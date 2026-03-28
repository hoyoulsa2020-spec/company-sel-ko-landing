"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Bell,
  Building2,
  Camera,
  ClipboardCheck,
  Hammer,
  Link2,
  MessageCircle,
  PhoneOff,
  Shield,
  Smartphone,
  Sparkles,
  Zap,
} from "lucide-react";
import Link from "next/link";

const CTA_URL = "https://sel-ko.co.kr";

const fade = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
};

const sectionPad = "px-4 py-20 sm:py-28 md:py-32";

export function ExperienceLanding() {
  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3.5 sm:px-6">
          <Link
            href="/"
            className="shrink-0 text-sm font-bold tracking-tight text-white transition hover:text-indigo-200"
          >
            ← 셀코
          </Link>
          <a
            href={CTA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-indigo-50"
          >
            시작하기
          </a>
        </div>
      </header>

      <main className="pb-8 pt-14 sm:pt-16">
        {/* 히어로 */}
        <section
          className={`relative overflow-hidden bg-gradient-to-b from-slate-950 via-indigo-950/70 to-slate-950 ${sectionPad} pb-24 pt-20 sm:pb-32 sm:pt-28`}
        >
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_55%_at_50%_-15%,rgba(99,102,241,0.35),transparent)]"
            aria-hidden
          />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_80%_100%,rgba(139,92,246,0.12),transparent)]" />
          <div className="relative mx-auto max-w-4xl text-center">
            <motion.div {...fade}>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-indigo-300/95 sm:text-sm">
                기능 체감
              </p>
              <h1 className="mt-6 text-balance text-[2rem] font-bold leading-[1.12] tracking-tight text-white sm:text-5xl sm:leading-[1.08] md:text-6xl md:leading-[1.05]">
                인테리어,
                <br />
                이렇게까지 편해집니다
              </h1>
              <p className="mx-auto mt-8 max-w-2xl text-pretty text-lg font-medium leading-relaxed text-slate-200 sm:text-xl sm:leading-relaxed">
                복잡한 과정 없이 셀코 하나로 시작부터 완료까지
              </p>
              <p className="mx-auto mt-5 max-w-xl text-pretty text-base leading-relaxed text-slate-400 sm:text-lg">
                설명할 필요 없이, 시스템이 알아서 움직입니다
              </p>
              <a
                href={CTA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-12 inline-flex h-14 min-w-[min(100%,300px)] items-center justify-center gap-2 rounded-2xl bg-white px-8 text-base font-bold text-slate-900 shadow-[0_0_48px_rgba(99,102,241,0.35)] transition hover:bg-indigo-50 sm:h-16 sm:text-lg"
              >
                지금 sel-ko.co.kr에서 시작하세요
                <ArrowRight className="h-5 w-5" aria-hidden />
              </a>
            </motion.div>
          </div>
        </section>

        {/* 문제 제거 */}
        <section className={`border-b border-slate-200/80 bg-white ${sectionPad}`}>
          <div className="mx-auto max-w-5xl">
            <motion.div {...fade} className="text-center">
              <h2 className="text-balance text-[1.75rem] font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
                복잡했던 과정,
                <br className="sm:hidden" /> 전부 없어집니다
              </h2>
            </motion.div>
            <div className="mt-16 grid gap-5 sm:grid-cols-3 sm:gap-6">
              {[
                { q: "견적서 작성?", a: "필요 없습니다", icon: Zap },
                { q: "공정표 관리?", a: "신경 쓸 필요 없습니다", icon: ClipboardCheck },
                { q: "전화 확인?", a: "이제 안 해도 됩니다", icon: PhoneOff },
              ].map((item, i) => (
                <motion.div
                  key={item.q}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07, duration: 0.45 }}
                  className="relative overflow-hidden rounded-[1.75rem] border border-slate-200/90 bg-gradient-to-b from-slate-50 to-white p-7 shadow-[0_1px_0_rgba(15,23,42,0.04)] ring-1 ring-slate-900/[0.04] sm:p-8"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-900 text-white shadow-md">
                    <item.icon className="h-5 w-5" aria-hidden />
                  </div>
                  <p className="mt-6 text-lg font-bold text-slate-800 sm:text-xl">{item.q}</p>
                  <p className="mt-3 text-xl font-bold leading-snug text-indigo-600 sm:text-2xl">{item.a}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 기능 */}
        <section className={`bg-slate-50 ${sectionPad}`}>
          <div className="mx-auto max-w-5xl">
            <motion.div {...fade} className="text-center">
              <h2 className="text-balance text-[1.75rem] font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
                알아서 진행되고,
                <br className="sm:hidden" /> 알아서 알려줍니다
              </h2>
            </motion.div>
            <div className="mt-16 grid gap-4 sm:grid-cols-2 sm:gap-5">
              {[
                { icon: Bell, text: "공정 진행 실시간 안내" },
                { icon: Camera, text: "사진 기반 진행 보고" },
                { icon: Sparkles, text: "완료까지 자동 관리" },
              ].map((row, i) => (
                <motion.div
                  key={row.text}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06, duration: 0.4 }}
                  className="flex items-center gap-5 rounded-[1.35rem] border border-white bg-white p-6 shadow-[0_8px_30px_rgba(15,23,42,0.06)] ring-1 ring-slate-900/[0.04] sm:p-7"
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-600 text-white shadow-md">
                    <row.icon className="h-7 w-7" aria-hidden />
                  </div>
                  <p className="text-lg font-bold leading-snug text-slate-900 sm:text-xl">{row.text}</p>
                </motion.div>
              ))}
            </div>
            <motion.p
              {...fade}
              className="mt-14 text-center text-[1.35rem] font-bold leading-snug tracking-tight text-indigo-700 sm:text-2xl md:text-3xl"
            >
              현장에 가지 않아도,
              <br className="sm:hidden" /> 현장을 아는 느낌
            </motion.p>
          </div>
        </section>

        {/* 안정감 */}
        <section className={`border-b border-slate-200/80 bg-white ${sectionPad}`}>
          <div className="mx-auto max-w-5xl">
            <motion.div {...fade} className="text-center">
              <h2 className="text-balance text-[1.75rem] font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
                셀프 인테리어,
                <br className="sm:hidden" /> 이제 불안하지 않습니다
              </h2>
            </motion.div>
            <div className="mt-16 grid gap-6 sm:grid-cols-3">
              {[
                { icon: Building2, text: "전문 시공업체 기반" },
                { icon: Shield, text: "하자보수까지 고려된 구조" },
                { icon: Link2, text: "맡기면, 끝까지 관리됩니다" },
              ].map((item, i) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.45 }}
                  className="rounded-[1.75rem] border border-slate-200/90 bg-gradient-to-b from-white to-slate-50/80 p-8 text-center shadow-soft"
                >
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-900 text-white shadow-md">
                    <item.icon className="h-7 w-7" aria-hidden />
                  </div>
                  <p className="mt-6 text-base font-bold leading-relaxed text-slate-800 sm:text-lg">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 흐름 */}
        <section className={`relative overflow-hidden bg-slate-950 px-4 py-24 text-white sm:py-32`}>
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(99,102,241,0.2),transparent)]"
            aria-hidden
          />
          <div className="relative mx-auto max-w-3xl text-center">
            <motion.div {...fade}>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-300/90">흐름</p>
              <h2 className="mt-6 text-[1.35rem] font-bold leading-snug tracking-tight sm:text-3xl md:text-4xl">
                상담 <span className="text-indigo-400/90">→</span> 연결{" "}
                <span className="text-indigo-400/90">→</span> 진행{" "}
                <span className="text-indigo-400/90">→</span> 완료
              </h2>
            </motion.div>
            <motion.p
              {...fade}
              className="mx-auto mt-14 max-w-md text-pretty text-xl font-bold leading-snug text-indigo-100 sm:text-2xl"
            >
              확인할 때마다,
              <br />
              이미 진행되어 있습니다
            </motion.p>
          </div>
        </section>

        {/* 업체 */}
        <section className={`bg-white ${sectionPad}`}>
          <div className="mx-auto max-w-5xl">
            <motion.div {...fade} className="text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-indigo-600">시공업체</p>
              <h2 className="mt-4 text-balance text-[1.75rem] font-bold leading-tight tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
                현장에만 집중하세요
              </h2>
            </motion.div>
            <div className="mt-16 grid gap-5 sm:grid-cols-2">
              {[
                { icon: Hammer, text: "현장에서 바로 견적 입력" },
                { icon: Smartphone, text: "스마트폰으로 간단하게 참여" },
              ].map((item, i) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06, duration: 0.4 }}
                  className="rounded-[1.75rem] border border-slate-200/90 bg-slate-50/80 p-8 ring-1 ring-slate-900/[0.03]"
                >
                  <item.icon className="h-9 w-9 text-indigo-600" aria-hidden />
                  <p className="mt-5 text-xl font-bold text-slate-900">{item.text}</p>
                </motion.div>
              ))}
            </div>
            <motion.p
              {...fade}
              className="mt-12 text-center text-xl font-bold text-slate-800 sm:text-2xl"
            >
              일감은 계속 들어옵니다
            </motion.p>
          </div>
        </section>

        {/* 임팩트 */}
        <section className={`border-y border-slate-200/80 bg-gradient-to-b from-slate-50 to-white ${sectionPad}`}>
          <div className="mx-auto max-w-4xl px-2 text-center">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="text-balance text-2xl font-bold leading-snug tracking-tight text-slate-900 sm:text-4xl md:text-5xl"
            >
              자고 일어나면,
              <br />
              다음 현장이 준비됩니다
            </motion.p>
          </div>
        </section>

        {/* 앱 */}
        <section className={`bg-white ${sectionPad} pt-16 sm:pt-24`}>
          <div className="mx-auto max-w-2xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="rounded-[1.75rem] border border-indigo-100 bg-gradient-to-br from-indigo-50/80 to-white p-10 shadow-[0_20px_60px_rgba(79,70,229,0.08)] ring-1 ring-indigo-100/60 sm:p-12"
            >
              <Smartphone className="mx-auto h-10 w-10 text-indigo-600" aria-hidden />
              <h2 className="mt-6 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                곧, 앱으로 더 편리해집니다
              </h2>
              <p className="mt-4 text-lg font-medium text-slate-600 sm:text-xl">웹에서 먼저 이용 가능</p>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-br from-indigo-700 via-violet-700 to-indigo-900 px-4 py-24 sm:py-32">
          <div className="mx-auto max-w-2xl text-center">
            <motion.div {...fade}>
              <Sparkles className="mx-auto h-10 w-10 text-indigo-200/90" aria-hidden />
              <h2 className="mt-6 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
                지금 sel-ko.co.kr에서 시작하세요
              </h2>
              <a
                href={CTA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-flex h-14 w-full max-w-sm items-center justify-center gap-2 rounded-2xl bg-white px-8 text-base font-bold text-indigo-900 shadow-xl transition hover:bg-indigo-50 sm:h-16 sm:text-lg"
              >
                시작하기
                <ArrowRight className="h-5 w-5" aria-hidden />
              </a>
            </motion.div>
          </div>
        </section>

        <footer className="border-t border-slate-200 bg-white px-4 py-12 pb-28 sm:pb-12">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-center text-sm text-slate-500 sm:flex-row sm:text-left">
            <Link href="/" className="font-semibold text-slate-800 transition hover:text-indigo-600">
              회사 소개 랜딩
            </Link>
            <p>© 셀코</p>
          </div>
        </footer>
      </main>
    </>
  );
}
