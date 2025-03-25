import { IconBrandGoogle, IconBrandAdobe } from "@tabler/icons-react"
export default function ExpereienceSection() {
    const experience = [
        {
            title: "Lead Software Engineer at Google",
            description: "As a Senior Software Engineer at Google, I played a pivotal role in developing innovative solutions for Google's core search algorithms. Collaborating with a dynamic team of engineers, I contributed to the enhancement of search accuracy and efficiency, optimizing user experiences for millions of users worldwide.",
            duration: "Nov 2019 - Present",
            logo: <IconBrandGoogle className="shrink-0" size={52}/>
        },
        {
            title: "Lead Software Engineer at Adobe",
            description: "As a Senior Software Engineer at Google, I played a pivotal role in developing innovative solutions for Google's core search algorithms. Collaborating with a dynamic team of engineers, I contributed to the enhancement of search accuracy and efficiency, optimizing user experiences for millions of users worldwide.",
            duration: "Nov 2019 - Present",
            logo: <IconBrandAdobe className="shrink-0" size={52}/>
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