export default function Page() {
  return (
    <div className="mt-[100px] flex flex-col items-center">
      <h1>Test Page</h1>
      <button className="border-gray-100 border-[1px] p-2 rounded mt-2">
        <a href="/some-error">Navigate to page with some error</a>
      </button>
    </div>
  );
}
