const Podcast = require('podcast');
const feedOptions = require('./src/assets/data/feedOptions');
const episodes = require('./src/assets/data/episodes.json');
const fs = require('fs');
const path = require('path');

const feed = new Podcast(feedOptions);

episodes.forEach(ep => {
  feed.addItem({
    title: ep.info.title,
    description: ep.info.description +
      ` Cast: ${ep.info.cast.join(', ')}. Intro music by ${ep.info.introCredits.join(', ')}`,
    url: ep.links.mp3,
    date: ep.metadata.dateReleased,
    // itunesDuration: ???,
    itunesExplicit: true,
  })
})

const xml = feed.buildXml('\t');
fs.writeFileSync(path.join(__dirname, 'static', 'rss', 'podcast.xml'), xml);
