export default function Compument() {
    return(
        <nav className="flex justify-center items-center h-screen w-screen bg-indigo-200">
            <div className="bg-indigo-400 w-72 sm:w-96 pt-4 px-4 rounded-2xl shadow-3xl">
                <div className="bg-white px-10 py-10 rounded-2xl">
                    <img src="QR Code.PNG" alt="QR Code"  className=" rounded-2xl"/>
                </div>
                <div className="px-4 py-4">
                    <p className=" text-blue-950 text-xl sm:text-2xl font-bold text-center">Improve your front-end skills by building projects</p>
                    <p className=" text-indigo-200 py-4 text-lg text-center">Scan the QR code to visit Rithy Telegram and take your coding skills to the next level</p>
                </div>
            </div>
        </nav>
    )
}