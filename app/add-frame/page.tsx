import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Add a frame",
  description: "Turn a photo into a framed, matted print.",
  robots: { index: false, follow: false },
};

// Self-contained tool lives in /public/tools/add-frame.html so it runs in its
// own document — fully isolated from the site's theme (light-mode only) and
// rendered full-screen above the site chrome.
export default function AddFramePage() {
  return (
    <iframe
      src="/tools/add-frame.html"
      title="Add a frame"
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        border: 0,
        zIndex: 2147483000,
        background: "#efeee9",
      }}
    />
  );
}
