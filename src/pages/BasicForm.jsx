export default function BasicForm() {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-4 m-4">
      <div className="px-6 py-5">
        <h3 className="text-base font-medium text-gray-800">Basic Form</h3>
      </div>

      <div className="p-4 border-t border-gray-100 sm:p-6">
        <form className="space-y-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <input
                type="text"
                placeholder="Name"
                className="h-11 w-full rounded-lg border px-4 py-2.5 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 bg-white text-gray-800 border-gray-300 focus:border-blue-400 focus:ring-blue-200"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Email address"
                className="h-11 w-full rounded-lg border px-4 py-2.5 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 bg-white text-gray-800 border-gray-300 focus:border-blue-400 focus:ring-blue-200"
              />
            </div>
            <div className="col-span-full">
              <input
                type="password"
                placeholder="Password"
                className="h-11 w-full rounded-lg border px-4 py-2.5 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 bg-white text-gray-800 border-gray-300 focus:border-blue-400 focus:ring-blue-200"
              />
            </div>
            <div className="col-span-full">
              <input
                type="password"
                placeholder="Confirm Password"
                className="h-11 w-full rounded-lg border px-4 py-2.5 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 bg-white text-gray-800 border-gray-300 focus:border-blue-400 focus:ring-blue-200"
              />
            </div>
            <div className="col-span-full">
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-lg transition w-full px-4 py-3 text-sm bg-blue-500 text-white hover:bg-blue-600 disabled:bg-blue-300"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
