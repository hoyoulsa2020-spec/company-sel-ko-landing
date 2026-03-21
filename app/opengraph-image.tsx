import { readFile } from "node:fs/promises";
import { join } from "node:path";

import { ImageResponse } from "next/og";

export const runtime = "nodejs";

export const alt = "셀인코치";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const fontData = await readFile(
    join(process.cwd(), "node_modules/@fontsource/noto-sans-kr/files/noto-sans-kr-korean-700-normal.woff"),
  );

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #1e1b4b 0%, #4338ca 100%)",
          color: "white",
        }}
      >
        <div style={{ fontSize: 96, fontWeight: 700, fontFamily: "Noto Sans KR" }}>셀인코치</div>
        <div style={{ fontSize: 32, marginTop: 28, opacity: 0.92, fontFamily: "Noto Sans KR" }}>
          인테리어 시공 연결 서비스
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Noto Sans KR",
          data: fontData,
          style: "normal",
          weight: 700,
        },
      ],
    },
  );
}
