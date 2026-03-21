import type { Metadata } from "next";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Camera,
  CheckCircle2,
  ClipboardCheck,
  FileCheck2,
  MessageCircle,
  ShieldCheck,
  Smartphone,
} from "lucide-react";
import Link from "next/link";

import { SITE_URL } from "@/lib/site";

const KAKAO_URL = "https://open.kakao.com/o/sKQBlymi";

export const metadata: Metadata = {
  title: "셀인코치 | 무료 상담 랜딩",
  description:
    "현장 안 가도 인테리어 끝납니다. 견적, 공정, 시공관리까지 셀코 하나로 해결하세요.",
  alternates: { canonical: "/experience" },
  openGraph: {
    title: "현장 안 가도 인테리어 끝납니다",
    description: "견적, 공정, 시공관리까지 셀코 하나로 해결. 지금 무료 상담 받아보세요.",
    url: `${SITE_URL}/experience`,
    type: "website",
  },
};

const beforeItems = [
  "견적 받으려고 여러 업체에 계속 연락해야 합니다",
  "공정이 어디까지 진행됐는지 바로 알기 어렵습니다",
  "현장 확인 때문에 시간과 이동 비용이 계속 듭니다",
  "하자 발생 시 누구 책임인지 애매해집니다",
];

const solutionItems = [
  { icon: ClipboardCheck, title: "실시간 공정 확인", body: "지금 어디까지 진행됐는지 한눈에 봅니다." },
  { icon: FileCheck2, title: "간편 견적 비교", body: "복잡한 정리 없이 빠르게 비교합니다." },
  { icon: Smartphone, title: "앱처럼 간편한 확인", body: "이동 중에도 진행 상황을 바로 확인합니다." },
  { icon: Building2, title: "시공업체 직접 연결", body: "불필요한 중간 단계를 줄입니다." },
];

const featureItems = [
  { icon: FileCheck2, title: "견적 자동화", body: "복잡한 견적 요청 과정을 더 빠르게 정리합니다." },
  { icon: ClipboardCheck, title: "공정 관리", body: "진행 순서를 놓치지 않고 확인할 수 있습니다." },
  { icon: Camera, title: "실시간 보고", body: "사진과 함께 진행 상황을 확인합니다." },
  { icon: ShieldCheck, title: "하자 관리", body: "마지막 단계까지 더 명확하게 관리합니다." },
];

const flowItems = [
  "상담으로 현재 상황을 정리합니다",
  "조건에 맞는 시공 흐름으로 연결합니다",
  "진행 중에는 공정과 보고를 계속 확인합니다",
  "완료 이후까지 한 번에 이어집니다",
];

const ownerItems = [
  "값비싼 광고비용 이제 맛있는 식사와 여행경비에 사용하세요",
  "현장에 있어도 스마트폰 알림 하나로 실시간 고객견적요청 확인",
  "현장에서 커피 한 모금 마시며 스마트폰 터치 한 번으로 견적확인 및 참여신청",
  "스마트폰만 있으면 실시간 고객 계약체결 알림 및 스케줄 자동관리 공정표 발송",
];

function SectionHeading({
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
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600">{eyebrow}</p>
      <h2 className="mt-4 text-balance text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-pretty text-base leading-relaxed text-slate-600 sm:text-lg">{description}</p>
      ) : null}
    </div>
  );
}

