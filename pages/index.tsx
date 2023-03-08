export default function Home() {
  return (
    <div className="bg-slate-400 dark py-20 px-6 grid sm:place-content-center gap-10 sm:grid-cols-2 lg:grid-cols-3">
      {/* first div */}
      <div className="bg-white dark:bg-black dark:border-white dark:text-white p-10 rounded-2xl shadow-xl flex flex-col justify-between">
        <span className="font-semibold text-3xl">Select Item</span>
        <ul>
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="flex justify-between my-2 dark:text-gray-50"
            >
              <span className="text-gray-500 dark:text-gray-50 ">
                Grey Chair
              </span>
              <span>$19</span>
            </div>
          ))}
        </ul>
        <div className="flex justify-between mt-2 pt-2 border-t-2 border-dashed">
          <span>Total</span>
          <span>$10</span>
        </div>
        <div className="flex justify-center">
          <button className="mt-5 bg-blue-500 text-white p-3 text-center dark:border dark:bg-gray-600 dark:hover:bg-teal-900 rounded-2xl w-3/4 mx-auto hover:bg-teal-500 active:bg-yellow-500 ">
            Checkout
          </button>
        </div>
      </div>

      {/* second div */}
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden group">
        <div className="portrait:bg-blue-500 p-6 pb-14 lg:py-24 landscape:bg-teal-400">
          <span className="text-white text-2xl">Profile</span>
        </div>
        <div className="rounded-3xl relative -top-5 bg-white p-6">
          <div className="items-end flex justify-between relative -top-16">
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-500">Order</span>
              <span className="font-medium">340</span>
            </div>
            <div className="h-24 w-24 bg-red-400 rounded-full group-hover:bg-red-300" />
            <div className="flex flex-col items-center ">
              <span className="text-sm text-gray-500">Order</span>
              <span className="font-medium">340</span>
            </div>
          </div>
          <div className="relative flex flex-col items-center -mt-10 -mb-5">
            <span className="text-lg font-medium">Tony Molloy</span>
            <span className="text-sm text-gray-500">USA</span>
          </div>
        </div>
      </div>

      {/* third div */}
      <div className="bg-white p-10 rounded-2xl shadow-xl sm:col-span-2 lg:col-span-1">
        <div className="flex justify-between items-center mb-5">
          <span>⬅️</span>
          <div className="space-x-3">
            <span>✨4.0</span>
            <span className="shadow-xl p-2 rounded-md">❤️</span>
          </div>
        </div>
        <div className="bg-zinc-400 h-60 mb-5" />
        <div className="flex flex-col">
          <span className="font-medium text-xl">Swoon Lounge</span>
          <span className="text-xs text-gray-500">Chair</span>
          <div className="mt-3 mb-5 flex justify-between items-center">
            <div className="space-x-2">
              <button className="w-5 h-5 rounded-full bg-yellow-500 focus:ring-2 ring-offset-2 ring-yellow-500 transition"></button>
              <button className="w-5 h-5 rounded-full bg-indigo-500 focus:ring-2 ring-offset-2 ring-indigo-500 transition"></button>
              <button className="w-5 h-5 rounded-full bg-teal-500 focus:ring-2 ring-offset-2 ring-teal-500 transition"></button>
            </div>
            <div className="flex items-center space-x-5">
              <button className="rounded-lg p-1.5 bg-blue-200 flex justify-center items-center aspect-square w-8 text-xl text-gray-500">
                -
              </button>
              <span>1</span>
              <button className="rounded-lg p-1.5 bg-blue-200 flex justify-center items-center aspect-square w-8 text-xl text-gray-500">
                +
              </button>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-medium text-2xl">$450</span>
            <button className="bg-blue-500 py-2 px-10 text-center text-xs text-white rounded-lg">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
