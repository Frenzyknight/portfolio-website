import { IconBrandReact, IconBrandNextjs, IconBrandTailwind, IconBrandJavascript, IconBrandHtml5, IconBrandCss3, IconBrandPython, IconBrandDjango, IconBrandGit, IconBrandMongodb, IconBrandMysql, IconBrandFirebase, IconBrandOauth,IconBrandSwift, IconBrandTypescript, IconBrandFigma} from "@tabler/icons-react"

export default function SkillsSection() {
    const skills = [
        {
            name: "React",
            icon: <IconBrandReact size={56} stroke={1.5}/>,
            color: "hover:bg-react"
        },
        {
            name: "Next.js",
            icon: <IconBrandNextjs size={56} stroke={1.5}/>,
            color: "hover:bg-github"
        },
        {
            name: "Tailwind",
            icon: <IconBrandTailwind size={56} stroke={1.5}/>,
            color: "hover:bg-tailwind"
        },
        {
            name: "JavaScript",
            icon: <IconBrandJavascript size={56} stroke={1.5}/>,
            color: "hover:bg-javascript"
        },
        {
            name: "HTML5",
            icon: <IconBrandHtml5 size={56} stroke={1.5}/>,
            color: "hover:bg-html"
        },
        {
            name: "CSS3",
            icon: <IconBrandCss3 size={56} stroke={1.5}/>,
            color: "hover:bg-css"
        },
        {
            name: "Python",
            icon: <IconBrandPython size={56} stroke={1.5}/>,
            color: "hover:bg-python"
        },
        {
            name: "Django",
            icon: <IconBrandDjango size={56} stroke={1.5}/>,
            color: "hover:bg-django"
        },
        {
            name: "Git",
            icon: <IconBrandGit size={56} stroke={1.5}/>,
            color: "hover:bg-git"
        },
        {
            name: "MongoDB",
            icon: <IconBrandMongodb size={56} stroke={1.5}/>,
            color: "hover:bg-mongodb"
        },
        {
            name: "MySQL",
            icon: <IconBrandMysql size={56} stroke={1.5}/>,
            color: "hover:bg-mysql"
        },
        {
            name: "Firebase",
            icon: <IconBrandFirebase size={56} stroke={1.5}/>,
            color: "hover:bg-firebase"
        },
        {
            name: "OAuth",
            icon: <IconBrandOauth size={56} stroke={1.5}/>,
            color: "hover:bg-github"
        },
        {
            name: "Swift",
            icon: <IconBrandSwift size={56} stroke={1.5}/>,
            color: "hover:bg-swift"
        },
        {
            name: "TypeScript",
            icon: <IconBrandTypescript size={56} stroke={1.5}/>,
            color: "hover:bg-typescript"
        },
        {
            name: "Figma",
            icon: <IconBrandFigma size={56} stroke={1.5}/>,
            color: "hover:bg-figma"
        }
    ]
  return (
    <section id='skills' className='flex justify-center h-fit py-10 px-6 sm:px-6 md:py-14 lg:px-8 xl:px-12 font-sora'>
        <div className="flex w-full flex-col gap-20 items-center">
            <h2 className="text-3xl md:text-5xl">My <span className="font-extrabold">Skills</span></h2>
            <div className="grid w-full gap-8 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                {skills.map((skill)=> {
                    return (
                        <div key={skill.name} className={`flex border-2 border-black aspect-square flex-col justify-center items-center gap-2 lg:gap-4 xl:gap-6 rounded-2xl hover:text-white ${skill.color}`}>
                            {skill.icon}
                            <p className="font-semibold text-lg md:text-xl lg:text-2xl">{skill.name}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    </section>
  )
}