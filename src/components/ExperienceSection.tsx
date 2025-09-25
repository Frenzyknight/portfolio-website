import Image from "next/image"
export default function ExpereienceSection() {
    const experience = [
        {
            title: "Full Stack & AI Engineer Intern at RoshAi",
            description: "Deployed camera-based deep learning systems at leading telecommunications and financial technology companies for automated quality inspection, significantly reducing inspection time and achieving substantial reduction in labor costs. Engineered custom 3D laser scanner systems and built internal tools including a Lead Management System that improved conversion rates. Mentored AI Support Engineers and experimented with machine learning algorithms for major automotive manufacturers using CAN bus data analysis.",
            duration: "Dec 2024 - Sep 2025",
            logo: <Image src="/roshai-logo-white.webp" alt="RoshAI Logo" width={72} height={72} className="shrink-0 object-contain" />
        },
        {
            title: "iOS App Development Intern at Infosys",
            description: "Selected among 50 of 500+ applicants for Apple-Infosys joint initiative promoting Swift development. Collaborated in cross-functional team developing native Hospital Management System using SwiftUI and Firebase. Implemented RESTful API integration using Node.js, Express.js, and Nodemailer for email functionality.",
            duration: "Apr 2023 - May 2023",
            logo: <Image src="/infosys.png" alt="Infosys Logo" width={72} height={72} className="shrink-0 object-contain" />
        }
    ]
    return (
        <section className="bg-black text-white flex flex-col gap-12 items-center h-fit py-10 px-6 md:py-14 lg:px-8 xl:px-12 font-sora">
            <h2 className="text-3xl md:text-5xl">My <span className="font-extrabold">Experience</span></h2>
            <div className="flex flex-col w-full gap-8">
                {experience.map((exp)=> {
                    return (
                        <div key={exp.title} className="flex flex-col gap-7 justify-center w-full border-2 p-4 md:p-14 rounded-2xl">
                            <div className="flex flex-col gap-4 md:flex-row md:justify-between md:items-center">
                                <div className="flex gap-4 md items-center">
                                    {exp.logo}
                                    <h4 className="font-semibold text-2xl">{exp.title}</h4>
                                </div>
                            <time className="font-semibold text-lg text-zinc">{exp.duration}</time>
                            </div>
                            <p className="text-lg text-zinc">
                                {exp.description}
                            </p>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}