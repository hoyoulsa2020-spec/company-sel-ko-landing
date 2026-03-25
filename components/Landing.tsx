"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  ChevronRight,
  Layers,
  Link2,
  MessageCircle,
  Smartphone,
  Sparkles,
  Users,
  X,
} from "lucide-react";

import Link from "next/link";

import { AppComingSoonSection } from "@/components/AppComingSoonSection";

const CTA_URL = "https://sel-ko.co.kr";

/** Pexels 원본 (Canva 편집 링크에 연결된 동일 영상) */
const HERO_VIDEO_SRC =
  "https://videos.pexels.com/video-files/8482292/8482292-hd_1920_1080_25fps.mp4";

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

const STICKY_CTA_DISMISS_KEY = "selko-sticky-cta-dismissed";

export function Landing() {
  const [showStickyCta, setShowStickyCta] = useState(true);

  useEffect(() => {
    try {
      if (typeof window !== "undefined" && localStorage.getItem(STICKY_CTA_DISMISS_KEY) === "1") {
        setShowStickyCta(false);
      }
    } catch {
      /* ignore */
    }
  }, []);

  const dismissStickyCta = () => {
    setShowStickyCta(false);
    try {
      localStorage.setItem(STICKY_CTA_DISMISS_KEY, "1");
    } catch {
      /* ignore */
    }
  };

  return (
    <>
      <main
        className={
          showStickyCta
            ? "pb-[calc(5.75rem+env(safe-area-inset-bottom))] sm:pb-[calc(5.25rem+env(safe-area-inset-bottom))]"
            : "pb-0"
        }
      >
        {/* Hero — 배경 영상(Pexels) + 오버레이, 본문만 상대 z-index */}
        <section
          className="relative overflow-hidden border-b border-slate-800/50 bg-slate-950"
          aria-label="메인 소개"
        >
          {/* 배경 영상: 섹션 전체 높이 덮음 → 버튼 줄 아래 찐 네이비 단색 띠 제거 */}
          <div className="pointer-events-none absolute inset-0 z-0" aria-hidden>
            <video
              className="h-full w-full object-cover object-top motion-reduce:hidden"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-hidden
            >
              <source src={HERO_VIDEO_SRC} type="video/mp4" />
            </video>
            <div className="absolute inset-0 hidden bg-slate-900 motion-reduce:block" />
            {/* 최초 영상 히어로와 동일한 어두운 오버레이 */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/65 to-slate-950/85" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_50%_-20%,rgba(79,70,229,0.12),transparent)]" />
          </div>

          <div className="relative z-10 mx-auto max-w-5xl px-4 pb-16 pt-6 sm:px-6 sm:pb-20 sm:pt-8">
            <div className="mb-10 flex flex-col gap-4 sm:mb-14 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
              <div className="flex items-center justify-between gap-4 sm:justify-start sm:gap-0">
                <div className="flex items-center gap-2.5">
                  <span
                    className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 text-sm font-bold text-white shadow-lg ring-1 ring-white/25"
                    aria-hidden
                  >
                    셀
                  </span>
                  <span className="text-[15px] font-bold tracking-tight text-white drop-shadow-sm">
                    셀인코치
                  </span>
                </div>
                <a
                  href={CTA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[15px] font-bold text-white underline-offset-[5px] drop-shadow-[0_1px_8px_rgba(0,0,0,0.45)] transition hover:underline sm:hidden sm:text-base"
                >
                  웹 가입
                </a>
              </div>
              <div className="flex w-full justify-center sm:flex-1 sm:px-2">
                <Link
                  href="/experience"
                  className="inline-flex h-11 w-full max-w-sm items-center justify-center gap-2 rounded-2xl border border-white/25 bg-white/15 px-5 text-sm font-bold text-white shadow-[0_8px_32px_rgba(0,0,0,0.25)] ring-1 ring-white/20 backdrop-blur-md transition hover:bg-white/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:h-12 sm:max-w-none sm:shrink-0 sm:px-8 sm:text-[15px]"
                >
                  셀인관리APP 알아보기
                  <ArrowRight className="h-4 w-4 opacity-90" aria-hidden />
                </Link>
              </div>
              <a
                href={CTA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden text-[15px] font-bold text-white underline-offset-[5px] drop-shadow-[0_1px_8px_rgba(0,0,0,0.45)] transition hover:underline sm:block sm:shrink-0 sm:text-base"
              >
                웹 가입
              </a>
            </div>

            <div className="mx-auto max-w-3xl">
              <motion.div {...fadeUp}>
                <div className="flex justify-center">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white shadow-sm ring-1 ring-white/10 backdrop-blur-md">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-300 opacity-60" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-indigo-200" />
                    </span>
                    직접 연결 · 셀프인테리어
                  </span>
                </div>

                <h1 className="mt-6 text-balance text-center text-[1.7rem] font-bold leading-[1.25] tracking-tight text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.35)] sm:text-[2.35rem] sm:leading-tight">
                  복잡한 단계를 줄이고,
                  <br />
                  시공을 더{" "}
                  <span className="bg-gradient-to-r from-indigo-200 via-violet-200 to-indigo-200 bg-clip-text text-transparent">
                    명확하게
                  </span>
                </h1>
                <p className="mx-auto mt-5 max-w-xl text-pretty text-center text-[15px] leading-relaxed text-slate-200/95 sm:text-lg">
                  셀인코치는 소비자와 시공업체를 직접 연결하는 구조로 설계되었습니다. 불필요한 중간 단계를
                  줄이면, 공사 범위와 선택이 더 분명해지고 합리적인 판단을 돕습니다.
                </p>

                <div className="mt-9 flex flex-col gap-3 sm:mx-auto sm:max-w-lg sm:flex-row sm:justify-center sm:gap-4">
                  <a href={CTA_URL} target="_blank" rel="noopener noreferrer" className={btnPrimary}>
                    sel-ko.co.kr에서 가입하기
                    <ArrowRight className="h-4 w-4 opacity-90" aria-hidden />
                  </a>
                  <a
                    href="#app-soon"
                    className={`${btnSecondary} border-white/25 bg-white/95 text-slate-900 shadow-md ring-white/20 hover:bg-white`}
                  >
                    앱 출시 예정 안내
                  </a>
                </div>

                <p className="mt-8 text-center text-xs text-slate-400">
                  가입은 <span className="font-medium text-slate-300">새 탭에서 열리며</span>, 앱 설치 없이
                  시작할 수 있습니다.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 구조 설명 */}
        <section id="structure" className="relative border-b border-slate-200/70 bg-white py-16 sm:py-24">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <motion.div {...fadeUp}>
              <SectionTitle
                eyebrow="구조 이해하기"
                title="왜 같은 공사인데 비용 차이가 날까요?"
                description="인테리어는 여러 단계를 거치며 진행됩니다. 단계가 늘어날수록 각 구간에서 비용이 더해질 수 있어, 같은 범위라도 체감 비용이 달라질 수 있습니다."
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="mt-10 space-y-5 text-[15px] leading-relaxed text-slate-600 sm:text-base"
            >
              <p className="text-pretty">
                상담·설계·견적·시공처럼 과정이 길어질수록, 정보와 비용이 단계마다 이어집니다. 중간 단계가
                많을수록 전달 과정에서 추가 비용이 발생할 여지도 커질 수 있습니다.
              </p>
              <p className="text-pretty">
                <strong className="font-semibold text-slate-800">셀인코치</strong>는 소비자와 시공업체를
                직접 연결하는 구조를 지향합니다. 불필요한 단계를 줄이면 공사의 시작점이 분명해지고, 범위와
                선택을 비교하기에도 수월해집니다.
              </p>
            </motion.div>
          </div>
        </section>

        {/* 비교 카드 */}
        <section className="relative border-b border-slate-200/70 bg-slate-50 py-16 sm:py-24">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <motion.div {...fadeUp}>
              <h2 className="text-center text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
                구조를 나누어 보면 이해가 쉬워집니다
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-slate-600 sm:text-base">
                과장 없이, 흐름의 차이만 정리했습니다.
              </p>
            </motion.div>

            <div className="mt-10 grid gap-5 lg:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="rounded-3xl border border-slate-200/90 bg-white p-6 shadow-soft ring-1 ring-slate-900/[0.03] sm:p-8"
              >
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-100 text-slate-600 ring-1 ring-slate-200/80">
                    <Layers className="h-5 w-5" aria-hidden />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">기존 구조</p>
                    <h3 className="text-lg font-bold text-slate-900">여러 단계를 거치는 경우</h3>
                  </div>
                </div>
                <ul className="mt-5 space-y-3 text-sm leading-relaxed text-slate-600 sm:text-[15px]">
                  <li className="flex gap-2.5">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-300" aria-hidden />
                    여러 단계의 중간 과정을 거칠 수 있음
                  </li>
                  <li className="flex gap-2.5">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-300" aria-hidden />
                    전달 과정에서 비용이 더해질 수 있음
                  </li>
                  <li className="flex gap-2.5">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-300" aria-hidden />
                    실제 시공업체까지 단계적으로 이어짐
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.06 }}
                className="rounded-3xl border border-indigo-200/80 bg-gradient-to-b from-white to-indigo-50/40 p-6 shadow-card ring-1 ring-indigo-100/60 sm:p-8"
              >
                <div className="flex items-center gap-3 border-b border-indigo-100/80 pb-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-700 text-white shadow-md ring-1 ring-white/15">
                    <Link2 className="h-5 w-5" aria-hidden />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-indigo-700">셀인코치</p>
                    <h3 className="text-lg font-bold text-slate-900">직접 연결 구조</h3>
                  </div>
                </div>
                <ul className="mt-5 space-y-3 text-sm leading-relaxed text-slate-700 sm:text-[15px]">
                  <li className="flex gap-2.5">
                    <CheckCircle2
                      className="mt-0.5 h-4 w-4 shrink-0 text-indigo-600"
                      aria-hidden
                      strokeWidth={2}
                    />
                    시공업체와 직접 연결되는 흐름
                  </li>
                  <li className="flex gap-2.5">
                    <CheckCircle2
                      className="mt-0.5 h-4 w-4 shrink-0 text-indigo-600"
                      aria-hidden
                      strokeWidth={2}
                    />
                    단순한 구조로 과정을 정리
                  </li>
                  <li className="flex gap-2.5">
                    <CheckCircle2
                      className="mt-0.5 h-4 w-4 shrink-0 text-indigo-600"
                      aria-hidden
                      strokeWidth={2}
                    />
                    공사 시작이 더 명확해지도록 설계
                  </li>
                </ul>
              </motion.div>
            </div>

            {/* 핵심 문구 */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="mx-auto mt-12 max-w-2xl rounded-2xl border border-indigo-100 bg-white/90 px-5 py-6 text-center shadow-sm ring-1 ring-slate-900/[0.03] sm:px-8"
            >
              <p className="text-sm font-medium text-slate-800 sm:text-base">
                불필요한 단계를 줄이면, 공사는 더 명확해집니다.
              </p>
              <p className="mt-2 text-sm text-slate-600 sm:text-[15px]">
                복잡한 구조 대신, 직접 연결로 시작해 보세요.
              </p>
            </motion.div>
          </div>
        </section>

        {/* 서비스 소개 */}
        <section className="relative border-b border-slate-200/70 bg-white py-16 sm:py-24">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <motion.div {...fadeUp}>
              <SectionTitle
                eyebrow="서비스 소개"
                title="직접 연결에 맞춘 이용 경험"
                description="구조를 단순하게 만드는 방향으로 기능을 쌓았습니다."
              />
            </motion.div>
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: Link2,
                  title: "직접 연결 구조",
                  body: "소비자와 시공업체를 이어 주는 흐름에 초점을 둡니다.",
                },
                {
                  icon: MessageCircle,
                  title: "상담·연결",
                  body: "필요한 정보를 바탕으로 상담과 연결을 이어 갑니다.",
                },
                {
                  icon: Smartphone,
                  title: "웹으로 시작",
                  body: "이동 중에도 웹으로 흐름을 이어 갈 수 있습니다.",
                },
                {
                  icon: Sparkles,
                  title: "앱 출시 예정",
                  body: "이후 네이티브 앱으로 더 편한 경험을 준비 중입니다.",
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
                title="공사 결정을 더 분명하게"
                description="무엇을 비교해야 할지, 어디서부터 시작할지 정리해 드립니다."
              />
            </motion.div>
            <ul className="mx-auto mt-12 max-w-2xl space-y-3">
              {[
                {
                  icon: MessageCircle,
                  text: "상담 흐름이 단순해져, 필요한 내용을 빠르게 정리할 수 있습니다.",
                },
                {
                  icon: Building2,
                  text: "조건에 맞는 시공업체와 연결되어, 직접 대화를 시작할 수 있습니다.",
                },
                {
                  icon: CheckCircle2,
                  text: "웹에서 가입·이용이 가능해, 별도 앱 없이도 시작할 수 있습니다.",
                },
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
                title="연결에 집중할 수 있도록"
                description="참여 방식을 단순하게 두어, 문의와 소통에 더 쓸 시간을 남깁니다."
              />
            </motion.div>
            <ul className="mx-auto mt-12 max-w-2xl space-y-3">
              {[
                {
                  icon: Users,
                  text: "상담·매칭 흐름을 통해 고객과 만나는 기회를 확대할 수 있습니다.",
                },
                {
                  icon: CheckCircle2,
                  text: "웹 기반으로 빠르게 참여를 시작할 수 있습니다.",
                },
                {
                  icon: Smartphone,
                  text: "이후 앱이 열리면 동일한 맥락으로 운영을 이어 갈 수 있도록 준비 중입니다.",
                },
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
              <SectionTitle
                eyebrow="이용 방법"
                title="접속 → 가입 → 이용"
                description="웹에서 계정을 만들고, 안내된 흐름대로 진행하면 됩니다."
              />
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

        <AppComingSoonSection />

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
                구조를 이해했다면, 직접 연결로 시작해 보세요
              </h2>
              <p className="mt-4 text-pretty text-base text-slate-300 sm:text-lg">
                sel-ko.co.kr에서 가입하면 웹에서 바로 상담·연결 흐름을 이용할 수 있습니다. 새 탭에서
                안전하게 열립니다.
              </p>
              <a
                href={CTA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-flex h-12 items-center justify-center gap-2 rounded-2xl bg-white px-7 text-base font-semibold text-slate-900 shadow-[0_1px_0_rgba(255,255,255,0.9)_inset,0_12px_40px_rgba(0,0,0,0.35)] ring-1 ring-white/30 transition hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:translate-y-px"
              >
                sel-ko.co.kr 가입하기
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
                소비자와 시공업체를 직접 연결하는 셀프인테리어 플랫폼입니다.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
                <Link
                  href="/experience"
                  className="text-sm font-semibold text-indigo-600 underline-offset-4 transition hover:text-indigo-800 hover:underline"
                >
                  기능·사용 경험 소개
                </Link>
                <span className="hidden text-slate-300 sm:inline" aria-hidden>
                  |
                </span>
                <Link
                  href="/privacy"
                  className="text-sm font-semibold text-slate-600 underline-offset-4 transition hover:text-indigo-700 hover:underline"
                >
                  개인정보처리방침
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </main>

      {/* Sticky CTA — 닫기 시 숨김(로컬에 기억) */}
      {showStickyCta ? (
        <div className="pointer-events-none fixed inset-x-0 bottom-0 z-50 flex justify-center p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] sm:p-4">
          <div className="pointer-events-auto relative w-full max-w-lg overflow-hidden rounded-2xl border border-white/70 bg-white/95 shadow-dock ring-1 ring-slate-900/[0.06] backdrop-blur-xl sm:flex sm:items-center sm:justify-between sm:gap-4 sm:px-4 sm:py-3">
            <button
              type="button"
              onClick={dismissStickyCta}
              className="absolute right-2 top-2 z-10 flex h-8 w-8 items-center justify-center rounded-lg text-slate-500 transition hover:bg-slate-100 hover:text-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:right-3 sm:top-1/2 sm:-translate-y-1/2"
              aria-label="하단 배너 닫기"
            >
              <X className="h-4 w-4" aria-hidden />
            </button>
            <div className="h-px w-full bg-gradient-to-r from-transparent via-indigo-200/80 to-transparent sm:hidden" />
            <div className="px-4 pt-3 pr-12 sm:flex sm:items-center sm:gap-3 sm:px-0 sm:pr-10 sm:pt-0">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-violet-700 text-xs font-bold text-white shadow-sm sm:mt-0">
                셀
              </div>
              <p className="mt-2 text-center text-sm font-medium text-slate-800 sm:mt-0 sm:text-left">
                <span className="block text-slate-600 sm:inline">단순한 구조로 </span>
                <span className="font-semibold text-slate-900">직접 연결</span>
                <span className="block sm:inline">을 시작해 보세요</span>
              </p>
            </div>
            <div className="p-3 pt-2 sm:flex sm:shrink-0 sm:p-2">
              <a
                href={CTA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-b from-indigo-600 to-indigo-700 px-5 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(79,70,229,0.35)] ring-1 ring-indigo-500/25 transition hover:from-indigo-500 hover:to-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:w-auto active:translate-y-px"
              >
                가입하기
                <ArrowRight className="h-4 w-4" aria-hidden />
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
