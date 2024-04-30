'use client'

import React, { useRef } from 'react';
import YouTube from 'react-youtube';

const VideoPlayer = () => {
    const playerRef = useRef(null);

    const onReady = (event) => {
        // Mute the player
        event.target.mute();
        event.target.seekTo(15)

        // Start playing the video
        event.target.playVideo();
    };

    const onEnd = (event) => {
        // Restart the video when it ends
        event.target.seekTo(15);
        event.target.playVideo();
    };

    return (
        <YouTube
            videoId="BfrDihJrjbE"
            opts={{
                height: '270',
                width: '170',
                playerVars: {
                    autoplay: 1,
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
