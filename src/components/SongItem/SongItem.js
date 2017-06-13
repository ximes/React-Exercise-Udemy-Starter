import React, { PropTypes } from 'react';
import styles from './SongItem.css';

const SongItem = (props) => {
  const { songData } = props;
  const albumName = songData.collectionName;
  const albumImage = songData.artworkUrl100;

  return (
    <div className={styles.root}>
      <div className={styles.album}>
        <img role="presentation" src={albumImage} />
        <span className={styles.albumName}>{albumName}</span>
      </div>
      <div className={styles.sondAndDescription}>
        <audio controls duration src={songData.previewUrl} />
        <span className={styles.songDescription}>Name: {songData.trackName}</span>
        <span className={styles.songDescription}>Duration: {songData.trackTimeMillis / 1000} s</span>
      </div>
    </div>
    );
};

SongItem.propTypes = {
  songData: PropTypes.object,
};

export default SongItem;
