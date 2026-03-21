import type { Metadata } from "next";
import { ExperienceLanding } from "@/components/ExperienceLanding";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "셀인코치 | 인테리어, 이렇게까지 편해집니다",
  description:
    "복잡한 과정 없이 셀인코치 하나로. 공정 안내·사진 보고·자동 관리까지. 지금 sel-ko.co.kr에서 시작하세요.",
  alternates: { canonical: "/experience" },
  openGraph: {
    title: "셀인코치 | 인테리어, 이렇게까지 편해집니다",
    description:
      "인테리어가 이렇게까지 편해집니다. 실시간 안내·진행 보고·끝까지 관리. 웹에서 먼저 이용하세요.",
    url: `${SITE_URL}/experience`,
    type: "website",
  },
};

export default function ExperiencePage() {
  return <ExperienceLanding />;
}
