import React from "react";
import Link from "next/link";

const Header = () => {
    return (
        <header className="py-8 xl:py-12 text-white bg-black">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/">
                    <h1 className="text-4xl font-semibold">
                        K68<span className="text-accent">A-AI1 desu.</span>
                    </h1>
                </Link>

                {/* Navigation Links */}
                <nav className="flex space-x-6 mt-4 md:mt-0">
                    <Link href="/about" className="hover:text-gray-400">About Us</Link>
                    <Link href="/contact" className="hover:text-gray-400">Contact</Link>
                </nav>

            </div>
        </header>
    );
};

export default Header;
