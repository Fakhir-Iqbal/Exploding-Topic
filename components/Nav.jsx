// import { useState } from 'react';
// import { FaBars, FaTimes } from 'react-icons/fa';
// import { MdShowChart, MdOutlineNavigateNext } from "react-icons/md";

// const NavItem = ({ href, label, isMobile }) => (
//     <a
//         href={href}
//         className={`text-gray-600 hover:text-black font-bold ${isMobile ? '' : 'text-sm'}`}
//     >
//         <div className={`flex justify-between mt-5 md:mt-0 ${isMobile ? 'w-full' : ''}`}>
//             {label}
//             {isMobile && <MdOutlineNavigateNext className='h-7 w-7 text-gray-600' />}
//         </div>
//     </a>
// );

// const MobileMenuButton = ({ isOpen, toggleMenu }) => (
//     <button onClick={toggleMenu} className="text-white">
//         {isOpen ? (
//             <div className='flex gap-3 items-center'>
//                 <FaTimes className="h-6 w-6 text-black " />
//                 <a
//                     href="#"
//                     className="bg-gradient-to-r from-blue-500 via-blue-400 to-indigo-500 text-white px-2 py-1 text-sm rounded-sm transition duration-300"
//                 >
//                     Pro
//                 </a>
//             </div>
//         ) : (
//             <div className='flex gap-3 items-center'>
//                 <FaBars className="h-5 w-5 text-black " />
//                 <a
//                     href="#"
//                     className="bg-gradient-to-r from-blue-500 via-blue-400 to-indigo-500 text-white px-2 py-1 text-sm rounded-sm transition duration-300"
//                 >
//                     Pro
//                 </a>
//             </div>
//         )}
//     </button>
// );

// export default function Nav() {
//     const [isOpen, setIsOpen] = useState(false);

//     return (
//         <nav className="bg-gray-100 p-7">
//             <div className="max-w-screen-xl mx-auto flex items-center justify-between">
//                 {/* Logo */}
//                 <div className="text-2xl font-semibold flex items-center">
//                     <MdShowChart className='text-3xl text-blue-500' />
//                     <a href="/" className='text-lg md:text-2xl'>
//                         EXPLODING TOPICS
//                     </a>
//                 </div>

//                 {/* Mobile menu button */}
//                 <div className="md:hidden">
//                     <MobileMenuButton isOpen={isOpen} toggleMenu={() => setIsOpen(!isOpen)} />
//                 </div>

//                 {/* Menu items for desktop and tablet */}
//                 <div className="hidden md:flex space-x-8 items-center">
//                     <NavItem href="#" label="About" />
//                     <NavItem href="#" label="Newsletter" />
//                     <NavItem href="#" label="Blog" />
//                     <a
//                         href="#"
//                         className="bg-gradient-to-r from-blue-500 via-blue-400 to-indigo-500 text-white px-2 py-1 text-sm rounded-sm transition duration-300"
//                     >
//                         Pro
//                     </a>
//                 </div>
//             </div>

//             {/* Mobile menu */}
//             <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
//                 <div className="space-y-4 pt-8">
//                     <NavItem href="#" label="About" isMobile />
//                     <hr />
//                     <NavItem href="#" label="Newsletter" isMobile />
//                     <hr />
//                     <NavItem href="#" label="Blog" isMobile />
//                 </div>
//             </div>
//         </nav>
//     );
// }
'use client'
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { MdShowChart, MdOutlineNavigateNext } from "react-icons/md";

const NavItem = ({ href, label, isMobile }) => (
    <a
        href={href}
        className={`text-gray-600 hover:text-black font-bold ${isMobile ? '' : 'text-sm'}`}
    >
        <div className={`flex justify-between mt-5 md:mt-0 ${isMobile ? 'w-full' : ''}`}>
            {label}
            {isMobile && <MdOutlineNavigateNext className='h-7 w-7 text-gray-600' />}
        </div>
    </a>
);

const MobileMenuButton = ({ isOpen, toggleMenu }) => (
    <button onClick={toggleMenu} className="text-white">
        {isOpen ? (
            <div className='flex gap-3 items-center'>
                <FaTimes className="h-5 w-5 text-black " />
                <a
                    href="#"
                    className="bg-gradient-to-r from-blue-500 via-blue-400 to-indigo-500 text-white px-2 py-1 text-sm rounded-sm transition duration-300"
                >
                    Pro
                </a>
            </div>
        ) : (
            <div className='flex gap-3 items-center'>
                <FaBars className="h-5 w-5 text-black " />
                <a
                    href="#"
                    className="bg-gradient-to-r from-blue-500 via-blue-400 to-indigo-500 text-white px-2 py-1 text-sm rounded-sm transition duration-300"
                >
                    Pro
                </a>
            </div>
        )}
    </button>
);

export default function Nav() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="p-7">
            <div className="max-w-screen-xl mx-auto flex items-center justify-between">
                {/* Logo */}
                <div className="text-2xl font-semibold flex items-center">
                    <MdShowChart className='text-2xl md:3xl text-blue-500' />
                    <a href="/" className='text-lg md:text-2xl'>
                        EXPLODING TOPICS
                    </a>
                </div>

                {/* Mobile menu button */}
                <div className="md:hidden">
                    <MobileMenuButton isOpen={isOpen} toggleMenu={() => setIsOpen(!isOpen)} />
                </div>

                {/* Menu items for desktop and tablet */}
                <div className="hidden md:flex space-x-8 items-center">
                    <NavItem href="#" label="About" />
                    <NavItem href="#" label="Newsletter" />
                    <NavItem href="#" label="Blog" />
                    <a
                        href="#"
                        className="bg-gradient-to-r from-blue-500 via-blue-400 to-indigo-500 text-white px-2 py-1 text-sm rounded-sm transition duration-300"
                    >
                        Pro
                    </a>
                </div>
            </div>

            {/* Mobile menu */}
            <div 
                className={`md:hidden fixed inset-0 bg-white z-50 transition-all duration-500 ease-in-out transform ${isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'}`}
            >
                <div className="flex justify-end p-6">
                    <MobileMenuButton isOpen={isOpen} toggleMenu={() => setIsOpen(!isOpen)} />
                </div>
                <div className="space-y-4 pt-8 px-6">
                    <NavItem href="#" label="About" isMobile />
                    <hr />
                    <NavItem href="#" label="Newsletter" isMobile />
                    <hr />
                    <NavItem href="#" label="Blog" isMobile />
                </div>
            </div>
        </nav>
    );
}
