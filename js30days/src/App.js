import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import styled from 'styled-components'
import Day1DrumKit from './Day1DrumKit/Day1DrumKit'
import Day2Clock from './Day2Clock/Day2Clock'
import Day5Gallery from './Day5Gallery/Day5Gallery'

const Ul = styled.ul`
  list-style: none;
  display: flex;
  box-shadow: 0 2px 30px 2px rgb(0 0 0 / 10%);
  margin: 0;

  li {
    margin-right: 20px;
  }

  li::last-child {
    margin-right: inherit;
  }

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

export const appRoutes = {
  Day1DrumKit: {
    name: 'Day1DrumKit',
    path: `/Day1DrumKit`,
    component: (props) => <Day1DrumKit {...props} />,
  },
  Day2Clock: {
    name: 'Day2Clock',
    path: `/Day2Clock`,
    component: (props) => <Day2Clock {...props} />,
  },
  Day5Gallery: {
    name: 'Day5Gallery',
    path: `/Day5Gallery`,
    component: (props) => <Day5Gallery {...props} />,
  },
}

function App() {
  return (
    <>
      <BrowserRouter>
        <Ul>
          {Object.values(appRoutes).map((route, i) => (
            <li key={'r' + i}>
              <Link to={route.path}>{route.name}</Link>
            </li>
          ))}
        </Ul>
        
        <Switch>
          {Object.values(appRoutes).map((route, i) => (
            <Route key={'Route' + route.path} exact path={route.path} render={route.component} />
          ))}
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App
