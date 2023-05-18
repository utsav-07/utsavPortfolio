import React, { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import { useSnapshot } from 'valtio';
import state from '../../store';
import { slideAnimation } from '../../animation/motion';
import { omni1 , omni2 } from '../../assets';

const Intro = () => {

    const snap = useSnapshot(state);
    let widths = screen.width;
  
    useEffect(() => {
        const timer = setTimeout(() => {
            console.log('Timeout called!');
             state.intro = false;
             //state.home = true;
        }, 2000);
        //  return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {snap.intro && (
                <div className='flex  h-screen'>
                    <motion.div
                        {...slideAnimation('left')}
                         style={{ width: widths / 2 }}>
                        <img className='object-cover h-full w-full' src={omni1} />
                    </motion.div>

                    <motion.div
                        {...slideAnimation('right')}
                         style={{ width: widths / 2 }}>
                        <img className='object-cover h-full w-full' src={omni2} />
                    </motion.div>

                </div>
            )}
        </AnimatePresence>
    )
}

export default Intro