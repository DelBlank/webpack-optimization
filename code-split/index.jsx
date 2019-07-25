import React from 'react'
import AsyncComponent from './AsyncComponent'

const App = () => (
  <AsyncComponent
    loader={() => import(/* webpackChunkName: "SomeComponent" */ './SomeComponent')}
  />
)

export default App
