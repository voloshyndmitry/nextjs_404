import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <button className="border-gray-100 border-[1px] p-2 rounded mt-1">
        <a href="/some-error">Navigate to some error page</a>
      </button>
      <button className="border-gray-100 border-[1px] p-2 rounded mt-1">
        <a href="/test">Navigate to the test page</a>
      </button>
      <button className="border-gray-100 border-[1px] p-2 rounded mt-1">
        <a href="/test/test">Navigate to the not existed page</a>
      </button>
    </div>
  );
}
