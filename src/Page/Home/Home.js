import React from 'react';
import Access360 from "../../imgs/access360-white.png"
import valuableClients from "../../imgs/valuable_clients_separator.png"
import access from "../../imgs/access-control_19.png"
import Wpt from "../../imgs/WPT.png"
import Visitor from "../../imgs/Visitor-Pass-icon.png"
import IdCube from "../../imgs/Id-Cube_Product-icons_Aug-12-31.png"
import OilGas from "../../imgs/Oil-Gas-home-image.png"
import GatedCommunity from "../../imgs/Gated-Community-night-banner.png"
import NightView from "../../imgs/night-view-light.png"
import criticalInfrastructure from "../../imgs/critical-infrastructure.jpg"
import Rule from "../../imgs/Rule-based-Access-Control-Solution--469x263.png"
import precision from "../../imgs/precision-access-control-469x263.jpg"
import theRight from "../../imgs/Which-is-the-right-contactless-biometric-for-you-469x263.png"
import publicCloud from "../../imgs/Public-Cloud-Security-Challenges-469x263.jpg"
import MultipleItems from './HomeCarousel ';
import Responsive from './HomeCarousel ';
import AutoPlay from './HomeCarousel ';


const Home = () => {
    return (
        <div>

            {/* first part start*/}

            <div className='bg-black w-full flex items-center justify-center py-32'>
                <div className='flex flex-col items-center justify-center'>
                    <p className='text-white text-4xl'>Empowering Next-Gen</p>
                    <p className='text-orange-400 text-4xl mt-4'>Enterprise Physical Security</p>
                    <p className='text-white text-4xl mt-4'>for Unified & Pre-emptive Risk Management</p>
                    <div>
                        <button className='text-white hover:bg-orange-400 text-whiteborder-solid border-2 border-orange-400 py-2  rounded-3xl px-6 mt-8'>READ MORE</button>
                    </div>
                </div>
                <div className='relative top-16 left-32'>
                    <img className='h-64 w-64' src={Access360} alt="valuable Clients" />
                </div>
            </div>

            {/* first part end*/}

            {/* products section start */}
            <div className=''>
                <div className='flex flex-col items-center justify-center mt-16'>
                    <h1 className='text-2xl font-sans'>Products</h1>
                    <img className='mt-4' src={valuableClients} alt="" />
                    <p className='text-2xl font-sans mt-4'>Challenging the Challenges</p>
                </div>
                <div className='grid grid-cols-4 grid-flow-col gap-4 w-4/5 mx-auto mt-12'>
                    <div>
                        <div className='flex flex-col justify-center items-center'>
                            <img className='w-20 h-20' src={access} alt="" />
                            <h1 className='text-2xl font-sans'>Security Master</h1>
                        </div>
                        <div>
                            <p className='mt-4'>Experience an open platform, multi-lingual web-based, access control application that envelops across diverse entities – employees, contractors, tenants, visitors, vehicles or more.</p>
                        </div>
                    </div>
                    <div>
                        <div className='flex flex-col justify-center items-center'>
                            <img className='w-20 h-20' src={Wpt} alt="" />
                            <h1 className='text-2xl font-sans'>Working Productivity</h1>
                        </div>
                        <p className='mt-4'>Workforce Productivity Tools (WPT) reiterates the idea of employee attendance and absence management in a modern workplace by simplifying the processes and enhancing productivity.</p>
                    </div>
                    <div>
                        <div className='flex flex-col justify-center items-center'>
                            <img className='w-20 h-20' src={Visitor} alt="" />
                            <h1 className='text-2xl font-sans'>Visitor Management</h1>
                        </div>
                        <p className='mt-4'>Manage the entire visitor lifecycle securely and swiftly, from visitor pre-registration to seamless access to a facility utilizing various specialized modules and interfaces.</p>
                    </div>
                    <div>
                        <div className='flex flex-col justify-center items-center'>
                            <img className='w-20 h-20' src={IdCube} alt="" />
                            <h1 className='text-2xl font-sans'>Cloud Access Control</h1>
                        </div>
                        <p className='mt-4'>iNest transforms your physical access control mechanism with its digitally accelerated public cloud platform. Find Mobility and convenience at your disposal with the freedom to access information from anywhere.</p>
                    </div>
                </div>
            </div>
            {/* products section end */}


            {/* Challenging the Challenges start  */}
            <div className='grid grid-cols-4 w-4/5 mx-auto mt-12'>
                <div>
                    <div className='flex flex-col items-center justify-center'>
                        <div className='hover:bg-orange-400'>
                            <img className='rounded-full' src={OilGas} alt="" />
                            <div className='absolute'>
                                <div className='w-2/5 mx-auto relative -top-40 right-40'>
                                    <p className=''>Compliance driven physical security solutions for complete industrial infrastructures
                                    </p>
                                    <button className='hover:bg-orange-400 text-whiteborder-solid border-2 border-orange-400 py-2  rounded-3xl px-6 ml-8'>Read More</button>
                                </div>
                            </div>
                        </div>
                    </div> <p className='text-sm font-bold text-center mt-4'>Oil Extraction & Refineries</p>
                </div>
                <div>
                    <div className='flex flex-col items-center justify-center'>
                        <div className=''>
                            <img className='rounded-full' src={GatedCommunity} alt="" />
                            <div className='absolute'>
                                <div className='w-2/5 mx-auto relative -top-40 right-40'>
                                    <p className=''>Compliance driven physical security solutions for complete industrial infrastructures
                                    </p>
                                    <button className='hover:bg-orange-400 text-whiteborder-solid border-2 border-orange-400 py-2  rounded-3xl px-6 ml-8'>Read More</button>
                                </div>
                            </div>
                        </div>
                    </div> <p className='text-sm font-bold text-center mt-4'>Oil Extraction & Refineries</p>
                </div>
                <div>
                    <div className='flex flex-col items-center justify-center'>
                        <div className=''>
                            <img className='rounded-full' src={NightView} alt="" />
                            <div className='absolute'>
                                <div className='w-2/5 mx-auto relative -top-40 right-40'>
                                    <p className=''>Compliance driven physical security solutions for complete industrial infrastructures
                                    </p>
                                    <button className='hover:bg-orange-400 text-whiteborder-solid border-2 border-orange-400 py-2  rounded-3xl px-6 ml-8'>Read More</button>
                                </div>
                            </div>
                        </div>
                    </div> <p className='text-sm font-bold text-center mt-4'>Oil Extraction & Refineries</p>
                </div>
                <div>
                    <div className='flex flex-col items-center justify-center'>
                        <div className=''>
                            <img className='rounded-full' src={criticalInfrastructure} alt="" />
                            <div className='absolute'>
                                <div className='w-3/6 mx-auto relative -top-44 right-16'>
                                    <p className=''>Compliance driven physical security solutions for complete industrial infrastructures
                                    </p>
                                    <button className='hover:bg-orange-400 text-whiteborder-solid border-2 border-orange-400 py-2  rounded-3xl px-6 ml-6'>Read More</button>
                                </div>
                            </div>
                        </div>
                    </div> <p className='text-sm font-bold text-center mt-4'>Oil Extraction & Refineries</p>
                </div>

            </div>
            {/* Challenging the Challenges End */}

            {/* blog start */}

            <div className='grid grid-cols-4 w-4/5 mx-auto mt-12 gap-6'>
                <div>
                    <img src={Rule} alt="" />
                    <h1 className='font-bold hover:text-orange-400 mt-4'>Rule-Based Access Control</h1>
                    <p className='mt-6'>Most smart access control systems encompass a wide range of security features, which provide the required design flexibility to work?</p>
                    <button className='btn hover:text-orange-400 mt-4'>Read More</button>
                </div>
                <div>
                    <img src={precision} alt="" />
                    <h1 className='font-bold hover:text-orange-400 mt-4'>What is precision access control?</h1>
                    <p className='mt-6'>When it comes to access control, organizations have primarily been focused around the Role-based access control in which the admin</p>
                    <button className='btn hover:text-orange-400 mt-4'>Read More</button>
                </div>
                <div>
                    <img src={theRight} alt="" />
                    <h1 className='font-bold hover:text-orange-400 mt-4'>Which is the right contactless</h1>
                    <p className='mt-6'>The ongoing COVID pandemic has changed existing business practices globally; the access control industry is also experiencing the impact.</p>
                    <button className='btn hover:text-orange-400 mt-4'>Read More</button>
                </div>
                <div>
                    <img src={publicCloud} alt="" />
                    <h1 className='font-bold hover:text-orange-400 mt-4'>Privacy and Security compliance in Cloud Access Control</h1>
                    <p className='mt-6'>Transitioning from on-premise to adopting Access Control as a Service (ACaaS) over the public cloud brings its own set of doubts</p>
                    <button className='btn hover:text-orange-400 mt-4'>Read More</button>
                </div>
            </div>

            {/* blog end */}

            {/* Our Clients start  */}

            <div>
                <AutoPlay></AutoPlay>
            </div>

            {/* Our ClientsEnd */}

        </div >
    );
};

export default Home;