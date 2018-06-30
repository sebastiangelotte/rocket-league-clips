import React from 'react'
import { connect } from 'react-redux'

const Video = ({ src }) => (
  <div>
    <video key={src} width="100%" height="100%" controls>
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
)

const mapStateToProps = state => ({ src: state.activeVideo.src })

export default connect(mapStateToProps)(Video)
