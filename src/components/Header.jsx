import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';


const Header = ({ setViewPort }) => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const router = useRouter();
    const pathname = usePathname();

    const handleScroll = () => {
        const currentScrollPos = window.scrollY;
        setIsScrolled(prevScrollPos < currentScrollPos);
        setPrevScrollPos(currentScrollPos);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos]);

    const handleScrollToSection = (ref) => {
        if (setViewPort) {
            setViewPort(ref);
        }
        setMobileMenuOpen(false);
    }

    const handleNavigation = (path, ref = null) => {
        if (pathname === path && ref && setViewPort) {
            // Same page, scroll to section
            setViewPort(ref);
        } else if (path) {
            // Different page, navigate
            router.push(path);
        }
        setMobileMenuOpen(false);
    };

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <div className={`w-full flex justify-center mx-auto px-10 py-4 z-40
               lg:h-max top-0 fixed
                ${prevScrollPos > 300 ?
                (isMobileMenuOpen ? 'h-screen bg-gray-700 z-50 fixed' : 'bg-gray-700 opacity-80 ')
                :
                (isMobileMenuOpen ? 'h-screen bg-gray-700 z-50' : "bg-gradient-to-r from-[rgba(10,92,110,0.989233193277311)]  to-[rgba(2,0,36,1)] to-80%")
            }
                ${isScrolled ? "hidden" : "visible"} `}>
            <div className='max-w-screen-2xl w-full flex items-center relative justify-between'>
                <div className={`lg:ml-16 rounded-full bg-white cursor-pointer
                    ${isMobileMenuOpen && 'hidden'}`}>
                    <Image height={50} width={50}
                        onClick={() => handleNavigation("/", "homeRef")}
                        className='' src={"/Logo.png"} alt='logo' />
                </div>
                <div className={`text-gray-100 text-xl items-center 
                ${isMobileMenuOpen ? 'grid w-full justify-center' : 'flex justify-end space-x-4 md:space-x-8 '}`}>
                    <div className="md:hidden block cursor-pointer" onClick={toggleMobileMenu}>
                        {isMobileMenuOpen ?
                            <Image src={"close.svg"} width={50} height={50} className='absolute top-0 right-0' alt='Menu' /> :
                            <Image src={"burger.svg"} width={50} height={50} className='absolute top-0 right-0' alt='Menu' />
                        }
                    </div>
                    <button className={`py-4 px-6 cursor-pointer hover:bg-gray-500 rounded-full 
                    ${isMobileMenuOpen ? 'visible' : 'hidden md:block'}`}
                        onClick={() => handleNavigation("/", "homeRef")}>Home</button>
                    <button className={`py-4 px-6 cursor-pointer hover:bg-gray-500 rounded-full 
                    ${isMobileMenuOpen ? 'visible' : 'hidden md:block'}`}
                        onClick={() => handleNavigation("/projects")}>Projects</button>
                    <button className={`py-4 px-6 cursor-pointer whitespace-nowrap hover:bg-gray-500 rounded-full 
                    ${isMobileMenuOpen ? 'visible' : 'hidden md:block'}`}
                        onClick={() => handleNavigation("/", "aboutRef")}>About Me</button>
                    <button className={`py-4 px-6 cursor-pointer whitespace-nowrap hover:bg-gray-500 rounded-full 
                    ${isMobileMenuOpen ? 'visible' : 'hidden md:block'}`}
                        onClick={() => handleNavigation("/", "beAGuestRef")}>Skills</button>
                    <a
                        href="https://www.facebook.com/techibot"
                        className={`py-4 px-8 cursor-pointer whitespace-nowrap hover:bg-gray-500 rounded-full bg-gray-500 
                             ${isMobileMenuOpen ? 'visible' : 'hidden md:block'}`}
                        onClick={() => handleScrollToSection("homeRef")}
                        target="_blank" // Open link in a new tab/window
                        rel="noopener noreferrer" // Recommended for security reasons
                    >
                        Chat with me
                    </a>

                </div>
            </div>
        </div>
    );
}

export default Header;
