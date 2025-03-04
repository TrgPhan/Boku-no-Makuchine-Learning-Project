import React from "react";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="py-8 xl:py-12 text-white bg-black mt-auto">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                {/* Logo */}
                <Link href="/">
                    <h1 className="text-4xl font-semibold">MyWebsite</h1>
                </Link>

                {/* Navigation Links */}
                <nav className="flex space-x-6 mt-4 md:mt-0">
                    <Link href="/about" className="hover:text-gray-400">About</Link>
                    <Link href="/services" className="hover:text-gray-400">Services</Link>
                    <Link href="/contact" className="hover:text-gray-400">Contact</Link>
                </nav>

                {/* Copyright */}
                <p className="text-sm mt-4 md:mt-0">&copy; {new Date().getFullYear()} MyWebsite. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;