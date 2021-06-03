import React from 'react'
import styled from 'styled-components'
import './Day1DrumKit.css'

const Day1DrumKitWrapper = styled.div`
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  font-size: 10px;
  /* background: url('https://www.onholdinc.com/mohblog/wp-content/uploads/2019/09/music-news.jpg'); */
  background: blueviolet;
  background-size: cover;
  background-position: center;
  height: 100vh;
  width: 100vw;
`
const KeyContainer = styled.div`
  display: flex;
  flex: 1;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
`
const KeyBox = styled.div`
  border: 0.4rem solid black;
  border-radius: 0.5rem;
  margin: 1rem;
  font-size: 1.5rem;
  padding: 1rem 0.5rem;
  transition: all 0.07s ease;
  width: 10rem;
  text-align: center;
  color: white;
  background: rgba(0, 0, 0, 0.4);
  text-shadow: 0 0 0.5rem black;
`
const Sound = styled.span`
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  color: #ffc600;
`
const keyboxs = [
  {
    dataKey: 65,
    kbd: 'A',
    soundName: 'CLAP',
    src: 'https://github.com/wesbos/JavaScript30/blob/master/01%20-%20JavaScript%20Drum%20Kit/sounds/clap.wav?raw=true',
  },
  {
    dataKey: 83,
    kbd: 'S',
    soundName: 'HIHAT',
    src: 'https://github.com/wesbos/JavaScript30/blob/master/01%20-%20JavaScript%20Drum%20Kit/sounds/hihat.wav?raw=true',
  },
  {
    dataKey: 68,
    kbd: 'D',
    soundName: 'KICK',
    src: 'https://github.com/wesbos/JavaScript30/blob/master/01%20-%20JavaScript%20Drum%20Kit/sounds/kick.wav?raw=true',
  },
  {
    dataKey: 70,
    kbd: 'F',
    soundName: 'OPENHAT',
    src: 'https://github.com/wesbos/JavaScript30/blob/master/01%20-%20JavaScript%20Drum%20Kit/sounds/openhat.wav?raw=true',
  },
  {
    dataKey: 71,
    kbd: 'G',
    soundName: 'BOOM',
    src: 'https://github.com/wesbos/JavaScript30/raw/master/01%20-%20JavaScript%20Drum%20Kit/sounds/boom.wav',
  },
  {
    dataKey: 72,
    kbd: 'H',
    soundName: 'RIDE',
    src: 'https://github.com/wesbos/JavaScript30/blob/master/01%20-%20JavaScript%20Drum%20Kit/sounds/ride.wav?raw=true',
  },
  {
    dataKey: 74,
    kbd: 'J',
    soundName: 'SNARE',
    src: 'https://github.com/wesbos/JavaScript30/blob/master/01%20-%20JavaScript%20Drum%20Kit/sounds/snare.wav?raw=true',
  },
  {
    dataKey: 75,
    kbd: 'k',
    soundName: 'TOM',
    src: 'https://github.com/wesbos/JavaScript30/blob/master/01%20-%20JavaScript%20Drum%20Kit/sounds/tom.wav?raw=true',
  },
  {
    dataKey: 76,
    kbd: 'L',
    soundName: 'TINK',
    src: 'https://github.com/wesbos/JavaScript30/blob/master/01%20-%20JavaScript%20Drum%20Kit/sounds/tink.wav?raw=true',
  },
]

const Day1DrumKit = () => {
  const keyPressedUseCallBack = React.useCallback((e) => {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`)

    if (!audio) return
    key.classList.add('playing')
    audio.currentTime = 0
    audio.play()
  }, [])

  React.useEffect(() => {
    // document.body.addEventListener('keydown', (e) => {
    //   console.log('Day1DrumKit.js::[114]', e ) // keyboard keycode check
    // })

    document.body.addEventListener('keydown', keyPressedUseCallBack)
    return () => {
      document.body.removeEventListener('keydown', keyPressedUseCallBack)
    }
  }, [keyPressedUseCallBack])

  const removeTransition = (e) => {
    if (e.propertyName !== 'transform') return
    e.target.classList.remove('playing')
  }

  React.useEffect(() => {
    const keys = Array.from(document.querySelectorAll('.key'))
    keys.forEach((key) => key.addEventListener('transitionend', removeTransition))
    return () => {
      keys.forEach((key) => key.removeEventListener('transitionend', removeTransition))
    }
  }, [])

  return (
    <>
      <Day1DrumKitWrapper>
        <KeyContainer>
          {keyboxs.map((elem, i) => (
            <KeyBox data-key={elem.dataKey} className={'key'} key={i}>
              <kbd>{elem.kbd}</kbd>
              <Sound>{elem.soundName}</Sound>
            </KeyBox>
          ))}
        </KeyContainer>

        {keyboxs.map((elem, i) => (
          <audio data-key={elem.dataKey} src={elem.src} key={i} />
        ))}
      </Day1DrumKitWrapper>
    </>
  )
}

export default Day1DrumKit

// Src: https://github.com/wesbos/JavaScript30/tree/master/01%20-%20JavaScript%20Drum%20Kit/sounds
