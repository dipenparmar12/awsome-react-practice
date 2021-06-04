import React from 'react'
import styled from 'styled-components'
import './Day2Clock.css'

const Day2Container = styled.div`
  margin: 0;
  background: skyblue;
  background-size: cover;
  background-position: center;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Clock = styled.div`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  border: 15px solid white;
  box-shadow: 0 2px 30px 2px rgb(0 0 0 / 10%);
  padding: 10px;
  border: 20px solid white;
  margin: 10px auto;
  position: relative;

  .hand_hour {
    width: '40%';
  }
`

const Day2Clock = () => {
  const [now, setNow] = React.useState(new Date())

  // let secondsDegrees = (now.getSeconds() / 60) * 360 + 90
  // let minsDegrees = (now.getMinutes() / 60) * 360 + (now.getSeconds() / 60) * 6 + 90
  // let hourDegrees = (now.getHours() / 12) * 360 + (now.getMinutes() / 60) * 30 + 90

  React.useEffect(() => {
    const intervalID = setInterval(() => setNow(new Date()), 1000)
    return () => {
      clearInterval(intervalID)
    }
  }, [setNow])

  return (
    <Day2Container>
      <h3>
        {now.getHours()}:{now.getMinutes()}: {now.getSeconds()}
      </h3>

      <Clock>
        <div
          className='hand_second'
          style={{
            // backgroundColor: 'red',
            width: '45%',
            transform: `rotate(${(now.getSeconds() / 60) * 360 + 90}deg)`,
          }}
        />
        <div
          className='hand_minute'
          style={{
            width: '45%',
            transform: `rotate(${
              (now.getMinutes() / 60) * 360 + (now.getSeconds() / 60) * 6 + 90
            }deg)`,
          }}
        />
        <div
          className='hand_hour'
          style={{
            width: '45%',
            transform: `rotate(${
              (now.getHours() / 12) * 360 + (now.getMinutes() / 60) * 30 + 90
            }deg)`,
          }}
        />
      </Clock>
    </Day2Container>
  )
}

export default Day2Clock

// Src: https://dev.to/olanetsoft/how-to-build-a-ticking-clock-with-react-425f
// https://openclassrooms.com/en/courses/4286486-build-web-apps-with-reactjs/4286711-build-a-ticking-clock-component
