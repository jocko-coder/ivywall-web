import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 180,
          height: 180,
          borderRadius: 40,
          background: "linear-gradient(135deg, #C4540A 0%, #8C1F15 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Georgia, serif",
          fontSize: 110,
          fontWeight: 700,
          fontStyle: "italic",
          color: "#F5C77E",
          letterSpacing: "-0.04em",
        }}
      >
        I
      </div>
    ),
    { ...size }
  );
}
