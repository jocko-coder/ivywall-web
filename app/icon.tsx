import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          borderRadius: 8,
          background: "linear-gradient(135deg, #C4540A 0%, #8C1F15 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Georgia, serif",
          fontSize: 18,
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
