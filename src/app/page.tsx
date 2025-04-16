import { Suspense } from "react";

export default function PageWrapper({
  searchParams,
}: {
  searchParams: { index?: string };
}) {
  return (
    <Suspense fallback={<div>⏳ Suspense Fallback...</div>}>
      <Page searchParams={searchParams} />
    </Suspense>
  );
}

async function Page({ searchParams }: { searchParams: { index?: string } }) {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  return <h1>Page for index: {searchParams.index ?? "none"}</h1>;
}
