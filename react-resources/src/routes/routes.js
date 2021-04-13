import ChatApp from '../concepts/ChatApp'
import ReactReduxApp from '../concepts/ReactReduxApp'
import ReduxSaga from '../concepts/ReduxSaga'
import WebSocket from '../concepts/WebSocket'
import HashRouteExample from '../Route/HashRouteExample'
import RouteExample from '../Route/RouteExample'

const routes = {
  root: {
    name: 'Home',
    path: '/home',
    render: (props) => <p> React Home </p>,
  },

  redux: {
    name: 'react-redux',
    path: '/redux',
    render: (props) => <ReactReduxApp {...props} />,
  },

  reduxSaga: {
    name: 'reduxSaga',
    path: '/redux/saga',
    render: (props) => <ReduxSaga {...props} />,
  },

  routeExample: {
    name: 'Route example',
    path: '/app/routes',
    render: (props) => <RouteExample {...props} />,
  },

  hasRoute: {
    name: 'Hash Routes',
    path: '/app/hash-route',
    render: (props) => <HashRouteExample {...props} />,
  },

  webSocket: {
    name: 'Web-Socket',
    path: '/webSocket',
    render: (props) => <WebSocket {...props} />,
  },

  chatApp: {
    name: 'Chat App',
    path: '/chat',
    render: (props) => <ChatApp {...props} />,
  },

  test: {
    name: 'testing',
    path: '/test/:component?',
    render: (props) => <p> Testing </p>,
  },
}

export default routes
