import React from 'react'
import './video.css'

const Video = () => {
  return (
    <>
    <div className="video-container">
      <div className="video-card">
        <div className="video-text">
          <p className='video-title'>Checa nuestro video</p>
            </div>
            <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/df__5RAn6Ok?si=IGhBLWrhpZFvHUAr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
    </div>
    </>
  )
}

export default Video