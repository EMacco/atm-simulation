import React from 'react'
import ReactDOM from 'react-dom'
import '../stylesheets/application.scss'
import App from '../components/App'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App />,
    document.body.appendChild(document.createElement('div')),
  )
});
