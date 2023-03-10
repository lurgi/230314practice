export default function Edit() {
  return (
    <div className="py-8 px-4 space-y-2">
      <div className="flex items-center">
        <div className="w-14 h-14 bg-slate-400 rounded-full mr-3" />
        <label htmlFor="picture">
          <div className="border-2 px-2 py-1 shadow-sm text-gray-700 rounded-md cursor-pointer hover:border-orange-500 hover:ring-orange-500 transition-colors">
            Change
          </div>
          <input id="picture" type="file" hidden />
        </label>
      </div>
      <div className="space-y-1">
        <label className="text-sm font-medium text-gray-700">
          Email address
        </label>
        <input
          type="email"
          className="w-full px-3 mt-1 rounded-md shadow-md border-2 border-gray-400 focus:border-orange-500 focus:ring-orange-500 focus:placeholder-gray-400"
          placeholder="Put your Email address..."
          required
        />
      </div>
      <div className="space-y-1">
        <label className="text-sm font-medium text-gray-700">
          Phone Number
        </label>
        <div className="flex rounded-md shadow-md">
          <span className="flex items-center px-3 rounded-l-md border-2 border-r-0 text-gray-500 bg-gray-50 border-gray-400">
            +82
          </span>
          <input
            className="appearance-none w-full px-3 rounded-r-md shadow-md border-2 border-gray-400 focus:border-orange-500 focus:ring-orange-500 focus:placeholder-gray-400"
            type="number"
            required
          />
        </div>
      </div>
      <div className="flex justify-center">
        <button className="text-gray-600 border-2 p-2 mx-36 shadow-md bg-gray-50 rounded-md mt-3 border-gray-500 hover:border-orange-400 hover:outline-none hover:text-orange-500">
          Update Profile
        </button>
      </div>
    </div>
  );
}
