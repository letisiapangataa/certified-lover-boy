import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import React, { useState, ReactDOM } from 'react'
import Link from 'next/link'
import profilePic from '../assets/1.png'
import ReactPlayer from 'react-player';

class MyLink extends React.Component {
  render () {
    const { onCustomClick, ...props } = this.props
    return <a {...props} onClick={this.handleClick} />
  }

  handleClick = event => {
    if (this.props.onClick) {
      this.props.onClick(event)
    }

    if (this.props.onCustomClick) {
      this.props.onCustomClick(event)
    }
  }
}

class FirstRow extends React.Component {
	constructor (props) {
  	super(props)
    this.state = {
    	playing: true
    }
  }
  render() {
    return (
    	<div className={styles.grid}>
        <ReactPlayer
                url="https://youtu.be/IxVuT8cgccM"
                width="100px"
                height="177px"
                playing={this.state.playing}
                playIcon={true}
                controls={true}
                light="https://res.cloudinary.com/louiy9obu/image/upload/v1630689678/1_oywioc.png"
         />
        {/* <button onClick={() => this.setState({ playing: true })}>Play</button> */}
        <button onClick={() => this.setState({ playing: false })}>Pause</button>
    	</div>
    );
  }
}

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Certified Lover Boy</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <h1 className={styles.title}>
          CERTIFIED LOVER BOY
        </h1>

        <p className={styles.description}>
          Click on each Emoji to Press Play.
        </p>

        <FirstRow></FirstRow>

        <div className={styles.grid}>
            <ReactPlayer
                url="https://youtu.be/IxVuT8cgccM"
                width="100px"
                height="177px"
                playing
                playIcon={true}
                controls={true}
                light="https://res.cloudinary.com/louiy9obu/image/upload/v1630689678/1_oywioc.png"
              />
              <ReactPlayer
                url="https://youtu.be/RJDZBozre1g"
                width="100px"
                height="177px"
                playing
                playIcon={true}
                light="https://res.cloudinary.com/louiy9obu/image/upload/v1630689678/2_cairzy.png"
              />  
              <ReactPlayer
                url="https://youtu.be/b8M6N0FTpNc"
                width="100px"
                height="177px"
                playing
                playIcon={true}
                light="https://res.cloudinary.com/louiy9obu/image/upload/v1630689678/3_gpbnjo.png"
              />  
              <ReactPlayer
                url="https://youtu.be/eEdVtJW_PwE"
                width="100px"
                height="177px"
                playing
                playIcon={true}
                light="https://res.cloudinary.com/louiy9obu/image/upload/v1630689678/4_rwzdx1.png"
              />  
    </div>

    <div className={styles.grid}>
              <ReactPlayer
                url="https://youtu.be/Pnz4wbCblmM"
                width="100px"
                height="177px"
                playing
                playIcon={true}
                light="https://res.cloudinary.com/louiy9obu/image/upload/v1630689678/5_zoxqyr.png"
              />

              <ReactPlayer
                url="https://youtu.be/THVbtGqEO1o"
                width="100px"
                height="177px"
                playing
                playIcon={true}
                light="https://res.cloudinary.com/louiy9obu/image/upload/v1630689678/6_x0aani.png"
              />  
              <ReactPlayer
                url="https://youtu.be/vX9msKu75qs"
                width="100px"
                height="177px"
                playing
                playIcon={true}
                light="https://res.cloudinary.com/louiy9obu/image/upload/v1630689678/7_qbgopl.png"
              />  
              <ReactPlayer
                url="https://youtu.be/fhEqtynX_xc"
                width="100px"
                height="177px"
                playing
                playIcon={true}
                light="https://res.cloudinary.com/louiy9obu/image/upload/v1630689678/8_rd118a.png"
              />  
      </div>
      <div className={styles.grid}>

              <ReactPlayer
                url="https://youtu.be/Oh-Al70frOc"
                width="100px"
                height="177px"
                playing
                playIcon={true}
                light="https://res.cloudinary.com/louiy9obu/image/upload/v1630689678/9_xro0y3.png"
              />

              <ReactPlayer
                url="https://youtu.be/ZIu-V_xEehs"
                width="100px"
                height="177px"
                playing
                playIcon={true}
                light="https://res.cloudinary.com/louiy9obu/image/upload/v1630689678/10_wthnsz.png"
              />  
              <ReactPlayer
                url="https://youtu.be/9rlW2rUzyn0"
                width="100px"
                height="177px"
                playing
                playIcon={true}
                light="https://res.cloudinary.com/louiy9obu/image/upload/v1630689678/11_oxrmxg.png"
              />  
              <ReactPlayer
                url="https://youtu.be/_dSN9EaQotw"
                width="100px"
                height="177px"
                playing
                playIcon={true}
                light="https://res.cloudinary.com/louiy9obu/image/upload/v1630689678/12_o2rdxc.png"
              />  
        </div>

        <div className={styles.grid}>

              <ReactPlayer
                url="https://youtu.be/3HFY0xuHybk"
                width="100px"
                height="177px"
                playing
                playIcon={true}
                light="https://res.cloudinary.com/louiy9obu/image/upload/v1630689678/1_oywioc.png"
              />

              <ReactPlayer
                url="https://youtu.be/L6W1_fUurpA"
                width="100px"
                height="177px"
                playing
                playIcon={true}
                light="https://res.cloudinary.com/louiy9obu/image/upload/v1630689678/2_cairzy.png"
              />  
              <ReactPlayer
                url="https://youtu.be/bpXztWUPPFQ"
                width="100px"
                height="177px"
                playing
                playIcon={true}
                light="https://res.cloudinary.com/louiy9obu/image/upload/v1630689678/3_gpbnjo.png"
              />  
              <ReactPlayer
                url="https://youtu.be/pwtWYFUwenE"
                width="100px"
                height="177px"
                playing
                playIcon={true}
                light="https://res.cloudinary.com/louiy9obu/image/upload/v1630689678/4_rwzdx1.png"
              />  
        </div>

        <div className={styles.grid}>
              <ReactPlayer
                url="https://youtu.be/84y-jaEiFZU"
                width="100px"
                height="177px"
                playing
                playIcon={true}
                light="https://res.cloudinary.com/louiy9obu/image/upload/v1630689678/5_zoxqyr.png"
              />

              <ReactPlayer
                url="https://youtu.be/x6Nr6EX3AwY"
                width="100px"
                height="177px"
                playing
                playIcon={true}
                light="https://res.cloudinary.com/louiy9obu/image/upload/v1630689678/6_x0aani.png"
              />  
              <ReactPlayer
                url="https://youtu.be/3aYA2dK2L-U"
                width="100px"
                height="177px"
                playing
                playIcon={true}
                light="https://res.cloudinary.com/louiy9obu/image/upload/v1630689678/7_qbgopl.png"
              />  
              <ReactPlayer
                url="https://youtu.be/EK8aKKeUmmU"
                width="100px"
                height="177px"
                playing
                playIcon={true}
                light="https://res.cloudinary.com/louiy9obu/image/upload/v1630689678/8_rd118a.png"
              />  
      </div>

        <div className={styles.grid}>

              <ReactPlayer
                url="https://youtu.be/2_TPmfd02xc"
                width="100px"
                height="177px"
                playing
                playIcon={true}
                light="https://res.cloudinary.com/louiy9obu/image/upload/v1630689678/9_xro0y3.png"
              />

        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://letisiapangataa.github.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="https://res.cloudinary.com/louiy9obu/image/upload/v1630505236/moon_dowlid.png"></img>
        </a>
      </footer>
    </div>
  )
}
