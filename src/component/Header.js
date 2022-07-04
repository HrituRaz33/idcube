import React from 'react';
import { Link } from 'react-router-dom';
import Idcube from "../imgs/IDCUBE-logo200x70.png"



const Header = () => {
    return (
        <header class="lg:px-40 px-6 bg-white flex flex-wrap items-center lg:py-0 py-2">
            <div class="flex-1 flex justify-between items-center">
                <img class="rounded-full w-40 h-10 border-2 border-transparent hover:border-indigo-400" src={Idcube} alt="Andy Leverenz" />
            </div>
            <input class="hidden" type="checkbox" id="menu-toggle" />

            <div class="hidden lg:flex lg:items-center lg:w-auto w-full">
                <nav>
                    <ul class="lg:flex items-center justify-between text-base text-gray-700 pt-4 lg:pt-0">
                        <li><Link class="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-orange-400" to="#">PRODUCTS</Link></li>
                        <li><Link class="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-orange-400" to="#">SOLUTIONS</Link></li>
                        <li><Link class="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-orange-400" to="#">PARTNER</Link></li>
                        <li><Link class="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-orange-400" to="#">SERVICES</Link></li>
                        <li><Link class="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-orange-400" to="#">ABOUT US</Link></li>
                        <li><Link class="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-orange-400" to="#">CONTACT US</Link></li>
                        <li><Link class="p-2 rounded block border-b-2 border-transparent hover:bg-orange-500 bg-orange-400" to="#">DEMO REQUEST</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;