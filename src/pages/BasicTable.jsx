function BasicTable() {
  return (
    <div className="p-4 border-t border-gray-100 sm:p-6">
      <div className="space-y-6">
        <div className="rounded-2xl border border-gray-200 bg-white pt-4">
          <div className="flex flex-col gap-2 px-5 mb-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                Latest Transactions
              </h3>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <form>
                <div className="relative">
                  <button
                    type="submit"
                    className="absolute left-4 top-1/2 -translate-y-1/2"
                    aria-label="Search"
                  >
                    <svg
                      className="fill-gray-500"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M3.04199 9.37381C3.04199 5.87712 5.87735 3.04218 9.37533 3.04218C12.8733 3.04218 15.7087 5.87712 15.7087 9.37381C15.7087 12.8705 12.8733 15.7055 9.37533 15.7055C5.87735 15.7055 3.04199 12.8705 3.04199 9.37381ZM9.37533 1.54218C5.04926 1.54218 1.54199 5.04835 1.54199 9.37381C1.54199 13.6993 5.04926 17.2055 9.37533 17.2055C11.2676 17.2055 13.0032 16.5346 14.3572 15.4178L17.1773 18.2381C17.4702 18.531 17.945 18.5311 18.2379 18.2382C18.5308 17.9453 18.5309 17.4704 18.238 17.1775L15.4182 14.3575C16.5367 13.0035 17.2087 11.2671 17.2087 9.37381C17.2087 5.04835 13.7014 1.54218 9.37533 1.54218Z"
                      />
                    </svg>
                  </button>
                  <input
                    type="text"
                    placeholder="Search..."
                    className="h-[42px] w-full rounded-lg border border-gray-300 bg-transparent py-2.5 pl-[42px] pr-4 text-sm text-gray-800 placeholder:text-gray-400 focus:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-200 xl:w-[300px]"
                  />
                </div>
              </form>
            </div>
          </div>

          <div className="overflow-hidden">
            <div className="max-w-full px-5 overflow-x-auto sm:px-6">
              <table className="min-w-full">
                <thead className="border-y border-gray-100">
                  <tr>
                    <th className="py-3 text-start text-sm font-normal text-gray-500">
                      Name
                    </th>
                    <th className="px-4 py-3 text-start text-sm font-normal text-gray-500">
                      Date
                    </th>
                    <th className="px-4 py-3 text-start text-sm font-normal text-gray-500">
                      Price
                    </th>
                    <th className="px-4 py-3 text-start text-sm font-normal text-gray-500">
                      Category
                    </th>
                    <th className="px-4 py-3 text-start text-sm font-normal text-gray-500">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-3">
                        <img
                          src="https://placehold.co/32x32"
                          alt="brand"
                          width="32"
                          height="32"
                          className="w-8 h-8"
                        />
                        <span className="block text-sm font-medium text-gray-700">
                          Bought PYPL
                        </span>
                      </div>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-700">
                      Nov 23, 01:00 PM
                    </td>
                    <td className="px-4 py-4 text-sm text-gray-700">
                      $2,567.88
                    </td>
                    <td className="px-4 py-4 text-sm text-gray-700">Finance</td>
                    <td className="px-4 py-4 text-sm text-gray-700">
                      <span className="inline-flex items-center gap-1 rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-600">
                        Success
                      </span>
                    </td>
                  </tr>

                  {/* Repita a estrutura acima para os outros registros */}
                </tbody>
              </table>
            </div>
          </div>

          <div className="px-6 py-4 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <button
                disabled
                className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-3 text-sm text-gray-700 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 opacity-50 cursor-not-allowed"
              >
                <svg
                  className="fill-current"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2.58301 9.99868C2.58272 10.1909 2.65588 10.3833 2.80249 10.53L7.79915 15.5301C8.09194 15.8231 8.56682 15.8233 8.85981 15.5305C9.15281 15.2377 9.15297 14.7629 8.86018 14.4699L5.14009 10.7472L16.6675 10.7472C17.0817 10.7472 17.4175 10.4114 17.4175 9.99715C17.4175 9.58294 17.0817 9.24715 16.6675 9.24715L5.14554 9.24715L8.86017 5.53016C9.15297 5.23717 9.15282 4.7623 8.85983 4.4695C8.56684 4.1767 8.09197 4.17685 7.79917 4.46984L2.84167 9.43049C2.68321 9.568 2.58301 9.77087 2.58301 9.99715C2.58301 9.99766 2.58301 9.99817 2.58301 9.99868Z"
                  />
                </svg>
                <span className="hidden sm:inline">Previous</span>
              </button>

              <ul className="hidden items-center gap-0.5 sm:flex">
                <li>
                  <button className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 text-white text-sm font-medium">
                    1
                  </button>
                </li>
                <li>
                  <button className="flex h-10 w-10 items-center justify-center rounded-lg text-gray-700 text-sm font-medium hover:bg-blue-100 hover:text-blue-600">
                    2
                  </button>
                </li>
                <li>
                  <button className="flex h-10 w-10 items-center justify-center rounded-lg text-gray-700 text-sm font-medium hover:bg-blue-100 hover:text-blue-600">
                    3
                  </button>
                </li>
              </ul>

              <button className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-3 text-sm text-gray-700 ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                <span className="hidden sm:inline">Next</span>
                <svg
                  className="fill-current"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M17.4175 9.9986C17.4178 10.1909 17.3446 10.3832 17.198 10.53L12.2013 15.5301C11.9085 15.8231 11.4337 15.8233 11.1407 15.5305C10.8477 15.2377 10.8475 14.7629 11.1403 14.4699L14.8604 10.7472L3.33301 10.7472C2.91879 10.7472 2.58301 10.4114 2.58301 9.99715C2.58301 9.58294 2.91879 9.24715 3.33301 9.24715L14.8549 9.24715L11.1403 5.53016C10.8475 5.23717 10.8477 4.7623 11.1407 4.4695C11.4336 4.1767 11.9085 4.17685 12.2013 4.46984L17.1588 9.43049C17.3173 9.568 17.4175 9.77087 17.4175 9.99715C17.4175 9.99763 17.4175 9.99812 17.4175 9.9986Z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default BasicTable;
