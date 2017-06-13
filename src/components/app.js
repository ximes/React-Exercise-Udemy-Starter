import React, { Component } from 'react';
import SearchBar from './SearchBar/SearchBar';
import SongItem from './SongItem/SongItem';
import SongList from './SongList/SongList';
import searchiTunes from '../utils/searchiTunes';
import styles from './app.css';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      song: '',
      results: {},
      songPosition: 0,
    };
  }

  fetchSongs = () => {
    searchiTunes(this.state.song)
      .then(({ results }) => this.setState({ results })
        );
  }

  render() {
    const { results, songPosition } = this.state;
    return (
      <div className={styles.root}>
        <SearchBar updateText={(song) => this.setState({ song })} fetchSongs={this.fetchSongs} />
        {results.length > 0 && <SongItem songData={results[songPosition]} />}
        {results.length > 0 && <SongList listOfSongs={results} selectSong={(counter) => this.setState({ songPosition: counter })} />}
      </div>
    );
  }
}
