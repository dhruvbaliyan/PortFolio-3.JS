import React, { useState } from 'react'

const NavItems = () => {
    return (
        <ul className='nav-ul'>
            {[
                {
                    name: "Home",
                    href: "/",
                },
                {
                    name: "About",
                    href: "/about",
                },
                {
                    name: "Projects",
                    href: "/projects",
                },
                {
                    name: "Contact",
                    href: "/contact",
                },
            ].map((item, index) => (
                <li key={index} className="nav-li">
                    <a href={item.href} className='nav-li_a'>{item.name}</a>
                </li>
            ))}
        </ul>
    )
}

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toogleMenu = () => {
        setIsOpen(!isOpen);
    }
    return (
        <header className='text-white fixed top-0 left-0 right-0 z-100 bg-black-300'>
            <div className='max-w-7xl mx-auto'>
                <div className='flex items-center justify-between py-5 mx-auto c-space'>
                    <a href="/" className='text-neutral-400 font-bold text-xl hover:text-white transitions colors'> Dhruv</a>

                    <button onClick={toogleMenu} className='text-neutral-400 hover:text-white focus:outline-none sm:hidden flex' aria-label='Toggle Menu'>
                        <img src={isOpen ? "/assets/close.svg" : "/assets/menu.svg"} alt="toggle" className='w-6 h-6' />
                    </button>

                    <nav className='sm:flex hidden'>
                        <NavItems />
                    </nav>
                </div>
            </div>

            <div className={`nav-sidebar ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
                <nav className="py-5 px-5">
                    <NavItems />
                </nav>
            </div>
        </header>
    )
}

export default Navbar