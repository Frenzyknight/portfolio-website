import Image from "next/image"
export default function AboutSection() {
    return (
        <section id="about" className="flex flex-col lg:flex-row gap-12 w-full py-10 px-6 md:py-14 lg:px-8 xl:px-12 font-sora items-center">
            <Image
                src="/IMG_2298.webp"
                alt="about"
                width={800}
                height={800}
                className="max-w-xs md:max-w-120 lg:max-w-150 xl:max-w-200 object-cover rounded-3xl"
            />
            <div className="flex flex-col">
                <h2 className="text-3xl md:text-5xl">About <span className="font-extrabold">Me</span></h2>
                <p className="mt-6 text-base text-zinc-500">
                    I&apos;m a passionate Full Stack Developer and AI Engineer who specializes in computer vision, deep learning systems, and modern web applications. I am very enthusiastic about bringing cutting-edge AI technology and visual innovation to life. User experience, robust AI implementation, and writing clear, scalable, high-performance code matters to me.<br/><br/>
                </p>
                <p className="text-base text-zinc-500">
                    When I am not working, you can find my playing fifa, experimenting with claude, thinking about ideas I could bring to life and learning along the way. I&apos;m fluent in English and Hindi, with knowledge of German (A2 level) and my native Kashmiri language. You can follow me on GitHub where I share my latest projects and innovations.<br/><br/>
                </p>
            </div>

        </section>
    )
}