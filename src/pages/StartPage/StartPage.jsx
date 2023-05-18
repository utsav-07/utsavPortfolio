import React from 'react'
import { startVideo } from '../../assets'
import ReactPlayer from 'react-player'
import './StartPage.css';

const StartPage = () => {
    return (
      

            <div className='videoContainer   h-screen flex items-center justify-center' >
                {/* <ReactPlayer
    
        playing 
        
        url ={startVideo}
    /> */}
                <video className='w-full  videoContainer' autoPlay muted>
                    <source  src={startVideo} type="video/mp4" />
                    
                    Your browser does not support the video tag.
                </video>
            </div>
       
    )
}

export default StartPage