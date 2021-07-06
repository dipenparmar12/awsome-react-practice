// import ChatApp from '../concepts/ChatApp'
import ReactReduxApp from '../concepts/ReactReduxApp'
import ReduxSaga from '../concepts/ReduxSaga'
import WebSocket from '../concepts/WebSocket'
// import HashRouteExample from '../Route/HashRouteExample'
import RouteExample from '../Route/RouteExample'
import GoogleLogin from '../concepts/google-login/GoogleLogin'
import CollapseExample from '../concepts/collapsed/CollapseExample'
import ChatApp from '../concepts/chatapp'
import GoogleCharts from '../concepts/google_charts/GoogleCharts';
import CssModal from '../css_examples/css_popup/CssModal';

const routes = {
  root: {
    name: 'Home',
    path: '/home',
    render: (props) => <p> React Home </p>,
  },

  // hasRoute: {
  //   name: 'Hash Routes',
  //   path: '/app/hash-route',
  //   render: (props) => <HashRouteExample {...props} />,
  // },

  reduxSagaStore: {
    name: 'GoogleLogin',
    path: '/SagaStore',
    render: (props) => <GoogleLogin {...props} />,
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

  chatApp: {
    name: 'Chat App',
    path: '/chat',
    render: (props) => <ChatApp {...props} />,
  },

  webSocket: {
    name: 'Web-Socket',
    path: '/webSocket',
    render: (props) => <WebSocket {...props} />,
  },

  tesCollapsedt: {
    name: 'Collapsed',
    path: '/Collapsed',
    render: (props) => <CollapseExample />,
  },

  test: {
    name: 'testing',
    path: '/test/:component?',
    render: (props) => <p> Testing </p>,
  },

  google_chart: {
    name: 'google_chart',
    path: '/google_chart',
    render: (props) => <GoogleCharts {...props}/>,
  },

  CssPop: {
    name: 'css_popup',
    path: '/css_popup',
    render: (props) => <CssModal {...props}/>,
  },
}

export default routes
