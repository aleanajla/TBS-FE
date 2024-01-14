import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export default function DayTimeslot() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const totalItems = 14;
    const itemsPerPage = 7;
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const dispatch = useDispatch();
    const [selectedDate, setSelectedDate] = useState(0)

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

    const handleClick = (date, index) => {
        dispatch({ type: 'SELECTED_DATE', payload: { date } });
        setSelectedDate(index);
    };

    return (
        <>
            <div className="border-gray-400 rounded-lg flex flex-row gap-2 items-center font-medium text-gray-500">
                {visibleDates.map((date, index) => {
                    return (
                        <button
                            key={index}
                            className={`w-[161px] h-[84px] text-left pl-3 shadow-sm rounded-lg border-[1px] border-[#BDBDBD] bg-${selectedDate === index ? 'primary' : 'white'}`}
                            onClick={() => handleClick(date.toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }), index)}
                        >
                            <p className={`font-medium text-sm text-${selectedDate === index ? 'white' : '[#7D7D7D]'}`}>
                                {date.toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" })}
                            </p>
                            <p className={`font-medium text-base text-${selectedDate === index ? 'white' : '[#8D8D8D]'}`}>
                                {date.toLocaleDateString(undefined, { weekday: "long" })}
                            </p>
                        </button>
                    );
                })}
            </div>
        </>
    );
}
