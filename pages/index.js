import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import React, { useState, ReactDOM } from 'react'
import ReactPlayer from 'react-player';
import profilePic from '../assets/1.png'

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

class Drake extends React.Component {
	constructor (props) {
  	super(props)
    this.state = {
    	playing: true,
      black: true,
      value: 0,
      title: [
        "1. Champagne Poetry",
        "2. Papi's Home",
        "3. Girls Want Girls ft. Lil Baby",
        "4. In The Bible ft. Lil Durk and Giveon",
        "5. Love All ft. JAY-Z",
        "6. Fair Trade ft. Travis Scott",
        "7. Way 2 Sexy ft. Future and Young Thug",
        "8. TSU",
        "9. N 2 Deep ft Future",
        "10. Pipe Down",
        "11. Yebba's Heartbreak",
        "12. No Friends In The Industry",
        "13. Knife Talk ft. 21 Savage and Project Pat",
        "14. 7am on Bridle Path",
        "15. Race My Mind",
        "16. Fountains ft. Tems",
        "17. Get Along Better ft. Ty Dolla $ign",
        "18. You Only Live Twice ft. Lil Wayne and Rick Ross",
        "19. IMY2 ft. Kid Cudi",
        "20. Fucking Fans",
        "21. The Remorse"
      ],
      songs: [
        "https://youtu.be/IxVuT8cgccM", // 1
        "https://youtu.be/RJDZBozre1g", // 2
        "https://youtu.be/b8M6N0FTpNc", // 3
        "https://youtu.be/eEdVtJW_PwE", // 4
        "https://youtu.be/Pnz4wbCblmM", // 5
        "https://youtu.be/THVbtGqEO1o", // 6
        "https://youtu.be/vX9msKu75qs", // 7
        "https://youtu.be/fhEqtynX_xc", // 8
        "https://youtu.be/Oh-Al70frOc", // 9
        "https://youtu.be/ZIu-V_xEehs", // 10
        "https://youtu.be/9rlW2rUzyn0", // 11
        "https://youtu.be/_dSN9EaQotw", // 12
        "https://youtu.be/3HFY0xuHybk", // 13
        "https://youtu.be/L6W1_fUurpA", // 14
        "https://youtu.be/bpXztWUPPFQ", // 15
        "https://youtu.be/pwtWYFUwenE", // 16
        "https://youtu.be/84y-jaEiFZU", // 17
        "https://youtu.be/x6Nr6EX3AwY", // 18
        "https://youtu.be/3aYA2dK2L-U", // 19
        "https://youtu.be/EK8aKKeUmmU", // 20
        "https://youtu.be/2_TPmfd02xc", // 21
      ]
    }
  }

  handlePlay = () => {
    console.log('onPlay')
    this.setState({ playing: true })
  }

  handlePause = () => {
    console.log('onPause')
    this.setState({ playing: false })
  }

  handlePlayPause = () => {
    this.setState({ playing: !this.state.playing })
  }
  

  changeColor(){
    this.setState({black: !this.state.black})
  }

  changeVid = (x) => {
    this.setState({value: x})
  }
    

