import { ImageResponse } from "next/og";

export const alt = "Cottaway Private Limited — Software with intent";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#111513",
          color: "#f5f6f2",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 76px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18, fontSize: 24, letterSpacing: 5 }}>
          <div style={{ display: "flex", flexWrap: "wrap", width: 34, gap: 4 }}>
            {[0, 1, 2, 3].map((item) => <div key={item} style={{ width: 15, height: 15, background: item === 3 ? "#b8e86a" : "#f5f6f2" }} />)}
          </div>
          COTTAWAY
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ color: "#b8e86a", fontSize: 20, letterSpacing: 4 }}>SOFTWARE WITH INTENT</div>
          <div style={{ fontSize: 76, fontWeight: 700, lineHeight: 1.02, letterSpacing: -4 }}>Technology that keeps businesses moving.</div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", color: "#9b9f99", fontSize: 18 }}>
          <span>GYMATRIX / BUSINESS SYSTEMS / DIGITAL PRODUCTS</span>
          <span>cottaway.com</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
