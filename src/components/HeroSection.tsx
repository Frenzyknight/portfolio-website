"use client"
import Image from "next/image";
import { motion } from "motion/react";
import { IconBrandGithubFilled, IconBrandLinkedinFilled, IconBrandDiscordFilled,IconBrandReddit } from "@tabler/icons-react";
export default function HeroSection() {
    return (
        <section className="flex h-fit px-6 sm:px-6 xl:px-12 font-sora">
            <div className=" gap-8 md:gap-0 w-full flex justify-between flex-col-reverse md:flex-row items-center md:relative">
                <div className="flex flex-col z-1 md:py-16 lg:py-32 xl:py-36">
                    <h1 className="xl:text-5xl lg:text-4xl sm:text-3xl text-2xl">
                        Hello I&apos;m <span className="font-bold">Gaurav Ganju</span>
                    </h1>
                    <h1 className="xl:text-5xl lg:text-4xl sm:text-3xl text-2xl mt-2 lg:mt-6">
                        <span className="font-bold">FullStack</span> Developer
                    </h1>
                    <p className="text-zinc-500 mt-6 lg:mt-8 xl:mt-12 xl:w-xl lg:w-md md:w-xs w-full">
                    I&apos;m a passionate Full Stack Developer and AI Engineer specializing in computer vision, deep learning systems, and modern web applications. I build innovative solutions that bridge the gap between cutting-edge AI technology and user-friendly interfaces.
                    </p>
                    <div className="flex gap-4 mt-12 sm:self-start self-center">
                        <motion.a href="https://github.com/Frenzyknight" target="_blank" whileHover={{scale:1.2}} className="p-3 bg-github rounded-md"><IconBrandGithubFilled className="text-white" size={28}/></motion.a>
                        <motion.a whileHover={{scale:1.2}} href="https://www.linkedin.com/in/gaurav-ganju-107098190/" target="_blank" className="p-3 bg-linkedin rounded-md"><IconBrandLinkedinFilled className="text-white" size={28}/></motion.a>
                        <motion.a whileHover={{scale:1.2}} href="https://discordapp.com/users/632584217230049319" target="_blank" className="p-3 bg-discord rounded-md"><IconBrandDiscordFilled className="text-white" size={28}/></motion.a>
                        <motion.a whileHover={{scale:1.2}} href="https://www.reddit.com/user/PhasePuzzleheaded753/" target="_blank" className="p-3 bg-reddit rounded-md"><IconBrandReddit className="text-white" size={28}/></motion.a>
                    </div>
                </div>
                <Image src="/hero.png" alt="Hero Image" width={256} height={256} className="xl:w-3xl lg:w-2xl max-[1030px]:w-xl max-[816px]:w-lg max-[768px]:w-full md:absolute md:right-0 md:z-10"/>
            </div>
        </section>
    )
}