import { Label } from "../ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../ui/select"

export function DropdownHour() {
    const generateOptions = () => {
        const options = [];

        for (let i = 0; i <= 24; i++) {
            const formattedValue = i < 10 ? `0${i}` : `${i}`;
            options.push(<SelectItem key={i} value={i}>{formattedValue}</SelectItem>);
        }

        return options;
    };

    return (
        <div className="flex flex-col gap-y-3">
            <Select>
                <SelectTrigger id="userCategory" className="text-[#7D7D7D] flex w-full rounded-md border border-input bg-background px-3 h-[47px] text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                    <SelectValue placeholder="00" />
                </SelectTrigger>
                <SelectContent position="popper" className="z-[999] overflow-y-auto max-h-40">
                    {generateOptions()}
                </SelectContent>
            </Select>
        </div>
    );
}

export function DropdownMinute() {
    const generateOptions = () => {
        const options = [];

        for (let i = 0; i <= 60; i++) {
            const formattedValue = i < 10 ? `0${i}` : `${i}`;
            options.push(<SelectItem key={i} value={i}>{formattedValue}</SelectItem>);
        }

        return options;
    };

    return (
        <div className="flex flex-col gap-y-3">
            <Select>
                <SelectTrigger id="userCategory" className="text-[#7D7D7D] flex w-full rounded-md border border-input bg-background px-3 h-[47px] text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                    <SelectValue placeholder="00" />
                </SelectTrigger>
                <SelectContent position="popper" className="z-[999] overflow-y-auto max-h-40">
                    {generateOptions()}
                </SelectContent>
            </Select>
        </div>
    );
}