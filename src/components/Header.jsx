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
            </div>
        </header>
    );
};

export default Header;
