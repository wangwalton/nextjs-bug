import { use } from "react";

export default function Page({ params }: { params: { i: string } }) {
  // sleep 500ms with react.use()
  use(new Promise((resolve) => setTimeout(resolve, 500)));
  return <h1>Page for index: {params.i}</h1>;
}
