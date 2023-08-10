import { useState } from 'react';
import { AiFillCheckCircle } from 'react-icons/ai';

export default function Emailform() {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [submit, setSubmit] = useState(false);
    const [dismiss, setDismiss] = useState('');

    function handleDismiss() {
        setDismiss (!dismiss);
    }
    
    function isValidEmail(email) {
        return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);   
    }

    function handleSubmit(event)  {
        event.preventDefault();
        if (!isValidEmail(email)) {
            setError('Valid email required');
          } else {
            setSubmit (!submit);
          }
    }

    function handleInputChange(event) {
        setEmail(event.target.value);
    }

    return (
        <>
            <div className={!submit ? 'bg-gray-900 max-w-screen h-screen sm:flex sm:justify-center sm:items-center' : 'hidden'}>
                <div className="bg-white text-left rounded-xl relative -top-48 sm:top-0 pb-12 sm:pb-0 sm:flex">
                    <img className="w-84 sm:py-4 sm:px-4 rounded-2xl object-cover object-bottom sm:hidden" src="Image2.png" alt="image" />
                    <div className='px-8'>
                        <h1 className='text-4xl sm:text-6xl font-bold mt-8'>Stay updated!</h1>
                        <ul className='my-8 mb-8'>
                            <li className='mt-4'>Join 60,000+ product managers receiving monthly updates on:</li>
                            <li className='mt-4 flex'><AiFillCheckCircle className='mt-1 text-blue-600 text-xl mr-3'/>Product discovery and building what matters</li>
                            <li className='mt-4 flex'><AiFillCheckCircle className='mt-1 text-blue-600 text-xl mr-3'/>Measuring to ensure updates are a success</li>
                            <li className='mt-4 flex'><AiFillCheckCircle className='mt-1 text-blue-600 text-xl mr-3'/>And much more!</li>
                        </ul>
                        <form onSubmit={handleSubmit}>
                            <div className='flex justify-between mr-10 text-sm'>
                                <p className='text-sm mb-2 ml-4 font-medium'>Email address</p>
                                    {error && (
                                        <div className=" text-red-500">
                                            {error}
                                        </div>
                                    )}
                            </div>
                            <input 
                                className='border-2 w-11/12 py-3 rounded-lg text-justify pl-6 outline-gray-200 invalid:bg-red-100 invalid:text-red-700'
                                type="email" 
                                name="email" 
                                id="email" 
                                placeholder="email@company.com"
                                value={email}
                                onChange={handleInputChange}
                            />
                            <button onClick={handleSubmit}
                                className='bg-blue-400 text-white font-semibold rounded-lg w-11/12 py-4 mt-6' 
                                type="submit">
                                    Subscribe to monthly newsletter
                            </button>
                        </form>
                    </div>
                    <img className='rounded-2xl px-2 py-2 hidden sm:flex w-96' src="Image.png" alt="Image" />
                </div>
            </div>

            <div className= {!submit ? 'hidden' : 'w-screen h-screen bg-gray-900 flex justify-center items-center'}>
                <div className='bg-white rounded-xl px-4 py-4 sm:p-12 w-1/2'>
                        <AiFillCheckCircle className='mb-8  text-blue-600 text-6xl mr-3'/>
                        <h1 className='text-3xl sm:text-5xl font-bold mb-8'>Thanks for subscribing!</h1>
                        <p className=' text-lg mb-8'>A confirm email has been sent to <span className='font-bold inline-block'>ash@loremcompany.com</span>. Please open it and click the button inside to confirm your subscription.</p>
                    <div>
                        <button onClick={handleDismiss} className='bg-gray-900 text-white font-semibold rounded-lg px-8 py-4 text-center w-full' type="button">Dismiss message</button>
                    </div>
                </div>
            </div>
        </>
    );
}