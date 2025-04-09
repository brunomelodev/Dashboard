export default function BasicForm() {
  return (
    <>
      <section className="p-6 xl:max-w-7xl xl:mx-auto">
        <section className="mb-6 flex items-center justify-between">
          <div className="flex items-center justify-start">
            <span className="inline-flex justify-center items-center w-12 h-12 rounded-full bg-white text-black mr-3">
              <svg
                viewBox="0 0 24 24"
                width="24"
                height="24"
                className="inline-block"
              >
                <path
                  fill="currentColor"
                  d="M13,7.5H18V9.5H13V7.5M13,14.5H18V16.5H13V14.5M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3H19M19,19V5H5V19H19M11,6V11H6V6H11M10,10V7H7V10H10M11,13V18H6V13H11M10,17V14H7V17H10Z"
                ></path>
              </svg>
            </span>
            <h1 className="text-3xl leading-tight">Forms example</h1>
          </div>
          <a
            className="inline-flex justify-center items-center whitespace-nowrap focus:outline-none transition-colors focus:ring-2 ring-gray-300 duration-150 border cursor-pointer rounded-full border-gray-800 bg-gray-800 text-white hover:bg-gray-700 text-sm px-3 py-1"
            href="https://justboil.me/tailwind-admin-templates/vue-dashboard/"
          >
            <span className="inline-flex justify-center items-center w-6 h-6">
              <svg
                viewBox="0 0 24 24"
                width="16"
                height="16"
                className="inline-block"
              >
                <path
                  fill="currentColor"
                  d="M20,8H4V6H20M20,18H4V12H20M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z"
                ></path>
              </svg>
            </span>
            <span className="px-1">Buy dashboard</span>
          </a>
        </section>

        <form className="rounded-2xl flex-col bg-white flex">
          <div className="flex-1 p-6">
            <div className="mb-6">
              <label className="block font-bold mb-2">Grouped with icons</label>
              <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                <div className="relative">
                  <input
                    type="text"
                    className="px-3 py-2 focus:outline-none focus:ring-2 ring-blue-300 border-gray-700 rounded-sm w-full placeholder-gray-400 h-12 border bg-white pl-10"
                  />
                  <span className="inline-flex justify-center items-center w-10 h-12 absolute top-0 left-0 z-10 pointer-events-none text-gray-500">
                    <svg
                      viewBox="0 0 24 24"
                      width="16"
                      height="16"
                      className="inline-block"
                    >
                      <path
                        fill="currentColor"
                        d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z"
                      ></path>
                    </svg>
                  </span>
                </div>
                <div className="relative">
                  <input
                    type="email"
                    className="px-3 py-2 focus:outline-none focus:ring-2 ring-blue-300 border-gray-700 rounded-sm w-full placeholder-gray-400 h-12 border bg-white pl-10"
                  />
                  <span className="inline-flex justify-center items-center w-10 h-12 absolute top-0 left-0 z-10 pointer-events-none text-gray-500">
                    <svg
                      viewBox="0 0 24 24"
                      width="16"
                      height="16"
                      className="inline-block"
                    >
                      <path
                        fill="currentColor"
                        d="M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4M17,17H7V15H17M17,13H7V11H17M20,9H17V6H20"
                      ></path>
                    </svg>
                  </span>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <label className="block font-bold mb-2">With help line</label>
              <div className="relative">
                <input
                  placeholder="Your phone number"
                  type="tel"
                  className="px-3 py-2 focus:outline-none focus:ring-2 ring-blue-300 border-gray-700 rounded-sm w-full placeholder-gray-400 h-12 border bg-white"
                />
              </div>
              <div className="text-xs text-gray-500 mt-1">
                Do not enter the leading zero
              </div>
            </div>

            <div className="mb-6">
              <label className="block font-bold mb-2">Dropdown</label>
              <div className="relative">
                <select className="px-3 py-2 focus:outline-none focus:ring-2 ring-blue-300 border-gray-700 rounded-sm w-full placeholder-gray-400 h-12 border bg-white">
                  <option value="business">Business development</option>
                  <option value="marketing">Marketing</option>
                  <option value="sales">Sales</option>
                </select>
              </div>
            </div>

            <hr className="my-6 -mx-6 border-t border-gray-100" />

            <div className="mb-6">
              <label className="block font-bold mb-2">Question</label>
              <div className="relative">
                <textarea
                  className="px-3 py-2 focus:outline-none focus:ring-2 ring-blue-300 border-gray-700 rounded-sm w-full placeholder-gray-400 h-24 border bg-white"
                  placeholder="Explain how we can help you"
                ></textarea>
              </div>
              <div className="text-xs text-gray-500 mt-1">
                Your question. Max 255 characters
              </div>
            </div>
          </div>

          <footer className="p-6">
            <div className="flex items-center justify-start flex-wrap gap-3">
              <button
                className="inline-flex justify-center items-center whitespace-nowrap focus:outline-none transition-colors focus:ring-2 ring-blue-300 duration-150 border cursor-pointer rounded-sm border-blue-600 bg-blue-600 text-white hover:bg-blue-700 hover:border-blue-700 py-2 px-3"
                type="submit"
              >
                <span className="px-2">Submit</span>
              </button>
              <button
                className="inline-flex justify-center items-center whitespace-nowrap focus:outline-none transition-colors focus:ring-2 ring-blue-300 duration-150 border cursor-pointer rounded-sm border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white py-2 px-3"
                type="reset"
              >
                <span className="px-2">Reset</span>
              </button>
            </div>
          </footer>
        </form>
      </section>

      <section className="p-6 xl:max-w-7xl xl:mx-auto">
        <div className="rounded-2xl flex-col bg-white flex">
          <div className="flex-1 p-6">
            {/* Checkbox */}
            <div className="mb-6 last:mb-0">
              <label className="block font-bold mb-2">Checkbox</label>
              <div className="flex justify-start flex-wrap -mb-3 gap-6">
                <label className="flex items-center mb-3">
                  <input
                    type="checkbox"
                    name="sample-checkbox"
                    value="lorem"
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <span className="ml-2 text-gray-700">Lorem</span>
                </label>
                <label className="flex items-center mb-3">
                  <input
                    type="checkbox"
                    name="sample-checkbox"
                    value="ipsum"
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <span className="ml-2 text-gray-700">Ipsum</span>
                </label>
                <label className="flex items-center mb-3">
                  <input
                    type="checkbox"
                    name="sample-checkbox"
                    value="dolore"
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <span className="ml-2 text-gray-700">Dolore</span>
                </label>
              </div>
            </div>

            <hr className="my-6 -mx-6 border-t border-gray-100" />

            {/* Radio */}
            <div className="mb-6 last:mb-0">
              <label className="block font-bold mb-2">Radio</label>
              <div className="flex justify-start flex-wrap -mb-3 gap-6">
                <label className="flex items-center mb-3">
                  <input
                    type="radio"
                    name="sample-radio"
                    value="one"
                    className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                  />
                  <span className="ml-2 text-gray-700">One</span>
                </label>
                <label className="flex items-center mb-3">
                  <input
                    type="radio"
                    name="sample-radio"
                    value="two"
                    className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                  />
                  <span className="ml-2 text-gray-700">Two</span>
                </label>
              </div>
            </div>

            <hr className="my-6 -mx-6 border-t border-gray-100" />

            {/* Switch */}
            <div className="mb-6 last:mb-0">
              <label className="block font-bold mb-2">Switch</label>
              <div className="flex justify-start flex-wrap -mb-3 gap-6">
                <label className="relative inline-flex items-center cursor-pointer mb-3">
                  <input
                    type="checkbox"
                    name="sample-switch"
                    value="one"
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-500 rounded-full peer-checked:bg-blue-600 transition-colors duration-300"></div>
                  <div className="absolute left-0.5 top-0.5 w-5 h-5 bg-white border border-gray-300 rounded-full peer-checked:translate-x-full transition-transform duration-300"></div>
                  <span className="ml-3 text-sm text-gray-700">One</span>
                </label>
                <label className="relative inline-flex items-center cursor-pointer mb-3">
                  <input
                    type="checkbox"
                    name="sample-switch"
                    value="two"
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-500 rounded-full peer-checked:bg-blue-600 transition-colors duration-300"></div>
                  <div className="absolute left-0.5 top-0.5 w-5 h-5 bg-white border border-gray-300 rounded-full peer-checked:translate-x-full transition-transform duration-300"></div>
                  <span className="ml-3 text-sm text-gray-700">Two</span>
                </label>
              </div>
            </div>

            <hr className="my-6 -mx-6 border-t border-gray-100" />

            {/* File Upload */}
            <div className="flex items-stretch justify-start relative">
              <label className="inline-flex items-center gap-2 cursor-pointer px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors text-sm font-medium">
                <svg
                  viewBox="0 0 24 24"
                  width="16"
                  height="16"
                  className="inline-block fill-white"
                >
                  <path d="M9,16V10H5L12,3L19,10H15V16H9M5,20V18H19V20H5Z"></path>
                </svg>
                Upload
                <input
                  type="file"
                  className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                />
              </label>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
