import "./bgvideo.css";
import React, { useRef, useEffect } from 'react';
function Bgvideo(){

    const videoRef = useRef(null);

    useEffect(() => {
      if (videoRef.current) {
        videoRef.current.play(); // Automatically plays the video
      }
    }, []);
  
    return (
      <div style={{marginLeft:"-114px"}}>
        <video ref={videoRef} autoPlay loop muted width="600" height="450" >
          <source src="/images/vid1.mp4" type="video/mp4" />
   
        </video>
        
      </div>
    );
}
export default Bgvideo;