  render() {
    const { playing, value, songs, title } = this.state
    let btn_class = this.state.black ? "blackButton" : "whiteButton";

    return (
    	<div>
        <h1 className={styles.title}>
          CERTIFIED LOVER BOY
        </h1>
        <p class="desc">
              {title[value]}
        </p>
        
        <div className={styles.grid}>
            <MyLink onClick={() => this.changeVid(0)}>
              <img class="avatar" src="https://res.cloudinary.com/louiy9obu/image/upload/v1630689678/1_oywioc.png"></img>
            </MyLink>
            <MyLink onClick={() => this.changeVid(1)}>
              <img class="avatar" src="https://res.cloudinary.com/louiy9obu/image/upload/v1630689678/2_cairzy.png"></img>
            </MyLink>
            <MyLink onClick={() => this.changeVid(2)}>
              <img class="avatar" src="https://res.cloudinary.com/louiy9obu/image/upload/v1630689678/3_gpbnjo.png"></img>
            </MyLink>
            <MyLink onClick={() => this.changeVid(3)}>
              <img class="avatar" src="https://res.cloudinary.com/louiy9obu/image/upload/v1630689678/4_rwzdx1.png"></img>
            </MyLink>
        </div>

        <div className={styles.grid}>
            <MyLink onClick={() => this.changeVid(4)}>
              <img class="avatar" src="https://res.cloudinary.com/louiy9obu/image/upload/v1630689678/5_zoxqyr.png"></img>
            </MyLink>
            <MyLink onClick={() => this.changeVid(5)}>
              <img class="avatar" src="https://res.cloudinary.com/louiy9obu/image/upload/v1630689678/6_x0aani.png"></img>
            </MyLink>
            <MyLink onClick={() => this.changeVid(6)}>
              <img class="avatar" src="https://res.cloudinary.com/louiy9obu/image/upload/v1630689678/7_qbgopl.png"></img>
            </MyLink>
            <MyLink onClick={() => this.changeVid(7)}>
              <img class="avatar" src="https://res.cloudinary.com/louiy9obu/image/upload/v1630689678/8_rd118a.png"></img>
            </MyLink>
        </div>

        <div className={styles.grid}>
            <MyLink onClick={() => this.changeVid(8)}>
              <img class="avatar" src="https://res.cloudinary.com/louiy9obu/image/upload/v1630689678/9_xro0y3.png"></img>
            </MyLink>
            <MyLink onClick={() => this.changeVid(9)}>
              <img class="avatar" src="https://res.cloudinary.com/louiy9obu/image/upload/v1630689678/10_wthnsz.png"></img>
            </MyLink>
            <MyLink onClick={() => this.changeVid(10)}>
              <img class="avatar" src="https://res.cloudinary.com/louiy9obu/image/upload/v1630689678/11_oxrmxg.png"></img>
            </MyLink>
            <MyLink onClick={() => this.changeVid(11)}>
              <img class="avatar" src="https://res.cloudinary.com/louiy9obu/image/upload/v1630689678/12_o2rdxc.png"></img>
            </MyLink>
        </div>

        <div className={styles.grid}>
            <MyLink onClick={() => this.changeVid(12)}>
              <img class="avatar" src="https://res.cloudinary.com/louiy9obu/image/upload/v1630689678/1_oywioc.png"></img>
            </MyLink>
            <MyLink onClick={() => this.changeVid(13)}>
              <img class="avatar" src="https://res.cloudinary.com/louiy9obu/image/upload/v1630689678/2_cairzy.png"></img>
            </MyLink>
            <MyLink onClick={() => this.changeVid(14)}>
              <img class="avatar" src="https://res.cloudinary.com/louiy9obu/image/upload/v1630689678/3_gpbnjo.png"></img>
            </MyLink>
            <MyLink onClick={() => this.changeVid(15)}>
              <img class="avatar" src="https://res.cloudinary.com/louiy9obu/image/upload/v1630689678/4_rwzdx1.png"></img>
            </MyLink>
        </div>

        <div className={styles.grid}>
            <MyLink onClick={() => this.changeVid(16)}>
              <img class="avatar" src="https://res.cloudinary.com/louiy9obu/image/upload/v1630689678/5_zoxqyr.png"></img>
            </MyLink>
            <MyLink onClick={() => this.changeVid(17)}>
              <img class="avatar" src="https://res.cloudinary.com/louiy9obu/image/upload/v1630689678/6_x0aani.png"></img>
            </MyLink>
            <MyLink onClick={() => this.changeVid(18)}>
              <img class="avatar" src="https://res.cloudinary.com/louiy9obu/image/upload/v1630689678/7_qbgopl.png"></img>
            </MyLink>
            <MyLink onClick={() => this.changeVid(19)}>
              <img class="avatar" src="https://res.cloudinary.com/louiy9obu/image/upload/v1630689678/8_rd118a.png"></img>
            </MyLink>
        </div>

        <div className={styles.grid}>
            <MyLink onClick={() => this.changeVid(20)}>
              <img class="avatar" src="https://res.cloudinary.com/louiy9obu/image/upload/v1630689678/9_xro0y3.png"></img>
            </MyLink>
            <MyLink onClick={() => this.changeVid(21)}>
              <img class="avatar" src="https://res.cloudinary.com/louiy9obu/image/upload/v1630689678/10_wthnsz.png"></img>
            </MyLink>
        </div>

        
     <div class="playbtn">
          <button className={btn_class} onClick={this.handlePlayPause}>{playing ? 'PAUSE' : 'PLAY'}</button>
      </div>

      <div class="inv">
        <ReactPlayer
                url={songs[value]}
                width="500px"
                height="500px"
                playing={this.state.playing}
                playIcon={true}
                controls={false}
                light=""
                onReady={() => console.log('onReady')}
                onStart={this.changeColor.bind(this)}
                onPlay={this.handlePlay}
                onPause={this.handlePause}
         />
        </div>
      
    </div>
    );
  }
}

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>CERTIFIED LOVER BOY x INTERACTIVE ALBUM</title>
        <link rel="icon" href="https://res.cloudinary.com/louiy9obu/image/upload/v1630756216/NINTCHDBPICT000676419659_w9dzi5.jpg" />
        <meta name="description" content="Certified Lover Boy album by Drake on an interactive album application."/>
        <meta property="og:title" content="CERTIFIED LOVER BOY x PLAY ALBUM"/>
        <meta property="og:description" content="Play Certified Lover Boy by Drake on an interactive album."/>
        <meta property="og:url" content="https://certifiedloverboy.vercel.app/"/>
        <meta property="og:type" content="website"></meta>

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@letisiapangataa" />
        <meta name="twitter:creator" content="@letisiapangataa" />
        <meta name="twitter:title" content="CERTIFIED LOVER BOY x INTERACTIVE ALBUM" />
        <meta name="twitter:description" content="Play Certified Lover Boy by Drake on an interactive album." />
        <meta name="twitter:image" content="https://res.cloudinary.com/louiy9obu/image/upload/v1630756216/NINTCHDBPICT000676419659_w9dzi5.jpg" />
        

        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:site" content="@letisiapangataa" />
        <meta name="twitter:creator" content="@letisiapangataa"/>
        <meta name="twitter:title" content="CERTIFIED LOVER BOY x INTERACTIVE ALBUM"/>
        <meta name="twitter:description" content="Play Certified Lover Boy by Drake on an interactive album." />
        <meta name="twitter:image" content="https://res.cloudinary.com/louiy9obu/image/upload/v1630756216/NINTCHDBPICT000676419659_w9dzi5.jpg"></meta>

        <meta property="og:url"                content="http://www.nytimes.com/2015/02/19/arts/international/when-great-minds-dont-think-alike.html" />
        <meta property="og:type"               content="article" />
        <meta property="og:title"              content="CERTIFIED LOVER BOY x INTERACTIVE ALBUM" />
        <meta property="og:description"        content="Play Certified Lover Boy by Drake on an interactive album." />
        <meta property="og:image"              content="https://res.cloudinary.com/louiy9obu/image/upload/v1630756216/NINTCHDBPICT000676419659_w9dzi5.jpg" />
      </Head>

      

      <main className={styles.main}>

        <Drake></Drake>

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
