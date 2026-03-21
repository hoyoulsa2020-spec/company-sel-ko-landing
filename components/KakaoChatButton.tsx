"use client";

import { MessageCircle } from "lucide-react";

const KAKAO_OPEN_CHAT_URL = "https://open.kakao.com/o/sKQBlymi";

export function KakaoChatButton() {
  return (
    <a
      href={KAKAO_OPEN_CHAT_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="카카오톡 상담하기"
      className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-4 z-[60] flex h-16 w-16 items-center justify-center rounded-full bg-[#FEE500] text-[#191919] shadow-[0_8px_32px_rgba(0,0,0,0.24)] ring-1 ring-black/[0.08] transition-transform duration-200 hover:scale-110 active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#191919] sm:bottom-6 sm:right-6 sm:h-[3.75rem] sm:w-[3.75rem]"
    >
      <MessageCircle className="h-8 w-8" strokeWidth={2.25} aria-hidden />
    </a>
  );
}
