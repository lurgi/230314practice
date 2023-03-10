export default function write() {
  return (
    <div className="py-16 px-8">
      <textarea
        className="w-full rounded-md shadow-md hover:border-orange-500 focus:border-orange-500"
        rows={5}
        placeholder="write here..."
      />
      <div className="flex items-center justify-center">
        <button className="p-2 mt-4 rounded-md bg-orange-500 w-3/4 text-gray-50 hover:bg-orange-600 hover:ring-2 ring-offset-1 ring-orange-600">
          Submit
        </button>
      </div>
    </div>
  );
}
