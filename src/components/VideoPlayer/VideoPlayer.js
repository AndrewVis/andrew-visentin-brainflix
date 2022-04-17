import React from 'react'
import '../VideoPlayer/VideoPlayer.scss'


const Videoplayer = (props) => {
    const selectedVideo = props.videoPlayer
    return (
        <div>
            <video controls
                className="hero__video"
                poster={selectedVideo.image}
                src={selectedVideo.video}
            >
            </video>
        </div>
    )
}

export default Videoplayer