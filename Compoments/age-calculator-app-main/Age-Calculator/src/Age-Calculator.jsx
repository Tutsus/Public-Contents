import { useState } from "react";
import moment from 'moment';
export default function Calculator() {

    const [day, setDay] = useState(false);
    const [month, setMonth] = useState(false);
    const [year, setYear] = useState(false);
    const [invalidDay, setInvalidDay] = useState(true);
    const [invalidMonth, setInvalidMonth] = useState(true);
    const [invalidYear, setInvalidYear] = useState(true);
    const [outputDay, setOutputDay] = useState("--");  
    const [outputMonth, setOutputMonth] = useState("--"); 
    const [outputYear, setOutputYear] = useState("--");

    function handleClick() {

        if (day < 1 || day > 31) {
            setInvalidDay(invalidDay);
        if (invalidDay) {
            setInvalidDay('Must be a valid day');
        } else {    
            setInvalidDay('This field is required');}
        } else {
            setInvalidDay(!invalidDay);
        }

        if (month < 1 || month > 12) {
            setInvalidMonth(invalidMonth);
        if (invalidMonth) {
            setInvalidMonth('Must be a valid Month');
        } else {
            setInvalidMonth('This field is required');}
        } else {
            setInvalidMonth(!invalidMonth);
        }

        if (year < 1900 || year > 2020) {
            setInvalidYear(invalidYear);
        if (invalidYear) {
            setInvalidYear('Must be a valid Year');
        } else {
            setInvalidYear('This field is required');}
        } else {
            setInvalidYear(!invalidYear);
        }

        let current_day = parseInt(moment().format('Do'));
        let current_month = parseInt(moment().format('M'));
        let current_year = parseInt(moment().format('YYYY'));
        
        let date = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];

        if (day > current_day) {
            current_day = current_day + date[month - 1];
            current_month--;
        }
        if (month > current_month) {
            current_year--;
            current_month = current_month + 12;
        }
        
        if (current_day - day === current_day) {
            toString(setOutputDay(calculateDay));
        }
        if (current_month - month === current_month) {
            toString(setOutputMonth(calculateMonth));
        }
        if (current_year - year === current_year) {
            toString(setOutputYear('--'));
        }

        let calculateDay = current_day - day;
        let calculateMonth = current_month - month;
        let calculateyear = current_year - year;

        setOutputDay(calculateDay);
        setOutputMonth(calculateMonth);
        setOutputYear(calculateyear);
    }

    function handleValueDay(event) {
        const inputValue = parseInt(event.target.value);
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
                        {invalidDay && (
                            <div className=" text-red-500">
                                {invalidDay}
                            </div>
                        )}
                        <p className="mx-3 md:mx-7 w-24 sm:w-28 md:w-36 font-medium text-sm">Month</p>
                        {invalidMonth && (
                            <div className=" text-red-500">
                                {invalidMonth}
                            </div>
                        )}
                        <p className="mx-3 md:mx-7 w-24 sm:w-28 md:w-36 font-medium text-sm">Year</p>
                        {invalidYear && (
                            <div className=" text-red-500">
                                {invalidYear}
                            </div>
                        )}
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
                        <div className="flex justify-center items-center my-8 mt-12 md:mt-4 md:my-0">
                            <div className="border w-10/12 md:px-80"></div>
                            <img onClick={handleClick} className="p-4 rounded-full w-16 cursor-pointer bg-purple-700 hover:bg-black-950 transition-all ease-in-out duration-500" src="icon-arrow.svg" alt="Arrow-Icon" />
                            <div className="md:hidden border w-10/12 md:px-80"></div>
                        </div>
                        <div className="ml-8">
                            <h1 className="font-bold text-6xl sm:text-8xl md:text-9xl">{outputYear}years</h1>
                            <h1 className="font-bold text-6xl sm:text-8xl md:text-9xl">{outputMonth}months</h1>
                            <h1 className="font-bold text-6xl sm:text-8xl md:text-9xl">{outputDay}days</h1>
                        </div>
                </div>
            </nav>
        </>
    )
}