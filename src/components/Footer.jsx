import Image from 'next/image';
import SocialMediaIcons from '@/helpers/SocialMediaIcons';

const Footer = ({ setViewPort }) => {
    const handleScrollToSection = (reference) => {
        setViewPort(reference)
    }

    return (
        <div className='border-t relative bg-[#11111b]'>
            <Image className='absolute bottom-0' height={1500} width={1500} src={"/footer/Looper_bg.svg"} alt='bg' />
            <div className='grid lg:mx-28 pt-10 lg:py-32'>
                <div className={`lg:flex grid lg:items-end justify-center lg:justify-between`}>
                    <div className={`grid gap-6`}>
                        <div className='flex bg-white rounded-full justify-center'>
                            <Image height={180} width={180}
                                onClick={() => handleScrollToSection("homeRef")}
                                src={"/Logo.png"} alt='logo' />
                        </div>
                        <div className='flex justify-center'>
                            <p className='w-64 text-center text-sm'>Feel free to contact me on the available social media platforms provided.</p>
                        </div>
                    </div>
                    <div className='grid gap-2 justify-center'>
                        <p>Social media to connect with me:</p>
                        <div className='flex justify-center z-50 gap-6'>
                            <SocialMediaIcons width={28} height={28} navigateTo={"https://www.facebook.com/techibot/"} srcImage={"/footer/Facebook_logo.svg"} alt={"fb"} />
                            <SocialMediaIcons width={28} height={28} navigateTo={"https://www.instagram.com/techibot02/"} srcImage={"/footer/Instagram_logo.svg"} alt={"Instagram"} />
                            <SocialMediaIcons width={28} height={28} navigateTo={"https://www.linkedin.com/in/aaronpanablon/"} srcImage={"/footer/Linkedin_logo.svg"} alt={"linkedin"} />
                        </div>
                    </div>
                </div>
            </div>
          <p className="text-center text-gray-500 border-t text-sm mt-10 mx-6 lg:mx-32 py-10">©{new Date().getFullYear()}, All Rights Reserved.</p>
        </div>
    );
}

export default Footer;
