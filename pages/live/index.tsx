import Link from "next/link";

export default function Live() {
  return (
    <div className="py-8 px-4 space-y-3">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="border-b-2 pb-2">
          <div className="bg-slate-500 rounded-md aspect-video mb-2" />
          <span className="text-gray-700">Live Video</span>
        </div>
      ))}
      <Link href="live/upload">
        <button className="fixed bottom-16 right-10 bg-orange-400 text-white rounded-full p-4 hover:bg-orange-500 hover:cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"
            />
          </svg>
        </button>
      </Link>
    </div>
  );
}
