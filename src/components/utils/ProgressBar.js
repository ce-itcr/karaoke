import React, { Component } from 'react';

import LoadingBar from 'react-top-loading-bar';

export default class ProgressBar extends Component {
  state = {
    loadingBarProgress: 0
  };

  componentDidMount(){
    this.loader();
  }

  add = value => {
    this.setState({
      loadingBarProgress: this.state.loadingBarProgress + value
    });
  };

  complete = () => {
    this.setState({ loadingBarProgress: 100 });
  };

  onLoaderFinished = () => {
    this.setState({ loadingBarProgress: 0 });
  };
  
  loader = () => {
    this.add(10);
    this.add(30);
    this.complete();
  }

  render() {
    return (
      <div>
        <LoadingBar
          progress={this.state.loadingBarProgress}
          height={3}
          color='rgba(29, 185, 84,1)'
          onLoaderFinished={() => this.onLoaderFinished()}
        />
      </div>
    );
  }
}