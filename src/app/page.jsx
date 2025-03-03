import Image from 'next/image';

export default function Page() {
    return (
        <main className="container mx-auto px-4">
            <h1 className="text-4xl font-semibold text-center my-8">Hello, World!</h1>
            <div className="flex justify-center">
                <Image
                    src="/next.svg"
                    alt="Next.js Logo"
                    width={400}
                    height={400}
                />
            </div>
        </main>
    )
}
