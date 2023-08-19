import { useState } from "react";
import moment from 'moment';
export default function Calculator() {

    const [day, setDay] = useState(false);
    const [month, setMonth] = useState(false);
    const [year, setYear] = useState(false);
    const [outputDay, setOutputDay] = useState("--");  
    const [outputMonth, setOutputMonth] = useState("--"); 
    const [outputYear, setOutputYear] = useState("--");
    const [invalidDay, setInvalidDay] = useState("");
    const [invalidMonth, setInvalidMonth] = useState("");
    const [invalidYear, setInvalidYear] = useState("");

    function handleClick() {

        let current_day = parseInt(moment().format("Do"));
        let current_month = parseInt(moment().format("M"));
        let current_year = parseInt(moment().format("YYYY"));
        
        let date = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];

        if (day > current_day) {
            current_day = current_day + date[month - 1];
            current_month--;
        }

        if (month > current_month) {
            current_year--;
            current_month = current_month + 12;
        }

        let calculateDay = current_day - day;
        let calculateMonth = current_month - month;
        let calculateYear = current_year - year;

        if (isNaN(!calculateDay)) {
            setInvalidDay("This field is required");
        } else if (day === false) {
            setInvalidDay("This field is required");
        } else if (day >= 1 && day <= 31) {
            setInvalidDay("");
        } else if (day < 1 || day > 31) {
            setInvalidDay("Must be a valid day");
        } else {
            setInvalidDay("This field is required")
        }

        if (isNaN(!calculateMonth)) {
            setInvalidMonth("This field is required");
        } else if (month === false) {
            setInvalidMonth("This field is required");
        } else if (month >= 1 && month <= 12) {
            setInvalidMonth("");
        } else if (month < 1 || month > 12) {
            setInvalidMonth("Must be a valid month");
        } else {
            setInvalidMonth("This field is required")
        }

        if (isNaN(!calculateYear)) {
            setInvalidYear("This field is required");
        } else if (year === false) {
            setInvalidYear("This field is required");
        } else if (year >= 1 && year <= current_year) {
            setInvalidYear("");
        } else if (year < 1 || year >= current_year){
            setInvalidYear("Must be in the past");
        } else {
            setInvalidYear("This field is required")
        }

        if (day >= 1 && day <= 31 && month >= 1 && month <= 12 && year >= 1 && year <= current_year) {
            setOutputDay(calculateDay);
            setOutputMonth(calculateMonth);
            setOutputYear(calculateYear);
        } else {
            setOutputDay("--");
            setOutputMonth("--");
            setOutputYear("--");
        }
    }

    function handleValueDay(event) {
        let inputValue = parseInt(event.target.value);
        setDay(inputValue);
    }

    function handleValueMonth(event) {
        const inputValue = parseInt(event.target.value);
        setMonth(inputValue);
    }

    function handleValueYear(event) {
        const inputValue = parseInt(event.target.value);
        setYear(inputValue);
    }

    return (
        <>
            <nav className="max-w-screen h-screen bg-black-100 flex justify-center items-center">
                <div className="bg-white rounded-2xl rounded-br-5xl py-6 px-6 sm:py-10 sm:px-8">
                    <div className="flex items-center uppercase mb-1 text-black-400 tracking-widest">
                        <p className="mx-3 md:mx-7 w-24 sm:w-28 md:w-36 font-medium text-sm">Day</p>
                        <p className="mx-3 md:mx-7 w-24 sm:w-28 md:w-36 font-medium text-sm">Month</p>
                        <p className="mx-3 md:mx-7 w-24 sm:w-28 md:w-36 font-medium text-sm">Year</p>
                    </div>
                        <div className="flex">
                            <input className="p-4 px-5 mx-3 md:mx-7 w-24 sm:w-28 md:w-36 h-18 rounded-xl text-xl sm:text-3xl font-bold border border-black-400 outline-purple-900 " 
                                type="number" 
                                placeholder="DD" 
                                name="DD" 
                                id="Day" 
                                min="1" 
                                max="31"
                                onChange={handleValueDay}
                                value={day}  
                            />
                            <input className="p-4 px-5 mx-3 md:mx-7 w-24 sm:w-28 md:w-36 h-18 rounded-xl text-xl sm:text-3xl font-bold border border-black-400 outline-purple-900 " 
                                type="number" 
                                placeholder="MM" 
                                name="MM" 
                                id="Month" 
                                min="1" 
                                max="12"
                                onChange={handleValueMonth}
                                value={month}
                            />
                            <input className="p-4 px-5 mx-3 md:mx-7 w-24 sm:w-28 md:w-36 h-18 rounded-xl text-xl sm:text-3xl font-bold border border-black-400 outline-purple-900 " 
                                type="number" 
                                placeholder="YYYY" 
                                name="YYYY" 
                                id="Year" 
                                min="1900"
                                onChange={handleValueYear}
                                value={year}
                            />
                        </div>
                        <div className="block relative top-0 left-0">
                            {invalidDay && (
                                <div className=" md:mx-7 sm:w-28 md:w-36 font-medium text-sm text-red-500">
                                    {invalidDay}
                                </div>
                            )}
                            {invalidMonth && (
                                <div className=" md:mx-7 sm:w-28 md:w-36 font-medium text-sm text-red-500">
                                    {invalidMonth}
                                </div>
                            )}
                            {invalidYear && (
                                <div className="md:mx-7 sm:w-28 md:w-36 font-medium text-sm text-red-500">
                                    {invalidYear}
                                </div>
                            )}
                        </div>
                        <div className="flex justify-center items-center my-8 mt-12 md:mt-4 md:my-0">
                            <div className="border w-10/12 md:px-80"></div>
                            <img onClick={handleClick} className="p-4 rounded-full w-16 cursor-pointer bg-purple-700 hover:bg-black-950 transition-all ease-in-out duration-500" src="icon-arrow.svg" alt="Arrow-Icon" />
                            <div className="md:hidden border w-10/12 md:px-80"></div>
                        </div>
                        <div className="ml-8">
                            <h1 className="font-bold text-6xl sm:text-8xl md:text-9xl">
                                {<span className="text-purple-700">
                                    {isNaN(outputYear) ? "--" : outputYear}
                                </span>}years
                            </h1>
                            <h1 className="font-bold text-6xl sm:text-8xl md:text-9xl">
                                {<span className="text-purple-700">
                                    {isNaN(outputMonth) ? "--" : outputMonth}
                                </span>}months
                            </h1>
                            <h1 className="font-bold text-6xl sm:text-8xl md:text-9xl">
                                {<span className="text-purple-700">
                                    {isNaN(outputDay) ? "--" : outputDay}
                                </span>}days
                            </h1>
                        </div>
                </div>
            </nav>
        </>
    )
}