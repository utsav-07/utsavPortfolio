import React from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import { useSnapshot } from 'valtio';
import state from '../../store';
import { logo, omniRing } from '../../assets';
import { styles } from '../About/styles';
import { Tilt } from 'react-tilt';
import './MyWork.css';
import { fadeIn } from '../../animation/motion';
import { Works } from './work';

const WorkCard = ({ index, title, icon, about, link }) => {
    console.log(title);
    return (
        <Tilt className='xs:w-[250px] w-full'>
            <motion.div variants={fadeIn("right", "spring", 0.5 * index, 0.75)} className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
                <div
                    options={{
                        max: 45,
                        scale: 1,
                        speed: 450
                    }}
                    className="bg-tertiary rounded-[20px] py-5  px-12  min-h-[280px] flex justify-evenly items-center flex-col"
                >

                    <img src={icon} alt={title} className="w-16 h-26 object-contain" />
                    <h3 className='text-white  text-[20px] font-bold text-center' >{title}</h3>
                    <h3 className='text-white  text-[15px] font-bold text-center' >{about}</h3>
                    <a href={link}>Click Here To See </a>
                </div>
            </motion.div>
        </Tilt>
    )
}


const MyWork = () => {

    const snap = useSnapshot(state);

    if (snap.works) {
        console.log('yay work true');
        state.intro = true;
        const timer = setTimeout(() => {
            state.intro = false;
            // state.about = true;
        }, 2000);

    }

    const handleClick = () => {
        state.works = false;
        // state.home =  true;
        state.checker = !snap.checker;
    }


    return (
        <AnimatePresence>
            {snap.works && (
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


                    <div>
                        <section className='relative w-full h-[500px] mx-auto'>
                            <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
                                <div className='flex flex-col justify-center items-center mt-5'>
                                    <div className='w-5 h-5 rounded-full bg-[#24870c]' />
                                    <div className='w-1 sm:h-80 h-40 violet-gradient' />
                                </div>
                                <div>
                                    <h1 className={`${styles.heroHeadText} text-white`}>My <span className='text-[#41cb32]'>Projects</span></h1>
                                    <p className={`${styles.heroSubText} mt-2 text-white-100`}></p>
                                    See What My<br className='sm:hidden' /> Alien Have Done
                                </div>

                            </div>
                        </section>
                    </div>

                    <div className='flex flex-col md:flex-row gap-10 mx-16'>
                        {Works.map((work, index) => {
                            return (
                                <WorkCard key={work.title} index={index}{...work} />
                            )
                        })}
                    </div>

                    <div>
                        <h1 className={`${styles.heroHeadText} text-white`}>More To  <span className='text-[#41cb32]'>Come</span></h1>
                    </div>

                </>
            )}
        </AnimatePresence>
    )
}

export default MyWork