import Link from "next/link";
import LayoutLinks from "./layoutLinks";
import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  console.log("RootLayout");
  return (
    <html>
      <body>
        {/* <LayoutLinks /> */}
        <Lol />
        <div style={{ padding: "1rem" }}>{children}</div>
      </body>
    </html>
  );
}

const Lol = () => (
  <div style={{ padding: "1rem", borderBottom: "1px solid #ccc" }}>
    {Array.from({ length: 10 }, (_, i) => (
      <Link key={i} href={`/${i + 1}`} style={{ marginRight: 8 }}>
        Link {i + 1}
      </Link>
    ))}
  </div>
);
