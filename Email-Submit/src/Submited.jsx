import { AiFillCheckCircle } from 'react-icons/ai';
export default function Sumbited() {
    return (
        <nav className="w-screen h-screen bg-gray-900 flex justify-center items-center hidden">
            <div className='bg-white rounded-xl px-4 py-4 sm:p-12 w-1/2'>
                <AiFillCheckCircle className='mb-8  text-blue-600 text-6xl mr-3'/>
                <h1 className='text-3xl sm:text-5xl font-bold mb-8'>Thanks for subscribing!</h1>
                <p className=' text-lg mb-8'>A confirm email has been sent to <span className='font-bold inline-block'>ash@loremcompany.com</span>. Please open it and click the button inside to confirm your subscription.</p>
                <button className='bg-gray-900 text-white font-semibold rounded-lg px-8 py-4 text-center w-full' type="button">Dismiss message</button>
            </div>
        </nav>
    )
}