import { useState } from 'react';
import { AiFillCheckCircle } from 'react-icons/ai';

export default function Emailform() {
    const [email, setEmail] = useState('');
    const [error, setError] = useState(null);

    function isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);   
    }

    const handleSubmit = event => {
        event.preventDefault();
        isValidEmail(email) ? setError('Email is invalid') : setError(null);
    };

    const handleInputChange = event => {
        setEmail(event.target.value);
    };

    return (
        <nav className="bg-gray-900 max-w-screen h-screen sm:flex sm:justify-center sm:items-center">
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
                        <p className='text-sm mb-2 ml-4 font-medium'>Email address</p>
                            {error && (
                                <div className="bg-red-800 p-4 font-bold text-white">
                                    {error}
                                </div>
                            )}
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
        </nav>
    );
}