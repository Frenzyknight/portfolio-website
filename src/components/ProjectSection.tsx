import Image from "next/image";
export default  function ProjectSection() {
    return (
        <section className="flex bg-black flex-col gap-12 w-full py-10 px-6 md:py-14 lg:px-8 xl:px-12 font-sora items-center">
            <h2 className="text-white text-3xl md:text-5xl">My <span className="font-extrabold">Projects</span></h2>
            <div className="flex">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex items-center order-1 md:order-2">
                        <Image
                        src="/project.png"
                        alt="Crypto Screener Application"
                        width={500}
                        height={400}
                        className="rounded-lg w-full h-auto"
                        />
                    </div>
                    <div className="order-2 md:order-1 flex flex-col justify-center text-white">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">01</h2>
                        <h3 className="text-2xl lg:text-3xl xl:text- font-bold mb-4">Crypto Screener Application</h3>
                        <p className="text-zinc text-base mb-6">
                        I&apos;m Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                        been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of
                        type and scrambled it to specimen book.
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="order-1">
                        <Image
                        src="/project.png"
                        alt="Crypto Screener Application"
                        width={500}
                        height={400}
                        className="rounded-lg w-full h-auto"
                        />
                    </div>
                    <div className="order-2 flex flex-col justify-center text-white">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">02</h2>
                        <h3 className="text-2xl lg:text-3xl xl:text- font-bold mb-4">Crypto Screener Application</h3>
                        <p className="text-zinc text-base mb-6">
                        I&apos;m Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                        been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of
                        type and scrambled it to specimen book.
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex items-center order-1 md:order-2">
                        <Image
                        src="/project.png"
                        alt="Crypto Screener Application"
                        width={500}
                        height={400}
                        className="rounded-lg w-full h-auto"
                        />
                    </div>
                    <div className="order-2 md:order-1 flex flex-col justify-center text-white">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">03</h2>
                        <h3 className="text-2xl lg:text-3xl xl:text- font-bold mb-4">Crypto Screener Application</h3>
                        <p className="text-zinc text-base mb-6">
                        I&apos;m Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                        been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of
                        type and scrambled it to specimen book.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}