import React, { useState, Component } from 'react';
import ReactDOM from 'react-dom';
import ReactPlayer from 'react-player';

class Song1 extends React.Component {
	constructor (props) {
  	super(props)
    this.state = {
    	playing: true
    }
  }
  render() {
    return (
    	<div className="{styles.grid}">
        <ReactPlayer
                url="https://youtu.be/IxVuT8cgccM"
                width="100px"
                height="177px"
                playing={this.state.playing}
                playIcon={true}
                controls={true}
                light="https://res.cloudinary.com/louiy9obu/image/upload/v1630689678/1_oywioc.png"
         />
        <button onClick={() => this.setState({ playing: true })}>Play</button>
        <button onClick={() => this.setState({ playing: false })}>Pause</button>
    	</div>
    );
  }
}

export default Song1;