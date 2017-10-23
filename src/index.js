import React from 'react';
import ReactDOM from 'react-dom'
import { AppContainer as ReactHotContainer } from 'react-hot-loader'
import App from './app'


const render = Component => {
  ReactDOM.render(
    <ReactHotContainer>
      <Component />
    </ReactHotContainer>,
    document.getElementById('root')
  );
}

render(App)

if (module.hot) {
  module.hot.accept('./app', () => {
    render(App)
  })
}