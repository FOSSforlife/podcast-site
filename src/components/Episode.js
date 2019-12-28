import React, { useState, useEffect } from 'react'
import querystring from 'querystring';

const getSoundcloudHtml = async url => {
  const res = await fetch('https://soundcloud.com/oembed?' + querystring.stringify({
    format: 'json',
    url: url
  }));
  const json = await res.json();
  return json;
}

const Episode = ({ episode, source }) => {
  // const soundcloudHtml = { __html: "\u003Ciframe width=\"100%\" height=\"400\" scrolling=\"no\" frameborder=\"no\" src=\"https://w.soundcloud.com/player/?visual=true\u0026url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F729877234\u0026show_artwork=true\"\u003E\u003C/iframe\u003E" }
  // let soundcloudHtml = {__html: ""};
  const [soundcloudHtml, setSoundcloudHtml] = useState({__html: ""})

  useEffect(() => {
    async function fetchData() {
      let data = await getSoundcloudHtml(episode.links.soundcloud);
      // soundcloudHtml = {__html: soundcloudHtml.html};
      setSoundcloudHtml({__html: data.html});
      // console.log(soundcloudHtml);
    }
    fetchData();
  }, [])  

  // const url = "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/729877234&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true";
  return (
    <div className="episode-container">
      <aside> {episode.info.description} </aside>
      <div className="episode-embed" style={{width: '80%', margin: 'auto'}} dangerouslySetInnerHTML={soundcloudHtml}></div>
      <aside style={{fontSize: '16px'}}>
        Cast: {episode.info.cast
        // .map(name => name.split(' ')[0]) // use this if converting from full name
        .join(', ')}
      </aside>
      <aside style={{fontSize: '16px'}}>
        Intro music by {episode.info.introCredits.join(', ')}.
      </aside>
      <aside>
        <a href={episode.links.youtube} target="blank" rel="noreferrer noopener">Listen on YouTube</a>
      </aside>
    </div>
  )
}

export default Episode;