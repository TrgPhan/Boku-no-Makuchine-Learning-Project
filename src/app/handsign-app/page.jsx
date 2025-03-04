import WebcamFeed from '../../components/ui/webcam-feed';
import Link from 'next/link';
const HandsignApp = () => {
    return (
        <main className="container mx-auto px-4 text-center py-10">
            <h1 className="text-3xl font-bold mb-4">Handsign Recognition</h1>
            <p className="text-gray-600 mb-6">
                Ứng dụng nhận diện cử chỉ tay bằng AI.
            </p>

            <WebcamFeed />

            {/* Nút điều hướng */}
            <div className="mt-6 space-x-4">
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

            {/* Hướng dẫn sử dụng */}
            <div className="mt-8 p-4 bg-blue-50 rounded-lg max-w-2xl mx-auto">
                <h2 className="text-xl font-semibold mb-2">Hướng dẫn sử dụng:</h2>
                <ol className="text-left list-decimal list-inside space-y-2">
                    <li>Cho phép truy cập camera khi được yêu cầu</li>
                    <li>Đưa bàn tay vào khung hình</li>
                    <li>Nhấn nút 'Bắt đầu nhận diện'</li>
                    <li>Giữ tay ổn định trong 3 giây</li>
                </ol>
            </div>
        </main>
    );
};

export default HandsignApp;

