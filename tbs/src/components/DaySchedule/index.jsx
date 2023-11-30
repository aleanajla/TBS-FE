import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export default function DaySchedule() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalItems = 14;
  const itemsPerPage = 7;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const dispatch = useDispatch();

  const generateDates = () => {
    const today = new Date();
    const twoWeeksAhead = new Date();
    twoWeeksAhead.setDate(today.getDate() + 14);

    const dateArray = [];
    let currentDate = new Date(today);

    while (currentDate <= twoWeeksAhead) {
      dateArray.push(new Date(currentDate));
      currentDate.setDate(currentDate.getDate() + 1);
    }
    return dateArray;
  };

  const dates = generateDates();

  const visibleDates = dates.slice(
    currentIndex * itemsPerPage,
    (currentIndex + 1) * itemsPerPage
  );

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : totalPages - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < totalPages - 1 ? prevIndex + 1 : 0
    );
  };

  const handleClick = (date) => {
    dispatch({ type: 'SELECTED_DATE', payload: {date} });
  };

  return (
    <>
      <div className="flex justify-between">
        <button
          className="rounded-full w-[45px] h-[45px] flex items-center justify-center shadow-lg"
          onClick={handlePrev}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="15"
            viewBox="0 0 20 15"
            fill="none"
          >
            <path
              d="M18.8379 6.82306L1.52237 7.31804"
              stroke="#064B82"
              stroke-width="1.36757"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M8.08594 13.5151L1.52418 7.31806L7.72122 0.756302"
              stroke="#064B82"
              stroke-width="1.36757"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>

        {visibleDates.map((date, index) => {
          return (
            <button
              key={index}
              className="w-[151px] h-[64px] shadow-sm rounded-lg border-[1px] border-[#BDBDBD]"
              onClick={()=>handleClick(date.toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }))}
            >
              <p className="font-medium text-sm text-[#7D7D7D]">
                {date.toLocaleDateString(undefined, { day: "numeric" })}
              </p>
              <p className="font-medium text-sm text-[#7D7D7D]">
                {date.toLocaleDateString(undefined, { weekday: "long" })}
              </p>
            </button>
          );
        })}
        <button
          className="rounded-full w-[45px] h-[45px] flex items-center justify-center shadow-lg"
          onClick={handleNext}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="19"
            height="15"
            viewBox="0 0 19 15"
            fill="none"
          >
            <path
              d="M0.740234 7.07062L18.0628 7.07062"
              stroke="#064B82"
              stroke-width="1.36757"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M11.6797 0.688568L18.0617 7.07058L11.6797 13.4526"
              stroke="#064B82"
              stroke-width="1.36757"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
    </>
  );
}
