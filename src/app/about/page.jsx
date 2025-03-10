"use client";

import Image from "next/image";
import Link from "next/link";

const AboutUs = () => {
    const teamMembers = [
        {
            id: 1,
            name: "Hệu Hệu",
            studentId: "23020413",
            role: "Team Leader & Full-stack Developer",
            github: "https://github.com/userA",
            avatar: "/temp.jpg",
        },
        {
            id: 2,
            name: "Hệu Hệu 2",
            studentId: "20123457",
            role: "AI/ML Engineer",
            github: "https://github.com/userB",
            avatar: "/temp.jpg",
        },
        {
            id: 3,
            name: "Hệu Hệu 3",
            studentId: "20123457",
            role: "AI/ML Engineer",
            github: "https://github.com/userB",
            avatar: "/temp.jpg",
        },
    ];

    return (
        <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-bold text-gray-900 mb-4">About Our Team</h1>
                    <p className="text-2xl text-gray-600">Nhóm phát triển dự án Machine Learning</p>
                </div>

                {/* Team Members */}
                <div className="flex flex-col items-center space-y-8  ">
                    {teamMembers.map((member) => (
                        <div
                            key={member.id}
                            className="w-full sm:w-[700px] flex items-center p-8 bg-white rounded-2xl shadow-2xl transition-transform transform hover:scale-105 hover:shadow-3xl"
                        >
                            {/* Avatar */}
                            <div className="flex-shrink-0">
                                <Image
                                    className="rounded-full border-4 border-gray-300"
                                    src={member.avatar}
                                    alt={member.name}
                                    width={100}
                                    height={100}
                                />
                            </div>

                            {/* Member Info */}
                            <div className="ml-8">
                                <h2 className="text-3xl font-bold text-gray-900">{member.name}</h2>
                                <p className="text-xl text-gray-600">📌 {member.role}</p>
                                <p className="text-lg text-gray-500">🎓 {member.studentId}</p>

                                {/* GitHub Link */}
                                <Link
                                    href={member.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-3 flex items-center text-indigo-600 hover:text-indigo-900 transition-all text-xl"
                                >
                                    <svg className="w-7 h-7 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                        <path
                                            fillRule="evenodd"
                                            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    GitHub
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* GitHub Repo Section */}
                <div className="mt-12 p-8 bg-gray-800 rounded-2xl shadow-2xl hover:scale-105 transition-all duration-300">
                    <div className="flex items-center">
                        <svg className="w-10 h-10 text-white mr-4" fill="currentColor" viewBox="0 0 24 24">
                            {/* GitHub icon */}
                        </svg>
                        <div>
                            <h3 className="text-2xl font-semibold text-white">GitHub Repository</h3>
                            <Link
                                href="https://github.com/TrgPhan/Boku-no-Makuchine-Learning-Project"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-indigo-400 hover:text-indigo-300 text-xl"
                            >
                                github.com/Boku-no-Makuchine-Learning-Project
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Back Button */}
                <div className="mt-6 flex justify-center space-x-4">
                    <Link href="/">
                        <button className="relative inline-flex items-center justify-center gap-2 text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-white hover:bg-[#abd373] h-9 w-25 rounded-md group ">
                            <svg className="lucide lucide-arrow-left" strokeLinejoin="round" strokeLinecap="round" strokeWidth={2} stroke="currentColor" fill="none" viewBox="0 0 24 24" height={22} width={22} xmlns="http://www.w3.org/2000/svg">
                                <path d="m12 19-7-7 7-7" />
                                <path d="M19 12H5" />
                            </svg>
                            <span className=" py-3 origin-left scale-0 transition-all group-hover:scale-100 hover:text-white">Back</span>
                        </button>
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default AboutUs;
