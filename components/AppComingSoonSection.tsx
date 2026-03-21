"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 14 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-64px" },
  transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const },
};

/** Apple logo — monochrome for App Store badge */
function IconApple({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden fill="currentColor">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}

/** Google Play mark — simplified multi-color triangle */
function IconGooglePlay({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden>
      <path fill="#00D9FF" d="M1.7 1.3c-.3.3-.5.7-.5 1.1v19.2c0 .4.2.8.5 1.1l11-11-11-10.4z" />
      <path fill="#FFCE00" d="M12.7 12 1.7 22.7c.4.4 1 .6 1.6.3l12.8-7.4-3.4-3.3z" />
      <path fill="#00F076" d="M24 10.9 16.1 6 12.7 12l3.4 3.3L24 13.1c.8-.5.8-1.7 0-2.2z" />
      <path fill="#FF3A44" d="M1.7 1.3 12.7 12 16.1 6 3.3 1c-.6-.3-1.2-.1-1.6.3z" />
    </svg>
  );
}

function AppStoreBadgeDisabled() {
  return (
    <div className="flex w-full flex-col items-center gap-2 sm:max-w-[220px]">
      <button
        type="button"
        disabled
        aria-disabled="true"
        className="group flex w-full min-h-[52px] cursor-not-allowed items-center gap-3 rounded-2xl bg-black px-4 py-3 text-left text-white opacity-[0.72] shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] ring-1 ring-black/20 transition hover:opacity-[0.78] sm:min-h-[56px] sm:px-5"
      >
        <IconApple className="h-8 w-8 shrink-0 opacity-90 sm:h-9 sm:w-9" />
        <div className="min-w-0 flex-1 leading-none">
          <p className="text-[10px] font-medium uppercase tracking-wide text-white/75 sm:text-[11px]">Download on the</p>
          <p className="mt-0.5 text-[17px] font-semibold tracking-tight sm:text-lg">App Store</p>
        </div>
      </button>
      <span className="inline-flex items-center rounded-full border border-slate-200/80 bg-slate-50 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-slate-500">
        출시 예정
      </span>
    </div>
  );
}

function GooglePlayBadgeDisabled() {
  return (
    <div className="flex w-full flex-col items-center gap-2 sm:max-w-[220px]">
      <button
        type="button"
        disabled
        aria-disabled="true"
        className="group flex w-full min-h-[52px] cursor-not-allowed items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-left text-slate-900 opacity-[0.72] shadow-sm ring-1 ring-slate-900/[0.04] transition hover:opacity-[0.78] sm:min-h-[56px] sm:px-5"
      >
        <IconGooglePlay className="h-8 w-8 shrink-0 sm:h-9 sm:w-9" />
        <div className="min-w-0 flex-1 leading-none">
          <p className="text-[10px] font-medium uppercase tracking-wide text-slate-500 sm:text-[11px]">GET IT ON</p>
          <p className="mt-0.5 text-[17px] font-semibold tracking-tight text-slate-900 sm:text-lg">Google Play</p>
        </div>
      </button>
      <span className="inline-flex items-center rounded-full border border-slate-200/80 bg-slate-50 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-slate-500">
        출시 예정
      </span>
    </div>
  );
}

export function AppComingSoonSection() {
  return (
    <section id="app-soon" className="relative border-b border-slate-200/70 bg-gradient-to-b from-indigo-50/40 via-white to-slate-50 py-16 sm:py-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-200/60 to-transparent" />

      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <motion.div
          {...fadeUp}
          className="relative overflow-hidden rounded-[1.75rem] border border-indigo-200/50 bg-gradient-to-br from-white via-indigo-50/30 to-violet-50/40 p-6 shadow-[0_24px_60px_-12px_rgba(79,70,229,0.18)] ring-1 ring-indigo-100/80 sm:p-10"
        >
          <div
            className="pointer-events-none absolute -right-20 top-0 h-48 w-48 rounded-full bg-gradient-to-br from-indigo-400/25 to-violet-400/20 blur-3xl"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -left-16 bottom-0 h-40 w-40 rounded-full bg-violet-400/15 blur-3xl"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-80"
            aria-hidden
          />

          <div className="relative">
            <div className="flex flex-col items-center text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-white/90 px-3 py-1.5 text-xs font-semibold text-indigo-800 shadow-sm ring-1 ring-slate-900/[0.04] backdrop-blur-sm">
                <Sparkles className="h-3.5 w-3.5 text-indigo-600" aria-hidden />
                Mobile app
              </div>

              <h2 className="mt-5 text-balance text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                곧, 앱으로 더 편리해집니다
              </h2>

              <p className="mx-auto mt-4 max-w-lg text-pretty text-[15px] leading-relaxed text-slate-600 sm:text-lg">
                지금은 <strong className="font-semibold text-slate-800">웹(sel-ko.co.kr)</strong>에서 가입하고
                이용하실 수 있습니다. iOS·Android 앱은 준비 중이며, 스토어에 올라가는 대로 이 페이지에서도
                안내드리겠습니다.
              </p>
            </div>

            <div className="mx-auto mt-10 max-w-md">
              <p className="mb-4 text-center text-xs font-medium text-slate-500 sm:text-sm">
                앱 스토어 링크는 출시 후 공개됩니다 · 현재는 미리보기입니다
              </p>
              <div className="flex flex-col items-stretch justify-center gap-6 sm:flex-row sm:items-start sm:gap-8">
                <AppStoreBadgeDisabled />
                <GooglePlayBadgeDisabled />
              </div>
            </div>

            <p className="mt-8 text-center text-xs text-slate-400">
              버튼은 실제 스토어 연결이 아니며, 곧 출시 예정 상태를 나타냅니다.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
