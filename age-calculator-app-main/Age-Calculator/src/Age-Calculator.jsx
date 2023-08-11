export default function Calculator() {
    return (
        <>
            <nav className="max-w-screen h-screen bg-black-100 flex justify-center items-center">
                <div className="bg-white grid grid-rows-2">
                    <div className="inline-flex">
                        <p className="mx-5 w-36">DD</p>
                        <p className="mx-5 w-36">MM</p>
                        <p className="mx-5 w-36">YYYY</p>
                    </div>
                        <div className="flex">
                            <input className="p-4 px-5 mx-5 w-36 h-18 rounded-md text-3xl font-bold border border-black-400 outline-purple-900" type="number" name="DD" id="Day" min="1" max="31"/>
                            <input className="p-4 px-5 mx-5 w-36 h-18 rounded-md text-3xl font-bold border border-black-400 outline-purple-900" type="number" name="MM" id="Month" min="1" max="12"/>
                            <input className="p-4 px-5 mx-5 w-36 h-18 rounded-md text-3xl font-bold border border-black-400 outline-purple-900" type="number" name="YYYY" id="Year" min="1900"/>
                        </div>
                        <div className="">
                            <div className="border-t-2 "></div>
                            <img className="bg-purple-700 p-2 rounded-full" src="icon-arrow.svg" alt="Arrow-Icon" />
                        </div>
                        <div>
                            <h1>--years</h1>
                            <h1>--months</h1>
                            <h1>--days</h1>
                        </div>
                </div>
            </nav>
        </>
    )
}