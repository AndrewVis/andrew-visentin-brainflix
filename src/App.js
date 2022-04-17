import './App.scss';
import Header from './components/Header/Header';
import VideoDetails from "./data/video-details.json";
import Videos from "./data/videos.json";
import Hero from './components/Hero/Hero';
import Comments from './components/SearchBox/SearchBox';
import { Component } from 'react';
import VideoList from './components/VideoList/VideoList';
import Videoplayer from './components/VideoPlayer/VideoPlayer';

class App extends Component {
  state = {
    Videos: Videos,
    VideoDetails: VideoDetails,
    selectedVideo: VideoDetails[0],
  };

  videoSelector = (id) => {
    const newVid = this.state.VideoDetails.find(
      (vid) => vid.id === id);

    this.setState({
      selectedVideo: newVid,
    });
  };

  render() {
    const filteredVids = this.state.Videos.filter(
      (vid) => vid.id !== this.state.selectedVideo.id);

    return (
      <div className="App">
        <Header />
        <Videoplayer videoPlayer={this.state.selectedVideo} />
        <div className="App-container">
          <div className="App__left-container">
            <Hero hero={this.state.selectedVideo} />
            <Comments commentsPosted={this.state.selectedVideo} />
          </div>
          <div className="App__right-container">
            <VideoList Videos={filteredVids} videoSelector={this.videoSelector} />
          </div>
        </div>
      </div>
    );
  }
}



export default App;