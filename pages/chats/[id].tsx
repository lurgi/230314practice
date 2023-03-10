import type { NextPage } from "next";

const ChatDetail: NextPage = () => {
  return (
    <div className="py-10 px-8 space-y-4">
      <div className="flex space-x-2">
        <div className="w-10 h-10 rounded-full bg-gray-600" />
        <div className="border-2 rounded-md py-1 px-2 w-1/2 text-gray-600">
          <p>Hi how much are you selling them for?</p>
        </div>
      </div>
      <div className="flex flex-row-reverse space-x-2 space-x-reverse">
        <div className="w-10 h-10 rounded-full bg-gray-600" />
        <div className="border-2 rounded-md py-1 px-2 w-1/2 text-gray-600">
          <p>I want ￦20,000</p>
        </div>
      </div>
      <div className="flex space-x-2">
        <div className="w-10 h-10 rounded-full bg-gray-600" />
        <div className="border-2 rounded-md py-1 px-2 w-1/2 text-gray-600">
          <p>미쳤어</p>
        </div>
      </div>
      <div className="fixed bottom-2.5 inset-x-0">
        <div className="w-full relative  flex items-center px-5">
          <input
            type="text"
            className="w-full rounded-full border-gray-500 border-2 pr-12 focus:border-orange-500 shadow-md"
          />
          <div className="absolute right-7 bg-orange-500 rounded-full w-7 h-7 flex justify-center items-start hover:ring-2 ring-offset-2 ring-orange-600 hover:bg-orange-600">
            <span className="font-semibold text-gray-100">&rarr;</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatDetail;
