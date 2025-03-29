import Image from "next/image"
export default function AboutSection() {
    return (
        <section id="about" className="flex flex-col lg:flex-row gap-12 w-full py-10 px-6 md:py-14 lg:px-8 xl:px-12 font-sora items-center">
            <Image
                src="/hero2.png"
                alt="about"
                width={800}
                height={800}
                className="lg:flex-1 w-full object-cover"
            />
            <div className="flex lg:flex-1 flex-col">
                <h2 className="text-3xl md:text-5xl">About <span className="font-extrabold">Me</span></h2>
                <p className="mt-6 text-base text-zinc-500">  
                    I&apos;m a passionate, self-proclaimed designer who specializes in full stack development (Next.js & Django). I am very enthusiastic about bringing the technical and visual aspects of digital products to life. User experience, pixel perfect design, and writing clear, readable, highly performant code matters to me.<br/><br/>
                </p>
                <p className="text-base text-zinc-500">
                    I began my journey as a web developer in 2015, and since then, I&apos;ve continued to grow and evolve as a developer, taking on new challenges and learning the latest technologies along the way. Now, in my early thirties, 7 years after starting my web development journey, I&apos;m building cutting-edge web applications using modern technologies such as Next.js, TypeScript, Nestjs, Tailwindcss, Supabase and much more.<br/><br/>
                </p>
                <p className="text-base text-zinc-500">
                    When I&apos;m not in full-on developer mode, you can find me hovering around on twitter or on indie hacker, witnessing the journey of early startups or enjoying some free time. You can follow me on Twitter where I share tech-related bites and build in public, or you can follow me on GitHub.<br/><br/>
                </p>
            </div>

        </section>
    )
}