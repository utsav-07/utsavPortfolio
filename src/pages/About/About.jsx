import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import { useSnapshot } from 'valtio';
import state from '../../store';
import { logo, omniRing } from '../../assets';
import { styles } from './styles'

import './About.css';




const About = () => {

    const snap = useSnapshot(state);


    // state.intro= true;
    // console.log(snap);

    if (snap.about) {
        console.log('yay about true');
        state.intro = true;
        const timer = setTimeout(() => {
            state.intro = false;
            // state.about = true;
        }, 2000);

    }

    const handleClick = () => {

        setTimeout(() => {
            state.about = false;
            // state.home =  true;
            state.checker = !snap.checker;
        }, 1000)

    }

    return (
        <AnimatePresence>
            {snap.about && (
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
                    <div className='flex h-96 con'>

                        <section className='relative w-full h-screen mx-auto'>
                            <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
                                <div className='flex flex-col justify-center items-center mt-5'>
                                    <div className='w-5 h-5 rounded-full bg-[#24870c]' />
                                    <div className='w-1 sm:h-80 h-40 violet-gradient' />
                                </div>
                                <div>
                                    <h1 className={`${styles.heroHeadText} text-white`}>Hi , I'm <span className='text-[#41cb32]'>Utsav</span></h1>
                                    <p className={`${styles.heroSubText} mt-2 text-white-100`}></p>
                                    As a motivated and ambitious fresher with experience in front-end web development and mobile app development, I am seeking an opportunity to further enhance my skills and knowledge in new technologies. With a Bachelor's degree in Software Engineering, my objective is to contribute my proficiency in developing web and mobile applications to a dynamic organization that encourages learning and growth. I aim to actively participate in challenging projects, collaborate with talented professionals, and continually 
                                    expand my expertise in order to drive innovative solutions and contribute to the success of the organization.
                                </div>

                            </div>
                        </section>

                        <div className='flex justify-end self-end  mx-9 '>

                            <div className="watchNew">
                                <div

                                    className='optionsNew'>

                                    <div

                                        className='text-white text-[18px] font-bold'>welcome</div>

                                </div>
                                <div id={`shadowNew`}></div>
                                <motion.div

                                    whileTap={{ rotate: 80 }}
                                    transition={{
                                        duration: .3
                                    }}

                                    // onClick={() => setrotateValue(rotateValue + 90)}

                                    className="displayNew"></motion.div>
                            </div>
                        </div>

                    </div>


                </>
            )}
        </AnimatePresence>
    )
}

export default About