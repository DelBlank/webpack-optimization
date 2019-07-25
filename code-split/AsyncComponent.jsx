import React from 'react'
import PropTypes from 'prop-types'

class AsyncComponent extends React.Component {
  constructor(props) {
    super(props)

    this.state = { Component: null }
  }

  componentDidMount() {
    // 加载组件
    this.props.loader().then(Component => this.setState({ Component }))
  }

  render() {
    const { Component } = this.state
    const { ...props } = this.props

    return Component ? <Component {...props} /> : 'children'
  }
}
AsyncComponent.propTypes = {
  loader: PropTypes.func.isRequired
}

export default AsyncComponent
