import React, { PropTypes } from 'react';
import styles from './SongList.css';

const eachSong = (props) => {
  const { artworkUrl100, trackName } = props;
  return (
    <div className={styles.eachSong}>
      <img role="presentation" src={artworkUrl100} className={styles.image} />
      <span className={styles.songDescription}>Name: {trackName}</span>
    </div>
	);
};
eachSong.propTypes = {
  artworkUrl100: PropTypes.object,
  trackName: PropTypes.string,
};

const SongList = (props) => {
  return (
    <div className={styles.root}>

      {props.listOfSongs.map((songData, index) => <div
        key={songData.previewUrl}
        onClick={() => props.selectSong(index)}
      >
      {eachSong(songData)}
      </div>)}
    </div>
  );
};

SongList.propTypes = {
  listOfSongs: PropTypes.array,
  selectSong: PropTypes.func,
};

export default SongList;