export default function ExperiencePage() {
  return (
    <main className="bg-white">
      <section className="relative overflow-hidden bg-[linear-gradient(135deg,#0f172a_0%,#1e293b_45%,#312e81_100%)] px-4 pb-24 pt-20 text-white sm:pb-28 sm:pt-24">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_-10%,rgba(99,102,241,0.35),transparent)]"
          aria-hidden
        />
        <div className="relative mx-auto max-w-6xl">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-sm font-semibold text-white/90 transition hover:text-white">
              ← 셀인코치
            </Link>
          </div>

          <div className="mx-auto mt-14 max-w-3xl text-center sm:mt-20">
            <span className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold tracking-[0.18em] text-indigo-100 backdrop-blur">
              무료 상담 랜딩
            </span>
            <h1 className="mt-6 text-balance text-[2.2rem] font-bold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl">
              현장 안 가도
              <br />
              인테리어 끝납니다
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-slate-200 sm:text-xl">
              견적, 공정, 시공관리까지 셀코 하나로 해결.
              <br className="hidden sm:block" />
              복잡한 확인 대신, 지금 바로 상담부터 시작하세요.
            </p>
            <a
              href={KAKAO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex h-14 min-w-[220px] items-center justify-center gap-2 rounded-2xl bg-[#FEE500] px-8 text-base font-bold text-slate-900 shadow-[0_16px_40px_rgba(0,0,0,0.28)] transition hover:scale-[1.02] hover:bg-[#ffe75c]"
            >
              무료 상담 받기
              <ArrowRight className="h-5 w-5" aria-hidden />
            </a>

            <div className="mt-12 flex justify-center">
              <div className="w-full max-w-[22rem] rounded-[2.5rem] bg-slate-950 p-3 shadow-[0_28px_90px_rgba(0,0,0,0.38)] ring-1 ring-white/10">
                <div className="rounded-[2rem] bg-[linear-gradient(180deg,#101828_0%,#162033_100%)] p-4">
                  <div className="mx-auto mb-4 h-1.5 w-20 rounded-full bg-white/20" />
                  <div className="flex items-center justify-between text-[11px] font-semibold text-slate-300">
                    <span>9:00</span>
                    <span>5G 100%</span>
                  </div>

                  <div className="mt-5 text-center">
                    <p className="text-2xl font-bold tracking-tight text-white">셀인코치</p>
                    <p className="mt-1 text-xs text-slate-400">공정 자동 알림 서비스</p>
                  </div>

                  <div className="mt-6 space-y-3 text-left">
                    {[
                      "오전 9시 고객님의 목공사 공정이 시작되었습니다.",
                      "오후 3시 고객님의 목공사 오늘 공정이 마무리 되어갑니다.",
                      "오후 6시 고객님의 오늘 공정인 목공사 (몰딩, 걸레받이, 가벽) 시공이 완료되었습니다.",
                    ].map((item, index) => (
                      <div
                        key={item}
                        className="rounded-[1.4rem] border border-black/5 bg-[#FEE500] px-4 py-3 text-slate-900 shadow-[0_10px_28px_rgba(0,0,0,0.14)]"
                      >
                        <div className="flex items-start gap-3">
                          <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-slate-900 text-white">
                            {index === 2 ? (
                              <Camera className="h-5 w-5" aria-hidden />
                            ) : (
                              <MessageCircle className="h-5 w-5" aria-hidden />
                            )}
                          </div>
                          <div className="min-w-0">
                            <p className="text-[11px] font-bold tracking-[0.08em] text-slate-700">띵동 - 셀인코치</p>
                            <p className="mt-1 text-sm font-semibold leading-relaxed">{item}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 rounded-[1.4rem] border border-white/10 bg-white/5 p-4 text-left">
                    <p className="text-xs font-semibold tracking-[0.12em] text-indigo-100">현장 사진 도착</p>
                    <div className="mt-3 grid grid-cols-3 gap-2">
                      {["현장사진 1", "현장사진 2", "현장사진 3"].map((item) => (
                        <div
                          key={item}
                          className="flex aspect-square items-end rounded-2xl bg-[linear-gradient(135deg,#4338ca_0%,#1e293b_100%)] p-2 text-[11px] font-semibold text-white/90"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>

                  <p className="mt-5 text-pretty text-center text-sm leading-relaxed text-slate-200">
                    셀인코치 고객님이 인테리어 공정 시
                    <br />
                    매일 자동으로 받게 될 알림 서비스입니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Before"
            title="시작도 전에 지치는 이유가 있습니다"
            description="고객이 가장 많이 불편해하는 지점만 먼저 정리했습니다."
          />
          <div className="mt-14 grid gap-4 sm:grid-cols-2">
            {beforeItems.map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm ring-1 ring-slate-900/[0.03] sm:p-7"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-900 text-white">
                  <MessageCircle className="h-5 w-5" aria-hidden />
                </div>
                <p className="mt-5 text-lg font-semibold leading-relaxed text-slate-900">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-4 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Selco"
            title="셀코를 쓰면, 복잡한 과정이 짧아집니다"
            description="설명이 아니라 체감으로 느껴지는 변화만 담았습니다."
          />
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {solutionItems.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-white bg-white p-6 shadow-[0_12px_32px_rgba(15,23,42,0.06)] ring-1 ring-slate-900/[0.03]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-600 text-white shadow-md">
                  <item.icon className="h-6 w-6" aria-hidden />
                </div>
                <h3 className="mt-5 text-lg font-bold tracking-tight text-slate-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrow="Compare" title="전과 후가 분명해야 상담도 빨라집니다" />
          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-rose-100 bg-rose-50/80 p-7 ring-1 ring-rose-200/50 sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-rose-500">Before</p>
              <h3 className="mt-4 text-2xl font-bold tracking-tight text-slate-900">전화, 방문, 스트레스</h3>
              <ul className="mt-6 space-y-4 text-sm leading-relaxed text-slate-700 sm:text-base">
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-rose-400" aria-hidden />
                  여러 업체 연락과 일정 조율이 반복됩니다.
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-rose-400" aria-hidden />
                  진행 상황을 몰라 불안과 확인 스트레스가 쌓입니다.
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-rose-400" aria-hidden />
                  현장 방문이 잦아질수록 시간 손해가 커집니다.
                </li>
              </ul>
            </div>

            <div className="rounded-[2rem] border border-indigo-100 bg-gradient-to-br from-indigo-600 to-violet-700 p-7 text-white shadow-[0_18px_48px_rgba(79,70,229,0.18)] sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-indigo-100">After</p>
              <h3 className="mt-4 text-2xl font-bold tracking-tight">앱처럼 확인하고, 간편하게 관리</h3>
              <ul className="mt-6 space-y-4 text-sm leading-relaxed text-indigo-50 sm:text-base">
                <li className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-white" aria-hidden />
                  진행 상황을 한눈에 확인합니다.
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-white" aria-hidden />
                  견적과 공정을 더 단순하게 관리합니다.
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-white" aria-hidden />
                  끝날 때까지 더 안정감 있게 진행합니다.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-4 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Core Features"
            title="핵심 기능만 보면 왜 편한지 바로 이해됩니다"
            description="길게 설명하지 않아도 되는 기능만 남겼습니다."
          />
          <div className="mt-14 grid gap-4 sm:grid-cols-2">
            {featureItems.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-white bg-white p-6 shadow-sm ring-1 ring-slate-900/[0.03] sm:p-7"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-slate-900 text-white">
                    <item.icon className="h-6 w-6" aria-hidden />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold tracking-tight text-slate-900">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">{item.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <SectionHeading
            eyebrow="Trust"
            title="이미 이런 흐름으로 진행된다고 생각하면 됩니다"
            description="상담 이후 무엇이 이어지는지 미리 보이면 상담 버튼도 더 쉽게 누를 수 있습니다."
          />
          <div className="mt-14 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_18px_48px_rgba(15,23,42,0.06)] ring-1 ring-slate-900/[0.03] sm:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              {flowItems.map((item, index) => (
                <div
                  key={item}
                  className="rounded-3xl border border-slate-200 bg-slate-50 p-5 sm:p-6"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-indigo-600 text-sm font-bold text-white">
                    {index + 1}
                  </div>
                  <p className="mt-4 text-base font-semibold leading-relaxed text-slate-900">{item}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 rounded-3xl bg-slate-900 px-6 py-7 text-white">
              <div className="flex items-start gap-3">
                <BadgeCheck className="mt-0.5 h-6 w-6 shrink-0 text-emerald-300" aria-hidden />
                <p className="text-lg font-semibold leading-relaxed sm:text-xl">
                  상담만 시작해도, 비용과 진행 방식이 얼마나 달라질지 바로 감이 옵니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-4 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="For Partners"
            title="전문시공업체 사장님도 셀인코치 하나로 더 편해집니다"
            description="영업에 쏟던 시간을 줄이고, 현장에만 더 편하게 집중할 수 있습니다."
          />
          <div className="mt-14 grid gap-4 sm:grid-cols-2">
            {ownerItems.map((item, index) => (
              <div
                key={item}
                className="rounded-3xl border border-white bg-white p-6 shadow-sm ring-1 ring-slate-900/[0.03] sm:p-7"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-600 text-white shadow-md">
                  {index % 2 === 0 ? (
                    <Smartphone className="h-5 w-5" aria-hidden />
                  ) : (
                    <Building2 className="h-5 w-5" aria-hidden />
                  )}
                </div>
                <p className="mt-5 text-lg font-semibold leading-relaxed text-slate-900">{item}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-[2rem] bg-slate-900 px-6 py-8 text-center text-white shadow-[0_18px_48px_rgba(15,23,42,0.16)] sm:px-8">
            <p className="text-xl font-bold leading-relaxed tracking-tight sm:text-2xl">
              이제 편하게 셀인코치 하나로
              <br className="sm:hidden" /> 현장에만 편하게 집중하세요
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[linear-gradient(135deg,#1e1b4b_0%,#4338ca_100%)] px-4 py-20 text-white sm:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-indigo-200">CTA</p>
          <h2 className="mt-4 text-balance text-3xl font-bold leading-tight tracking-tight sm:text-5xl">
            지금 바로 시작하세요
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-relaxed text-indigo-100 sm:text-xl">
            상담만 받아도 인테리어 비용이 달라집니다.
            <br className="hidden sm:block" />
            고민만 길어지기 전에 먼저 물어보세요.
          </p>
          <a
            href={KAKAO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex h-14 min-w-[240px] items-center justify-center gap-2 rounded-2xl bg-[#FEE500] px-8 text-base font-bold text-slate-900 shadow-[0_18px_48px_rgba(0,0,0,0.28)] transition hover:scale-[1.02] hover:bg-[#ffe75c]"
          >
            카카오톡 상담하기
            <ArrowRight className="h-5 w-5" aria-hidden />
          </a>
        </div>
      </section>
    </main>
  );
}
