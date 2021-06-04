import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import styled from 'styled-components'
import './App.css'
import Day1DrumKit from './Day1DrumKit/Day1DrumKit'
import Day2Clock from './Day2Clock/Day2Clock'

const Ul = styled.ul`
  list-style: none;
  display: flex;
  box-shadow: 0 2px 30px 2px rgb(0 0 0 / 10%);
  margin: 0;
  
  li a {
    display: inline-block;
    padding: 0.9em 0.2em;
    color: #000;
    text-decoration: none;
    text-transform: uppercase;
  }
  li a:hover {
    color: blueviolet;
  }

  li:nth-child(2) a:hover {
    color: skyblue;
  }

  li:nth-child(3) a:hover {
    color: greenyellow;
  }
`
function App() {
  return (
    <>
      <BrowserRouter>
        <div>
          <Ul>
            <li style={{ marginRight: '20px' }}>
              <Link to='/day1-drumkit'>Day1 Drumkit</Link>
            </li>
            <li style={{ marginRight: '20px' }}>
              <Link to='/day2-clock'>Day2 Clock</Link>
            </li>
            <li style={{ marginRight: '20px' }}>
              <Link to='/day3-'>Day3</Link>
            </li>
          </Ul>
        </div>

        <Switch>
          <Route exact path='/day1-drumkit'>
            <Day1DrumKit />
          </Route>
          <Route exact path='/day2-clock'>
            <Day2Clock />
          </Route>

          <Route exact path='*'>
            <h1> Welcome to Javascript 30 day's challange</h1>
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App
