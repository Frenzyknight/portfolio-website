import Image from "next/image";
export default  function ProjectSection() {
    return (
        <section className="flex bg-black flex-col gap-12 w-full py-10 px-6 md:py-14 lg:px-8 xl:px-12 font-sora items-center">
            <h2 className="text-white text-3xl md:text-5xl">My <span className="font-extrabold">Projects</span></h2>
            <div className="flex flex-col md:flex-row gap-8">
                <Image
                src="/project.png"
                alt="Crypto Screener Application"
                width={954}
                height={716}
                className="object-cover rounded-2xl min-w-3xs flex-1"
                />
                <div className="flex flex-col justify-center text-white flex-1">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">01</h2>
                    <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold mb-4">Crypto Screener Application</h3>
                    <p className="text-zinc text-base mb-6">
                    I&apos;m Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                    been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of
                    type and scrambled it to specimen book.
                    </p>
                </div>
            </div>  
            <div className="flex flex-col md:flex-row gap-8">
                <Image
                src="/project.png"
                alt="Crypto Screener Application"
                width={954}
                height={716}
                className="object-cover rounded-2xl min-w-3xs flex-1"
                />
                <div className="flex flex-col justify-center text-white flex-1">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">02</h2>
                    <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold mb-4">Crypto Screener Application</h3>
                    <p className="text-zinc text-base mb-6">
                    I&apos;m Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                    been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of
                    type and scrambled it to specimen book.
                    </p>
                </div>
            </div>
            <div className="flex flex-col md:flex-row gap-8">
                <Image
                src="/project.png"
                alt="Crypto Screener Application"
                width={954}
                height={716}
                className="object-cover rounded-2xl min-w-3xs flex-1"
                />
                <div className="flex flex-col justify-center text-white flex-1">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">03</h2>
                    <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold mb-4">Crypto Screener Application</h3>
                    <p className="text-zinc text-base mb-6">
                    I&apos;m Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                    been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of
                    type and scrambled it to specimen book.
                    </p>
                </div>
            </div>
        </section>
    )
}