import React from 'react'

const Episode = ({ episode, source }) => {

  return (
    <div className="episode-container">
      <iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/729877234&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
      {/* <small style={{margin: '0'}}>Or listen on YouTube</small> */}
    </div>
  )
}

export default Episode;