'use client'

import React, { useRef } from 'react';
import YouTube from 'react-youtube';

const VideoPlayer = ({ videoId, value }) => {
    const playerRef = useRef(null);


    const onReady = (event) => {
        // Mute the player

        if (value === 1) {
            event.target.seekTo(15)
            event.target.mute();
            // Start playing the video
            event.target.playVideo();
        }


    };

    const onEnd = (event) => {
        // Restart the video when it ends
        event.target.seekTo(15);
        event.target.playVideo();
    };




    return (
        <YouTube
            videoId={videoId}
            opts={{
                height: '270',
                width: '170',
                playerVars: {
                    autoplay: value,
                    controls: 0,
                },
            }}
            onReady={onReady}
            onEnd={onEnd}
            ref={playerRef}
            className='aspect-video'
        />
    );
};

export default VideoPlayer;
