import Form from 'next/form';
import Image from 'next/image';
export default function Footer() {
    return (
        <footer className='flex flex-col h-fit font-sora'>
            <div className='flex gap-30 items-center py-10 px-6 md:py-14 lg:px-8 xl:px-12'>
                <Form action="" className='flex flex-col flex-1 gap-4'>
                    <label htmlFor="contactName" className='font-medium'>Name</label>
                    <input type="text" placeholder="John Doe" name='contactName' className='border-2 border-black py-4 px-6 rounded-lg' />
                    <label htmlFor="contactEmail" className='font-medium'>Email</label>
                    <input type="email" placeholder="johndoe@email.com" name='contactEmail' className='border-2 border-black py-4 px-6 rounded-lg' />
                    <label htmlFor="contactMessage" className='font-medium'>Message</label>    
                    <textarea  placeholder="Your Message to me" name="contactMessage" rows={4} className='border-2 border-black py-4 px-6 rounded-lg resize-none'></textarea> 
                    <button className='bg-black text-white p-6 rounded-lg text-lg font-medium '>Get in Touch</button>
                </Form>
                <div className='flex-1 flex flex-col gap-8'>
                    <h1 className='xl:text-5xl lg:text-4xl sm:text-3xl text-2xl font-extrabold'>Let&apos;s connect for Something<br/> Special</h1>
                    <p className='text-zinc-500'>I seek to push the limits of creativity to create high-engaging, user-friendly, and memorable interactive experiences. I seek to push the limits of creativity to create high-engaging, user-friendly, and memorable interactive experiences.</p>
                    <div className='font-semibold text-3xl flex flex-col gap-2'>
                        <h3>gauravganju@gmail.com</h3>
                        <h3>(+91) 9999896337</h3>
                    </div>
                </div>
            </div>
            <div className='flex justify-between items-center px-6 py-8 bg-black text-white'>
                <div id='logo-icon' className='flex gap-3 items-center justify-between'>
                    <Image src="/logo 2.png" alt="Generic logo of letter P" width={40} height={40} />
                    <span className='text-sm md:text-base lg:text-xl font-bold font-sora'>Gaurav Ganju</span>
                </div> 
                <p>@ 2025 Gaurav Gajnu</p>
            </div>
        </footer>
    );
}