import { useState } from "react";

export function DropdownEndMinute({ dataEndMinute }) {
  const [selectedValue, setSelectedValue] = useState("");
  const generateOptions = () => {
    const options = [];
    for (let i = 0; i <= 60; i++) {
      const formattedValue = i < 10 ? `0${i}` : `${i}`;
      options.push(<option value={formattedValue} key={i}>{formattedValue}</option>);
    }

    return options;
  };

  const handleChange = (event) => {
    const newValue = event.target.value;
    setSelectedValue(newValue);
    dataEndMinute(newValue);
  };

  return (
    <div className="flex flex-col gap-y-3">
      <select
        value={selectedValue}
        onChange={handleChange}
        className="text-[#7D7D7D] flex w-full rounded-md border border-input bg-background px-3 h-[47px] text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {generateOptions()}
      </select>
    </div>
  );
}
