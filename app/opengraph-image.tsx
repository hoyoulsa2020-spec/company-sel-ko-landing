import { readFile } from "node:fs/promises";
import { join } from "node:path";

import { ImageResponse } from "next/og";

export const runtime = "nodejs";

export const alt = "셀코";
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
          justifyContent: "flex-start",
          paddingTop: 120,
          background: "linear-gradient(135deg, #1a2336 0%, #111827 100%)",
          color: "white",
        }}
      >
        <div
          style={{
            fontSize: 76,
            fontWeight: 700,
            fontFamily: "Noto Sans KR",
            letterSpacing: "-0.04em",
          }}
        >
          셀코
        </div>
        <div
          style={{
            marginTop: 32,
            height: 68,
            width: 68,
            borderRadius: 20,
            background: "#ffffff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 12px 40px rgba(15, 23, 42, 0.24)",
          }}
        >
          <div
            style={{
              height: 30,
              width: 30,
              borderRadius: 10,
              background: "#4f46e5",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                height: 10,
                width: 10,
                borderRadius: 9999,
                background: "#ffffff",
              }}
            />
          </div>
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
