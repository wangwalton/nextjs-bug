"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LayoutLinks() {
  const router = useRouter();
  const [loading, setLoading] = useState<number | null>(null);
  console.log("LayoutLinks");

  return (
    <div style={{ padding: "1rem", borderBottom: "1px solid #ccc" }}>
      {Array.from({ length: 10 }, (_, i) => (
        <button
          key={i}
          onClick={async () => {
            setLoading(i);
            await router.push(`/?index=${i + 1}`);
            setLoading(null);
          }}
          style={{ marginRight: 8 }}
        >
          {loading === i ? "⏳" : `Link ${i + 1}`}
        </button>
      ))}
    </div>
  );
}
