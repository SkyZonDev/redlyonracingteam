import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const ogSize = {
  width: 1200,
  height: 630,
};

export const ogContentType = "image/png";

export function renderOgImage({
  kicker,
  title,
  subtitle,
}: {
  kicker: string;
  title: string;
  subtitle: string;
}) {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "#0a0a0a",
        padding: "72px 80px",
        color: "#ffffff",
      }}
    >
      <div
        style={{
          display: "flex",
          width: 72,
          height: 8,
          backgroundColor: "#c41e3a",
        }}
      />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            display: "flex",
            fontSize: 18,
            letterSpacing: "0.28em",
            color: "#888888",
            textTransform: "uppercase",
          }}
        >
          {kicker}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 24,
            fontSize: 72,
            fontWeight: 700,
            lineHeight: 0.92,
            letterSpacing: "-0.04em",
            textTransform: "uppercase",
            maxWidth: 980,
          }}
        >
          {title}
          <span style={{ color: "#c41e3a" }}>.</span>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 22,
            color: "#9a9a9a",
            maxWidth: 720,
          }}
        >
          {subtitle}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 16,
            letterSpacing: "0.22em",
            color: "#c41e3a",
          }}
        >
          {site.nomCourt}
        </div>
      </div>
    </div>,
    { ...ogSize },
  );
}
