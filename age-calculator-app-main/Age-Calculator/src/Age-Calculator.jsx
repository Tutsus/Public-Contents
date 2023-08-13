export default function Calculator() {
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
                            <input className="p-4 px-5 mx-3 md:mx-7 w-24 sm:w-28 md:w-36 h-18 rounded-xl text-xl sm:text-3xl font-bold border border-black-400 outline-purple-900 " type="number" placeholder="DD" name="DD" id="Day" min="1" max="31"/>
                            <input className="p-4 px-5 mx-3 md:mx-7 w-24 sm:w-28 md:w-36 h-18 rounded-xl text-xl sm:text-3xl font-bold border border-black-400 outline-purple-900 " type="number" placeholder="MM" name="MM" id="Month" min="1" max="12"/>
                            <input className="p-4 px-5 mx-3 md:mx-7 w-24 sm:w-28 md:w-36 h-18 rounded-xl text-xl sm:text-3xl font-bold border border-black-400 outline-purple-900 " type="number" placeholder="YYYY" name="YYYY" id="Year" min="1900"/>
                        </div>
                        <div className="flex justify-center items-center my-8 mt-12 md:mt-4 md:my-0">
                            <div className="border w-10/12 md:px-80"></div>
                            <img className="p-4 rounded-full w-16 cursor-pointer bg-purple-700 hover:bg-black-950 transition-all ease-in-out duration-500" src="icon-arrow.svg" alt="Arrow-Icon" />
                            <div className="md:hidden border w-10/12 md:px-80"></div>
                        </div>
                        <div className="ml-8">
                            <h1 className=" font-bold text-6xl sm:text-8xl md:text-9xl">--years</h1>
                            <h1 className=" font-bold text-6xl sm:text-8xl md:text-9xl">--months</h1>
                            <h1 className=" font-bold text-6xl sm:text-8xl md:text-9xl">--days</h1>
                        </div>
                </div>
            </nav>
        </>
    )
}