import React from 'react'

class App extends React.Component {
  render() {
    return process.env.NODE_ENV === 'production' ? '生产' : '开发'
  }
}

export default App
