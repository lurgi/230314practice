import type { NextPage } from "next";

const Upload: NextPage = () => {
  return (
    <div className="px-4 py-16">
      <div className=" hover:cursor-pointer hover:text-orange-500 hover:border-orange-500 flex w-full justify-center items-center border-dashed border-2 h-48 rounded-md ">
        <label className="flex flex-col items-center">
          <svg
            className="h-12 w-12"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 48 48"
            aria-hidden="true"
          >
            <path
              d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <input className="hidden" type="file" />
        </label>
      </div>
      <div className="mt-3 border-b-2 pb-3">
        <label className="text-gray-900" htmlFor="price">
          Price
        </label>
        <div className="flex items-center relative mt-1">
          <div>
            <span className="absolute top-2 left-3 text-gray-500">$</span>
          </div>
          <input
            className="w-full  focus:border-orange-500 border-gray-500 shadow-md rounded-sm hover:border-orange-500 px-7"
            id="price"
            type="text"
            placeholder="0.00"
          />
          <div>
            <span className="absolute right-3 top-2 text-gray-500">USD</span>
          </div>
        </div>
      </div>
      <div className="mt-3 border-b-2 pb-3 text-gray-900">
        <label>Description</label>
        <div className="mt-3">
          <textarea
            className="w-full rounded-md shadow-md hover:border-orange-500 focus:border-orange-500"
            rows={4}
          />
        </div>
      </div>
      <div className="flex items-center justify-center">
        <button className="p-2 mt-2 rounded-md bg-orange-500 w-3/4 text-gray-50 hover:bg-orange-600 hover:ring-2 ring-offset-1 ring-orange-600">
          Upload product
        </button>
      </div>
    </div>
  );
};

export default Upload;
