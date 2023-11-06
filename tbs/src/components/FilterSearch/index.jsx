import React from "react";

export default function FilterSearch() {
  return (
    <>
      <div className="border-2 border-gray-200 rounded-lg p-6">
        <div
          class="flex items-center mx-auto w-full mb-5"
          x-data="{ search: '' }"
        >
          <div class="w-full">
            <input
              type="search"
              class="w-full px-6 text-gray-800 bg-[#F8F8F8] py-4 rounded-xl focus:outline-none"
              placeholder="Search..."
              x-model="search"
            />
          </div>
          <div>
            <button
              type="submit"
              class="flex items-center justify-center w-12 h-12 text-white rounded-r-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <path
                  d="M6.5 0C8.22391 0 9.87721 0.684819 11.0962 1.90381C12.3152 3.12279 13 4.77609 13 6.5C13 8.11 12.41 9.59 11.44 10.73L11.71 11H12.5L17.5 16L16 17.5L11 12.5V11.71L10.73 11.44C9.59 12.41 8.11 13 6.5 13C4.77609 13 3.12279 12.3152 1.90381 11.0962C0.684819 9.87721 0 8.22391 0 6.5C0 4.77609 0.684819 3.12279 1.90381 1.90381C3.12279 0.684819 4.77609 0 6.5 0ZM6.5 2C4 2 2 4 2 6.5C2 9 4 11 6.5 11C9 11 11 9 11 6.5C11 4 9 2 6.5 2Z"
                  fill="#7D7D7D"
                />
              </svg>
            </button>
          </div>
        </div>
        {/* <div>
          <p className="font-bold mb-2">Filter By: </p>
          <div className="dropdown">
            <label tabIndex={0} className="btn m-1 rounded-full border border-primary text-primary">
              Port{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="9"
                height="6"
                viewBox="0 0 9 6"
                fill="none"
              >
                <path
                  d="M4.245 5.66L0 1.41475L1.41567 0L4.245 2.8305L7.07433 0L8.49 1.41475L4.245 5.66Z"
                  fill="#064B82"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
            </ul>
          </div>
        </div> */}
      </div>
    </>
  );
}
