import React, { Fragment, useState } from 'react';
import Collapsible from 'react-collapsible';

import Episode from './Episode';
import episodeData from '../assets/data/episodes.json';

// const episodeSampleData = [
//   {
//     title: 'episode 1'
//   },
//   {
//     title: 'episode 2'
//   }
// ];

const EpisodeList = () => {
  const [episodes, setEpisodes] = useState(episodeData
    .sort((a, b) => b.metadata.totalEpisodeNo - a.metadata.totalEpisodeNo)
    // .slice(0, 2)
    );
  
  return (
    <Fragment>
      {episodes.map(ep => (
          <Collapsible className="collapse-closed" openedClassName="collapse-open" transitionTime={200} trigger={`Episode ${ep.metadata.totalEpisodeNo}: ${ep.info.title}`}>
            <Episode episode={ep}/>
          </Collapsible>
        ))}
    </Fragment>
  ); 
};

export default EpisodeList;