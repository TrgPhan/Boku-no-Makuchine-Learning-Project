import Image from 'next/image';
import Link from 'next/link';

const AboutUs = () => {
    const teamMembers = [
        {
            id: 1,
            name: 'Hệu Hệu',
            studentId: '23020413',
            role: 'Team Leader & Full-stack Developer',
            github: 'https://github.com/userA',
            avatar: '/temp.jpg'
        },
        {
            id: 2,
            name: 'Hệu Hệu 2',
            studentId: '20123457',
            role: 'AI/ML Engineer',
            github: 'https://github.com/userB',
            avatar: '/temp.jpg'
        },
        {
            id: 3,
            name: 'Hệu Hệu 3',
            studentId: '20123457',
            role: 'AI/ML Engineer',
            github: 'https://github.com/userB',
            avatar: '/temp.jpg'
        },
        // Thêm các thành viên khác
    ];

    return (
        <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">About Our Team</h1>
                    <p className="text-lg text-gray-600">Nhóm phát triển dự án Machine Learning</p>
                </div>

                {/* Team Table */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-800">
                            <tr>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-white">Thành viên</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-white">Mã sinh viên</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-white">Vai trò</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-white">GitHub</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {teamMembers.map((member) => (
                                <tr
                                    key={member.id}
                                    className="hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
                                >
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center">
                                            <div className="flex-shrink-0 h-10 w-10">
                                                <Image
                                                    className="rounded-full"
                                                    src={member.avatar}
                                                    alt={member.name}
                                                    width={40}
                                                    height={40}
                                                />
                                            </div>
                                            <div className="ml-4">
                                                <div className="text-sm font-medium text-gray-900">{member.name}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{member.studentId}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{member.role}</td>
                                    <td className="px-6 py-4 flex justify-center items-center whitespace-nowrap text-sm font-medium">
                                        <Link
                                            href={member.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-indigo-600 hover:text-indigo-900"
                                        >
                                            <svg
                                                className="w-5 h-5"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                                aria-hidden="true"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* GitHub Repo Section */}
                <div className="mt-12 p-6 bg-gray-800 rounded-lg shadow-lg hover:transform hover:scale-102 transition-all duration-300">
                    <div className="flex items-center">
                        <svg
                            className="w-8 h-8 text-white mr-4"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            {/* Same GitHub icon as above */}
                        </svg>
                        <div>
                            <h3 className="text-lg font-semibold text-white">GitHub Repository</h3>
                            <Link
                                href="https://github.com/TrgPhan/Boku-no-Makuchine-Learning-Project"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-indigo-400 hover:text-indigo-300"
                            >
                                github.com/Boku-no-Makuchine-Learning-Project
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;