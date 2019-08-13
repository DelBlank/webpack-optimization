import React from 'react'
import ReactDom from 'react-dom'
import { getValue } from './utils'
import './index.css'
import './duplicate.css'
import image from './image.jpg'

class App extends React.Component {
  render() {
    return (
      <div>
        {getValue()}

        <img alt="图片" src={image} />
      </div>
    )
  }
}

ReactDom.render(<App />, document.getElementById('root'))
