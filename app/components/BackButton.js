import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { routeActions } from 'react-router-redux'

function mapStateToProps(state) {
  return {
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(routeActions, dispatch)
}

class BackButton extends Component {
  static propTypes = {
    goBack: PropTypes.func.isRequired
  }

  static contextTypes = {
    router: React.PropTypes.object.isRequired,
    history: React.PropTypes.object.isRequired
  }

  render() {
    return (
      <button className="btn btn-sm nav-page"
        onClick={() => {
          console.log(this.context.history)
          this.props.goBack()
        }}>
        {this.props.children}
      </button>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BackButton)
