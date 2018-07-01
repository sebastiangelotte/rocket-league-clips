import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import Video from './Video'

const VideoGrid = ({ videos }) => (
  <Grid>
    {
      videos.map(video => (
        <Video key={video.src} src={video.src} />
      ))
    }
  </Grid>
)

const Grid = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-column-gap: 10px;
  grid-row-gap: 10px;
`

const mapStateToProps = state => (
  {
    videos: state.videos,
    activeVideo: state.activeVideo
  }
)

export default connect(mapStateToProps)(VideoGrid)
