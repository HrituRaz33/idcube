import React from 'react';
import Picture1 from "../imgs/DSC_0337-35x35.jpg"
import Picture2 from "../imgs/RVF0404-35x35.jpg"
import Picture3 from "../imgs/team-35x35.jpg"
import Picture4 from "../imgs/WhatsApp-Image-2022-05-24-at-12.58.37-PM-35x35.jpeg"
import { FaTwitter, FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';



const Footer = () => {
    return (
        <div className='grid grid-cols-4 w-4/5 mx-auto mt-12'>
            <div>
                <div>
                    <h1 className='text-xl font-bold uppercase'>Quick links</h1>
                    <p className='hover:text-orange-400 mt-4'>Products</p>
                    <p className='hover:text-orange-400 mt-2'>Access and calculator</p>
                    <p className='hover:text-orange-400 mt-2'>Apeture calculator</p>
                    <p className='hover:text-orange-400 mt-2'>Find camera</p>
                    <p className='hover:text-orange-400 mt-2'>Camera by brand</p>
                    <p className='hover:text-orange-400 mt-2'>Contact us</p>
                    <p className='hover:text-orange-400 mt-2'>Career</p>
                    <p className='hover:text-orange-400 mt-2'>FAQ</p>
                    <p className='hover:text-orange-400 mt-2'>Terms of service</p>
                    <p className='hover:text-orange-400 mt-2'>Privacy and security</p>
                    <p className='hover:text-orange-400 mt-2'>Sitemap</p>
                </div>
            </div>
            <div>
                <div>
                    <h1 className='text-xl font-bold uppercase'>News & event Gallery</h1>
                    <div className='mt-4'>
                        <div className='flex mt-4'>
                            <img src={Picture1} alt="" />
                            <div className='ml-4'>
                                <p>IDCUBE @Milipol Qatar</p>
                                <p>June 7,2022</p>
                            </div>
                        </div>
                        <div className='flex mt-4'>
                            <img src={Picture2} alt="" />
                            <div className='ml-4'>
                                <p>#WeConnect @Bangalore</p>
                                <p>June 7,2022</p>
                            </div>
                        </div>
                        <div className='flex mt-4'>
                            <img src={Picture3} alt="" />
                            <div className='ml-4'>
                                <p>FSAI PACC 2022</p>
                                <p>March 22,2022</p>
                            </div>
                        </div>
                        <div className='flex mt-4'>
                            <img src={Picture4} alt="" />
                            <div className='ml-4'>
                                <p>	Intersec 2022, Dubai</p>
                                <p>February 11, 2022</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className='w-11/12'>
                    <h1 className='text-xl font-bold'>Recent Tweet</h1>
                    <p className='mt-4'>On the occasion of India’s 73rd Republic Day, let us celebrate the glory of our nation and share the pride of being… <span className='hover:text-orange-400'>https://t.co/kh1sfTktPq</span></p>
                    <div className='flex items-center'>
                        <FaTwitter className='text-gray-400 mr-2' />
                        <p className='text-gray-400'>152 days ago</p>
                    </div>


                    <p className='mt-4'>Last day of #Intersec2022! Had a successful event so far! Didn't get time to visit us yet? Don't worry; we are stil… <span className='hover:text-orange-400'>https://t.co/CzoelTDO9w</span></p>
                    <div className='flex items-center'>
                        <FaTwitter className='text-gray-400 mr-2' />
                        <p className='text-gray-400'>160 days ago</p>
                    </div>


                    <p className='mt-4'>Housefull show for #day2 at Intersec Expo 2022! We are overwhelmed to see such a huge crowd at our #booth - S1 - D3… <span className='hover:text-orange-400'>https://t.co/02Wr2KjeEn</span></p>
                    <div className='flex items-center'>
                        <FaTwitter className='text-gray-400 mr-2' />
                        <p className='text-gray-400'>160 days ago</p>
                    </div>


                </div>
            </div>
            <div>
                <div>
                    <h1 className='text-xl font-bold'>Connect With Us</h1>
                    <p className='mt-4'>IDCUBE Identification Systems (P) Ltd.</p>
                    <p className='mt-4'>Locations: USA | UAE | INDIA | MALAYSIA</p>
                    <p className='mt-4'>Tel: +(91)-(120)-4130715</p>
                    <p className='mt-4'>E-mail: contact@idcubesystems.com</p>
                    <div className='flex mt-6'>
                        <FaFacebookF className='text-2xl hover:text-orange-400' />
                        <FaTwitter className='text-2xl hover:text-orange-400  ml-4' />
                        <FaInstagram className='text-2xl hover:text-orange-400  ml-4' />
                        <FaYoutube className='text-2xl hover:text-orange-400  ml-4' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;