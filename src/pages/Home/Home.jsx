import React, { useEffect } from 'react'
import './Home.css';

import { motion, AnimatePresence } from 'framer-motion';
import { useSnapshot } from 'valtio';
import state from '../../store';
import { useState } from 'react';
import Particle from '../../animation/Particle';
import StartPage from '../StartPage/StartPage';

const Home = () => {

    const [rotateValue, setrotateValue] = useState(90);
    const [tapCount, settapCount] = useState(1);
    const [navValue, setnavValue] = useState("");
    const [firstTime, setfirstTime] = useState(true);


    const snap = useSnapshot(state);


    useEffect(() => {
        switch (rotateValue) {
            case 180: setnavValue('About'); break;
            case 270: setnavValue('MyWork'); break;
            case 360: setnavValue('Social Links'); break;
            case 360: setnavValue('New Alien Comming Soon'); break;
            default: setnavValue('')
        }

        if (rotateValue == 450) {
            setrotateValue(90);
        }
    }, [rotateValue]);

    // if (snap.home) {
    //     console.log('yay about true');
    //     state.intro = true;
    //     const timer = setTimeout(() => {
    //         console.log('Timeout called!');
    //         state.intro = false;
    //         // state.about = true;
    //     }, 2000);

    // }


    useEffect(() => {
        state.intro = true;
        console.log("into");
        const timer = setTimeout(() => {
            console.log('inside home');
            state.intro = false;
            state.home = true;
        }, 2000);


        return () => clearTimeout(timer);
    }, [snap.checker]);


    if (snap.home) {
        //check here from loaclstorage value of startPage
        if (firstTime) {
            console.log('firsy time');
              setTimeout(() => (
                state.startPage = false
            ), 13000)
             
        }
    }

    const handleCLick = () => {

        //  state.intro = true;
        state.home = false;
        if (navValue === 'About')
            state.about = true;
        else if (navValue === 'MyWork')
            state.works = true;
        else if (navValue === 'Social Links')
            state.socialLiks = true;
    }


    return (
        <AnimatePresence>

            {snap.home &&
                <>
                    {/* <Particle/> */}
                    {snap.startPage ? <StartPage /> :
                        <>
                            <div className='flex justify-center w-52 mx-16 md:mx-0 md:w-auto'>
                                <p className='headerText mt-10  text-sm md:text-lg lg:text-6xl'>

                                    Choose Your Alien.........
                                </p>
                            </div>

                            <motion.div
                                animate={{
                                    opacity: 1,
                                }}
                                initial={{
                                    opacity: 0
                                }}
                                transition={{
                                    duration: 7
                                }}
                                className='h-screen flex justify-center  items-center'>
                                <div className="watch">
                                    <div className='options'>

                                        <div onClick={handleCLick} style={{ height: '20px', width: '80px' }}>{navValue}</div>

                                    </div>
                                    <div id={rotateValue > 90 ? `shadow` : ''}></div>
                                    <motion.div

                                        whileTap={{ rotate: rotateValue }}
                                        transition={{
                                            duration: .3
                                        }}

                                        onClick={() => setrotateValue(rotateValue + 90)}

                                        className="display"></motion.div>
                                </div>

                              

                            </motion.div>
                        </>}

                </>}
        </AnimatePresence>
    )
}

export default Home