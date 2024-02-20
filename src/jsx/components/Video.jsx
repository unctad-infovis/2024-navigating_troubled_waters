import React, {
  useEffect, useRef, useState, useMemo
} from 'react';

// https://www.npmjs.com/package/react-is-visible
import 'intersection-observer';
import { useIsVisible } from 'react-is-visible';

function Video() {
  const containerRef = useRef();
  const videoRef = useRef();
  const mp4Ref = useRef();
  const webmRef = useRef();
  const isVisible = useIsVisible(containerRef);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentDate, setCurrentDate] = useState('1 December 2023');
  const interval = useRef();

  const dates = useMemo(() => ['1 December 2023', '2 December 2023', '3 December 2023', '4 December 2023', '5 December 2023', '6 December 2023', '7 December 2023', '8 December 2023', '9 December 2023', '10 December 2023', '11 December 2023', '12 December 2023', '13 December 2023', '14 December 2023', '15 December 2023', '16 December 2023', '17 December 2023', '18 December 2023', '19 December 2023', '20 December 2023', '21 December 2023', '22 December 2023', '23 December 2023', '24 December 2023', '25 December 2023', '26 December 2023', '27 December 2023', '28 December 2023', '29 December 2023', '30 December 2023', '31 December 2023', '1 January 2024', '2 January 2024', '3 January 2024', '4 January 2024', '5 January 2024', '6 January 2024', '7 January 2024', '8 January 2024', '9 January 2024', '10 January 2024', '11 January 2024', '12 January 2024', '13 January 2024', '14 January 2024', '15 January 2024', '16 January 2024', '17 January 2024', '18 January 2024', '19 January 2024', '20 January 2024', '21 January 2024', '22 January 2024', '23 January 2024', '24 January 2024', '25 January 2024', '26 January 2024', '27 January 2024', '28 January 2024', '29 January 2024', '30 January 2024', '31 January 2024', '1 February 2024', '2 February 2024', '3 February 2024', '4 February 2024', '5 February 2024', '6 February 2024', '7 February 2024', '8 February 2024', '9 February 2024', '10 February 2024', '11 February 2024', '12 February 2024', '13 February 2024', '14 February 2024', '15 February 2024'], []);

  useEffect(() => {
    videoRef.current.src = `${window.location.href.includes('unctad.org') ? 'https://storage.unctad.org/2024-navigating_troubled_waters' : '.'}/assets/vid/2024-navigating_troubled_waters_video.mp4`;
    mp4Ref.current.src = `${window.location.href.includes('unctad.org') ? 'https://storage.unctad.org/2024-navigating_troubled_waters' : '.'}/assets/vid/2024-navigating_troubled_waters_video.mp4`;
    webmRef.current.src = `${window.location.href.includes('unctad.org') ? 'https://storage.unctad.org/2024-navigating_troubled_waters' : '.'}/assets/vid/2024-navigating_troubled_waters_video.webm`;
    videoRef.current.poster = `${window.location.href.includes('unctad.org') ? 'https://storage.unctad.org/2024-navigating_troubled_waters' : '.'}/assets/img/2024-navigating_troubled_waters_video.jpg`;
  }, []);

  useEffect(() => {
    if (isPlaying === true) {
      interval.current = setInterval(() => {
        setCurrentDate(dates[Math.max(0, Math.ceil((77 * videoRef.current.currentTime) / 30.549333) - 1)]);
        if (videoRef.current.ended) {
          clearInterval(interval.current);
        }
      }, 100);
    }
  }, [dates, isPlaying, interval]);

  useEffect(() => {
    if (isVisible === true && videoRef.current.ended === false) {
      videoRef.current.play();
      setIsPlaying(true);
    } else if (isVisible === false && videoRef.current.paused === false) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  }, [isVisible]);

  return (
    <div className="video_container" ref={containerRef}>
      <video muted playsInline controls ref={videoRef} poster="">
        <source src="" type="video/mp4" ref={mp4Ref} />
        <source src="" type="video/webm" ref={webmRef} />
        <track default kind="captions" srcLang="en" src="" />
        Your browser does not support the video tag.
      </video>
      <div className="date">
        <strong>{currentDate}</strong>
      </div>
    </div>
  );
}

export default Video;
