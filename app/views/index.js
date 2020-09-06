import React from 'react'
import ReactDOM from 'react-dom'
import Container from './containers'
import eruda from '../utils/eruda'
eruda()

ReactDOM.render(
  <Container.HelloWorld />,
  document.getElementById('root')
)
