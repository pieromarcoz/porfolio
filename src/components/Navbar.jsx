import { useEffect } from "react";

export default function Navbar() {
    useEffect(() => {
        const calculate100vhAndChangueBackgroundToNavbar = () => {
            const navbarHeight = document.querySelector('nav').clientHeight;
            const windowHeight = window.innerHeight;
            const scrollWindow = windowHeight - navbarHeight;
            const nav = document.querySelector('nav');
            if (window.scrollY >= scrollWindow) {
                nav.style.backgroundColor = '#FFFFFF';
                nav.style.transition = 'background-color 0.2s ease-in-out';
                document.querySelectorAll('nav p').forEach(p => {
                    p.style.color = '#000000';
                    p.style.transition = 'color 0.2s ease-in-out';
                })
            } else {
                nav.style.backgroundColor = 'rgba(18, 18, 18)';
                nav.style.transition = 'background-color 0.2s ease-in-out';
                document.querySelectorAll('nav p').forEach(p => {
                    p.style.color = '#FFFFFF';
                    p.style.transition = 'color 0.2s ease-in-out';
                })
            }
        }
        calculate100vhAndChangueBackgroundToNavbar();
        window.addEventListener('scroll', calculate100vhAndChangueBackgroundToNavbar);
        return () => {
            window.removeEventListener('scroll', calculate100vhAndChangueBackgroundToNavbar);
        }

    }, []);
    return (
        <nav className={'flex fixed top-0 z-20 justify-between items-center w-full p-5 bg-oscuro *:text-white '}>
            <p className={'text-xs'}>PIERO MARCOS</p>
            <div className={'flex gap-3'}>
                <p className={'text-xs'}>LINKEDIN</p>
                <p className={'text-xs'}>GITHUB</p>
                <p className={'text-xs'}>TWITTER</p>
                <p className={'text-xs'}>2024✨</p>
            </div>
        </nav>
    )
}