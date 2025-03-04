import React from 'react';
import Link from 'next/link';

const Button = () => {
    return (
        <button
            className="relative py-2 px-6 text-gray-600 overflow-hidden 
            transition-all duration-500 hover:text-white
            after:absolute after:left-0 after:-bottom-1 after:w-full 
            after:h-1 after:bg-[#abd373] after:rounded-t-lg
            after:transition-all after:duration-500 
            hover:after:h-[200%] hover:after:-bottom-[100%]
            after:-z-20 z-20"
        >
            <Link href="/app">DISCOVER OUR APP</Link>
        </button>
    );
}
export default Button;