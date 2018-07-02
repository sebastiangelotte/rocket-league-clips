import React from 'react'
import { connect } from 'react-redux'

import { randomVideo } from '../actions/actions'

const RandomButton = ({ handleClick }) => (
  <button type="button" onClick={handleClick}>
    Random video
  </button>
)

const mapDispatchToProps = dispatch => ({ handleClick: () => dispatch(randomVideo()) })

export default connect(null, mapDispatchToProps)(RandomButton)
