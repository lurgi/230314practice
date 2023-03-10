import type { NextPage } from "next";
import Layout from "../components/layout";

const Upload: NextPage = () => {
  return (
    <Layout title="Upload">
      <div className="px-4 py-16">
        <div className="mt-3 border-b-2 pb-3">
          <label className="text-gray-900" htmlFor="price">
            Name
          </label>
          <div className="flex items-center relative mt-1">
            <input
              className="w-full focus:ring-orange-500 focus:border-orange-500 shadow-md rounded-sm "
              id="price"
              type="text"
              placeholder="Name Here..."
            />
          </div>
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
              className="w-full  focus:ring-orange-500 focus:border-orange-500 hover:ring-orange-500 shadow-md rounded-sm px-7"
              id="price"
              type="text"
              placeholder="0.00"
            />
            <div>
              <span className="absolute right-3 top-2 text-gray-500">USD</span>
            </div>
          </div>
        </div>
        <div className="mt-3 border-b-2 pb-3 text-gray-900 ">
          <label>Description</label>
          <div className="mt-3">
            <textarea
              className="w-full focus:ring-orange-500 rounded-md shadow-md hover:border-orange-500 focus:border-orange-500"
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
    </Layout>
  );
};

export default Upload;
