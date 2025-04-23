import { notFound } from "next/navigation";

export default function Page() {
  if (true) {
    notFound();
  }

  return <div>Some Error Page</div>;
}
