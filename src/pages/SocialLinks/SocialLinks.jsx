import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import { useSnapshot } from 'valtio';
import state from '../../store';
import { gitOne, gitTwo, logo, omniRing } from '../../assets';
import { styles } from '../About/styles';

import './SocialLinks.css';

const SocialLinks = () => {
    const snap = useSnapshot(state);

    if (snap.socialLiks) {
        console.log('yay links true');
        state.intro = true;
        const timer = setTimeout(() => {
            state.intro = false;
            // state.about = true;
        }, 2000);

    }

    const handleClick = () => {

        setTimeout(() => {
            state.socialLiks = false;
            // state.home =  true;
            state.checker = !snap.checker;
        }, 1000)

    }


    return (
        <AnimatePresence>{snap.socialLiks && (
            <>
                <div className={`w-full flex py-4 z-20 bg-primary`} style={{ backgroundColor: 'rgb(23 29 57)' }}>
                    <div className='w-full flex justify-between max-w-7xl mx-auto'>
                        <div className='flex items-center'>

                            <img alt="logo" src={logo} className='w-24 h-24 object-contain' />
                            <p className='text-white text-[18px] font-bold cursor-pointer'>utsav <span className='sm:block hidden'>| Protfolio</span></p>
                        </div>

                        <motion.div
                            whileTap={{ rotate: 90 }}
                            whileHover={{ rotate: 30 }}
                            transition={{
                                duration: .3
                            }}
                            onClick={handleClick} className='flex  mt-6 justify-center  cursor-pointer'>

                            <img style={{ width: '45px', height: '45px', color: '#050816' }} alt="ring" src={omniRing} />

                        </motion.div>

                    </div>

                </div >


                <div className='h-96'>

                    <section className='relative w-full h-screen mx-auto'>
                        <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
                            <div className='flex flex-col justify-center items-center mt-5'>
                                <div className='w-5 h-5 rounded-full bg-[#24870c]' />
                                <div className='w-1 sm:h-80 h-40 violet-gradient' />
                            </div>
                            <div>
                                <h1 className={`${styles.heroHeadText} text-white`}>Social <span className='text-[#41cb32]'>Links</span></h1>
                                <p className={`${styles.heroSubText} mt-2 text-white-100`}></p>
                                Rotate The Watch <br className='sm:hidden' /> And Get The Links
                            </div>

                        </div>
                    </section>




                </div>

                <div className='flex justify-center'>

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-28 gap-y-16 ' >
                        <OmniLinks text={'welcome'} />
                        <OmniLinks text={'welcome'} />
                        <OmniLinks text={'welcome'} />
                        <OmniLinks text={'welcome'} />
                        <OmniLinks text={'welcome'} />
                        <OmniLinks text={'welcome'} />
                        
                    </div>
                </div>
            </>
        )}</AnimatePresence>
    )
}

export default SocialLinks



export function OmniLinks({ text }) {

    const [rotation, setrotation] = useState(80);

    useEffect(() => {
        console.log('inside omnilinks')
        setTimeout(() => {
                setrotation(0);
        },6000)
    }, []);

    console.log(rotation);
    return (
        <div className="watchLinks">
        {rotation>0 ? 
            <div
                className='optionsLinks'>
                <div className='text-white text-[18px] font-bold'><a href ="https://github.com/utsav-07" > <img style={{height : '40px'  ,width : '40px'}} src={gitOne} alt="welcome"/></a></div>
            </div> : ''}
            <div id={rotation > 0 ?`shadowLinks` : ''}></div>
            <motion.div
                whileTap={{ rotate: 80 }}
                transition={{
                    duration: .3
                }}
                onClick={() => setTimeout(()=>{
                        setrotation(80)
                },1000)}
                className="displayLinks"></motion.div>
        </div>
    )
}







