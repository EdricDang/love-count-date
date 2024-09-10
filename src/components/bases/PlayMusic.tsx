"use client";

import React, { useRef, useState, useEffect } from "react";
import IconifyIcon from "../icon";

const PlayMusic: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFirstClick, setIsFirstClick] = useState(true);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    const button = document.querySelector('.pulse-background');
    const notification = document.querySelector('.slide-expand');
    
    if (isFirstClick) {
      // Start playing music on first click anywhere on the screen
      if (audioRef.current && !isPlaying) {
        audioRef.current.play();
        setIsPlaying(true);
      }
      setIsFirstClick(false);
    } else {
      // Only toggle play if the click is on the button or notification
      if (button && button.contains(target) || notification && notification.contains(target)) {
        togglePlay();
      }
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isFirstClick, isPlaying]);

  return (
    <div className="fixed flex items-center left-8 bottom-8 z-10">
      <button
        onClick={togglePlay}
        className={`pulse-background flex items-center justify-center w-[46px] h-[46px] bg-[#df4758] rounded-[50%] z-20`}
      >
        {isPlaying ? (
          <IconifyIcon icon="bi:volume-up-fill" color="#ffffff" fontSize={30} />
        ) : (
          <IconifyIcon
            icon="bi:volume-mute-fill"
            color="#ffffff"
            fontSize={30}
          />
        )}
      </button>
      <div
        onClick={togglePlay}
        className="bg-white h-[45px] flex items-center justify-center px-5 pl-8 ml-[-20px] z-10 border border-[#df4758] cursor-pointer slide-expand"
        style={{
          borderTopRightRadius: "20px",
          borderBottomRightRadius: "20px",
        }}
      >
        Nhấn vào đây để phát nhạc
      </div>
      <audio ref={audioRef} src="/music/I-Do-911.mp3" />
    </div>
  );
};

export default PlayMusic;
