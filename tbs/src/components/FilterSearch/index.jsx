import React, { useState } from "react";
import { debounce } from 'lodash';
import axios from "axios";
import { API_LOCAL } from "src/config/API";

export default function FilterSearch() {
  const [searchTerm, setSearchTerm] = useState('');

  const performSearch = async () => {
    try {
      const response = await axios({
        method: "post",
        url: `${API_LOCAL}/api/users/search/assignJob`,
        params: {
          searchTC: searchTerm
        }
      })
      console.log('Searching for:', searchTerm);
    } catch (error) {
      console.error('Error during API call:', error);
    }
  };

  const debouncedSearch = debounce(performSearch, 300); 

  const handleInputChange = (event) => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);
    debouncedSearch(newSearchTerm);
  };

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
              onChange={handleInputChange}
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
      </div>
    </>
  );
}
