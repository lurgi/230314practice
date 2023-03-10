import Link from "next/link";

export default function chay() {
  return (
    <div className="py-10 divide-y-2">
      {[...Array(6)].map((_, i) => (
        <Link key={i} href="chats/123">
          <div className="flex py-3  px-6 cursor-pointer pb-3  items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-slate-300" />
            <div>
              <p className="text-sm font-medium text-gray-700">Steve Jebs</p>
              <p className="text-xs font-medium text-gray-500">
                View profile &rarr;
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
