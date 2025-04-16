import Link from "next/link";
import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html>
      <body>
        <div style={{ padding: "1rem", borderBottom: "1px solid #ccc" }}>
          {Array.from({ length: 10 }, (_, i) => (
            <Link
              key={i}
              href={`/?index=${i + 1}`}
              style={{ marginRight: 8 }}
              prefetch={false} // disable prefetch to see loading effect clearly
            >
              Link {i + 1}
            </Link>
          ))}
        </div>
        <div style={{ padding: "1rem" }}>{children}</div>
      </body>
    </html>
  );
}
