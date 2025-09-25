import { SiReact, SiNextdotjs, SiTailwindcss, SiJavascript, SiHtml5, SiCss3, SiPython, SiDjango, SiGit, SiMongodb, SiMysql, SiFirebase, SiAuth0, SiSwift, SiTypescript, SiFigma, SiPytorch, SiTensorflow, SiNumpy, SiFastapi, SiOllama, SiGreensock, SiFlask, SiOpencv, SiPandas, SiPlotly, SiScikitlearn } from "react-icons/si"

export default function SkillsSection() {
    const skills = [
        {
            name: "React",
            icon: <SiReact size={56} />,
            color: "hover:bg-react"
        },
        {
            name: "Next.js",
            icon: <SiNextdotjs size={56} />,
            color: "hover:bg-github"
        },
        {
            name: "Tailwind",
            icon: <SiTailwindcss size={56} />,
            color: "hover:bg-tailwind"
        },
        {
            name: "JavaScript",
            icon: <SiJavascript size={56} />,
            color: "hover:bg-javascript"
        },
        {
            name: "HTML5",
            icon: <SiHtml5 size={56} />,
            color: "hover:bg-html"
        },
        {
            name: "CSS3",
            icon: <SiCss3 size={56} />,
            color: "hover:bg-css"
        },
        {
            name: "Python",
            icon: <SiPython size={56} />,
            color: "hover:bg-python"
        },
        {
            name: "Django",
            icon: <SiDjango size={56} />,
            color: "hover:bg-django"
        },
        {
            name: "Git",
            icon: <SiGit size={56} />,
            color: "hover:bg-git"
        },
        {
            name: "MongoDB",
            icon: <SiMongodb size={56} />,
            color: "hover:bg-mongodb"
        },
        {
            name: "MySQL",
            icon: <SiMysql size={56} />,
            color: "hover:bg-mysql"
        },
        {
            name: "Firebase",
            icon: <SiFirebase size={56} />,
            color: "hover:bg-firebase"
        },
        {
            name: "OAuth",
            icon: <SiAuth0 size={56} />,
            color: "hover:bg-github"
        },
        {
            name: "Swift",
            icon: <SiSwift size={56} />,
            color: "hover:bg-swift"
        },
        {
            name: "TypeScript",
            icon: <SiTypescript size={56} />,
            color: "hover:bg-typescript"
        },
        {
            name: "Figma",
            icon: <SiFigma size={56} />,
            color: "hover:bg-figma"
        },
        {
            name: "TensorFlow",
            icon: <SiTensorflow size={56} />,
            color: "hover:bg-orange-500"
        },
        {
            name: "PyTorch",
            icon: <SiPytorch size={56} />,
            color: "hover:bg-red-500"
        },
        {
            name: "NumPy",
            icon: <SiNumpy size={56} />,
            color: "hover:bg-blue-500"
        },
        {
            name: "Ollama",
            icon: <SiOllama size={56} />,
            color: "hover:bg-green-500"
        },
        {
            name: "FastAPI",
            icon: <SiFastapi size={56} />,
            color: "hover:bg-teal-500"
        },
        {
            name: "GSAP",
            icon: <SiGreensock size={56} />,
            color: "hover:bg-green-600"
        },
        {
            name: "Flask",
            icon: <SiFlask size={56} />,
            color: "hover:bg-gray-600"
        },
        {
            name: "OpenCV",
            icon: <SiOpencv size={56} />,
            color: "hover:bg-blue-600"
        },
        {
            name: "Pandas",
            icon: <SiPandas size={56} />,
            color: "hover:bg-purple-500"
        },
        {
            name: "Matplotlib",
            icon: <SiPlotly size={56} />,
            color: "hover:bg-indigo-500"
        },
        {
            name: "Scikit-learn",
            icon: <SiScikitlearn size={56} />,
            color: "hover:bg-orange-600"
        }
    ]
  return (
    <section id='skills' className='flex flex-col gap-12 md:gap-20 items-center justify-center h-fit py-10 px-6 sm:px-6 md:py-14 lg:px-8 xl:px-12 font-sora'>
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
    </section>
  )
}