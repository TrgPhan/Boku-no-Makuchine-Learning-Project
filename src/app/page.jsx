import Image from 'next/image';
import Button from '../components/ui/button';
import Link from 'next/link';

export default function Page() {
    return (
        <main className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* Hero Section */}
            <section className="text-center my-8 md:my-12">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-6">Hello, UETERS!</h1>
                <div className="relative aspect-video w-full max-w-2xl mx-auto">
                    <Image
                        src="/next.svg"
                        alt="NextJS Logo"
                        fill={true}
                        className="object-contain"
                    />
                </div>
                <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                    Welcome to our new Lolillolili-daisuki app!
                </p>
                <div className="mt-8">
                    <Link href="/handsign-app">
                        <Button>DISCOVER OUR APP</Button>
                    </Link>
                </div>
            </section>

            {/* GitHub Section */}
            <section className="mt-12 md:mt-16 flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1 space-y-4">
                    <p className="text-base md:text-lg leading-relaxed max-w-prose">
                        Hello everyone, this is a Machine Learning project that I have been working on for a while.
                        I am very excited to share it with you all :))
                    </p>
                </div>
                <div className="relative w-full md:w-1/2 aspect-square">
                    <Image
                        src="/github1.svg"
                        alt="GitHub Logo"
                        fill
                        className="object-contain"
                    />
                </div>
            </section>

            {/* Feature Section */}
            <section className="mt-12 md:mt-16 flex flex-col md:flex-row-reverse items-center gap-8">
                <div className="flex-1 space-y-4">
                    <p className="text-base md:text-lg leading-relaxed max-w-prose">
                        You can use our app to predict the hand sign language. It is very easy to use and you can
                        get the result in a few seconds.
                        <br /><br />
                        Pls, use our app and give us feedback. We are looking forward to hearing from you.
                        <br /><br />
                        We've been using the latest technology to make this app as user-friendly as possible.
                        We hope you give us a A+ for our effort.
                    </p>
                </div>
                <div className="relative w-full md:w-1/2 aspect-video">
                    <Image
                        src="/handsign-alime.webp"
                        alt="Hand Sign Demo"
                        fill
                        className="object-cover rounded-lg"
                    />
                </div>
            </section>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            {/* Footer Section */}
            <section className="mt-12 md:mt-16 text-center">
                <div className="relative aspect-video w-full max-w-4xl mx-auto">
                    <Image
                        src="/sadhamster.jpg"
                        alt="Sad Hamster"
                        fill
                        className="object-cover rounded-lg"
                    />
                </div>
                <p className="mt-6 md:mt-8 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                    Plssss give us a A+ for our effort. We are looking forward to hearing from you.
                    We bugging you senseiiiiiiiiiiiiiii.
                </p>
            </section>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </main>
    )
}