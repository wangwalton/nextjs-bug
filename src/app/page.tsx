import { Suspense, use } from "react";

export default function Page({
  searchParams,
}: {
  searchParams: { index?: string };
}) {
  // sleep 500ms with react.use()
  use(new Promise((resolve) => setTimeout(resolve, 500)));
  return <PageComponent searchParams={searchParams} />;
}

async function PageComponent({
  searchParams,
}: {
  searchParams: { index?: string };
}) {
  console.log("PageComponent");
  await new Promise((resolve) => setTimeout(resolve, 500));
  return <h1>Page for index: {searchParams.index ?? "none"}</h1>;
}
