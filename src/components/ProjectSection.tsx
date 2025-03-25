import Image from "next/image";
import { IconLink } from "@tabler/icons-react";
export default  function ProjectSection() {
    return (
        <section className="flex flex-col gap-12 w-full py-10 px-6 md:py-14 lg:px-8 xl:px-12 font-sora items-center">
            <h2 className="text-3xl md:text-5xl">About <span className="font-extrabold">Me</span></h2>
            <div className="flex items-center">
            <Image
                src="/project.png"
                alt="Project"
                layout="responsive"
                width={800}
                height={800}
                className="object-cover border-2"
            />
                <div className="flex flex-col gap-6">
                    <h2 className="font-extrabold text-3xl md:text-5xl">01</h2>
                    <h3 className="md:text-4xl font-bold">Crypto Screener Application</h3>
                    <p>I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.</p>
                    <a href="#"><IconLink /></a>
                </div>
            </div>
        </section>
    )
}