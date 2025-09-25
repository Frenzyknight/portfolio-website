import Image from "next/image";
import { SiGithub } from "react-icons/si";
import { TbExternalLink } from "react-icons/tb";
export default  function ProjectSection() {
    return (
        <section id="project" className="flex bg-black flex-col gap-20 w-full py-10 px-6 md:py-14 lg:px-8 xl:px-12 font-sora items-center">
            <h2 className="text-white text-3xl md:text-5xl">My <span className="font-extrabold">Projects</span></h2>
            <div className="flex flex-col md:flex-row gap-8">
                <Image
                src="/pattern.png"
                alt="Crypto Screener Application"
                width={954}
                height={716}
                className="object-cover rounded-2xl min-w-3xs flex-1"
                />
                <div className="flex flex-col justify-center text-white flex-1">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">01</h2>
                    <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold mb-4">CogniQuest</h3>
                    <p className="text-zinc text-base mb-6">
                    Developed an assistive learning app for children with handwriting recognition capabilities. Trained a custom CNN model using Kaggle dataset and image augmentation techniques achieving 95% accuracy for character recognition. Architected Flask API inference endpoint and integrated with SwiftUI frontend.
                    </p>
                    <a href="https://github.com/Frenzyknight/CogniQuest.git" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white hover:text-blue-400 transition-colors w-fit">
                        <SiGithub size={20} />
                        <span>View on GitHub</span>
                    </a>
                </div>
            </div>  
            <div className="flex flex-col md:flex-row-reverse gap-8">
                <Image
                src="/rosh.png"
                alt="Crypto Screener Application"
                width={954}
                height={716}
                className="object-cover rounded-2xl min-w-3xs flex-1"
                />
                <div className="flex flex-col justify-center text-white flex-1">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">02</h2>
                    <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold mb-4">RoshAI Corporate Website</h3>
                    <p className="text-zinc text-base mb-6">
                    Designed and developed a clean, responsive and modern website for RoshAI from scratch with unique scroll-based site animations using GSAP. Integrated a 3D card element similar to Vercel&apos;s website design, creating an engaging user experience that showcases the company&apos;s autonomous vehicle solutions with smooth transitions and interactive elements.
                    </p>
                    <a href="https://rosh.ai" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white hover:text-blue-400 transition-colors w-fit">
                        <TbExternalLink size={20} />
                        <span>Visit Website</span>
                    </a>
                </div>
            </div>
            <div className="flex flex-col md:flex-row gap-8">
                <Image
                src="/clario.png"
                alt="Crypto Screener Application"
                width={954}
                height={716}
                className="object-cover rounded-2xl min-w-3xs flex-1"
                />
                <div className="flex flex-col justify-center text-white flex-1">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">03</h2>
                    <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold mb-4">Clario</h3>
                    <p className="text-zinc text-base mb-6">
                    Created an intelligent highlighting component powered by RAG (Retrieval-Augmented Generation) that provides contextual explanations for highlighted text. When integrated into websites, users can highlight technical terms they don&apos;t understand and receive simple, context-aware explanations using the RAG system for better comprehension and learning.
                    </p>
                    <div className="flex gap-4">
                        <a href="https://github.com/Frenzyknight/clario-sample-frontend.git" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white hover:text-blue-400 transition-colors">
                            <SiGithub size={20} />
                            <span>Frontend</span>
                        </a>
                        <a href="https://github.com/Frenzyknight/clario-backend.git" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white hover:text-blue-400 transition-colors">
                            <SiGithub size={20} />
                            <span>Backend</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}