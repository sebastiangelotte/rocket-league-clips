import React from 'react'
import styled from 'styled-components'

const Video = ({
  src,
  id,
  onClick,
  controls
}) => (
  <VideoWrapper key={id}>
    <SingleVideo
      width="100%"
      onClick={onClick !== undefined ? () => onClick(src) : ''}
      controls={controls}
    >
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </SingleVideo>
  </VideoWrapper>
)

const VideoWrapper = styled.div`
  background-color: #ff0069;
`
const SingleVideo = styled.video`
  display: block;
`

export default Video
