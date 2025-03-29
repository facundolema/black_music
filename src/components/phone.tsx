import React, { useEffect, useRef } from 'react';
import Record from './record';
import '../styles/phone.css';

export default function Phone() {
  const videoSources = [
    "video-1.mp4",
    "video-2.mp4",
    "video-3.mp4",
  ];

  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    let currentIndex = 0;

    // Set the first video source
    videoElement.src = videoSources[currentIndex];

    // Event listener for when the video ends
    const handleVideoEnd = () => {
      currentIndex += 1;
      if (currentIndex < videoSources.length) {
        videoElement.src = videoSources[currentIndex];
        videoElement.play(); // Play the next video
      }
    };

    videoElement.addEventListener("ended", handleVideoEnd);

    // Cleanup event listener on component unmount
    return () => {
      videoElement.removeEventListener("ended", handleVideoEnd);
    };
  }, []);
  return (
    <Record id={1000} bg="phone">
      <div className="phone-container">
        <h1>EJEMPLOS</h1>
        <div className="phone">
        <video
            ref={videoRef}
            autoPlay
            loop={false}
            muted
            controls
            className="masked-video"
          ></video>
          <img className="phone-mask" src="/phone.svg" alt="" />
          <button
            className="video-control prev-button"
            onClick={() => {
              if (videoRef.current) {
                const currentIndex = videoSources.indexOf(videoRef.current.src.split('/').pop() || '');
                const prevIndex = (currentIndex - 1 + videoSources.length) % videoSources.length;
                videoRef.current.src = videoSources[prevIndex];
                videoRef.current.play();
              }
            }}
          >
            &lt;
          </button>
          <button
            className="video-control next-button"
            onClick={() => {
              if (videoRef.current) {
                const currentIndex = videoSources.indexOf(videoRef.current.src.split('/').pop() || '');
                const nextIndex = (currentIndex + 1) % videoSources.length;
                videoRef.current.src = videoSources[nextIndex];
                videoRef.current.play();
              }
            }}
          >
            &gt;
          </button>
        </div>
      </div>
    </Record>
  )
}