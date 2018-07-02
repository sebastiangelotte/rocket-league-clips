import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import Modal from 'react-modal'

import Video from './Video'
import { hideModal, showModal } from '../actions/actions'

Modal.setAppElement('#root')

const VideoGrid = ({
  modalIsOpen,
  videos,
  activeVideo,
  openModal,
  closeModal
}) => (
  <div>
    <Grid>
      {
        videos.map(video => (
          <Video id={video.src} src={video.src} onClick={openModal} />
        ))
      }
    </Grid>
    <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
      <Video id={activeVideo.src} src={activeVideo.src} controls />
    </Modal>
  </div>
)

const Grid = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-column-gap: 10px;
  grid-row-gap: 10px;
`

const mapStateToProps = ({ video, modal }) => (
  {
    videos: video.videos,
    activeVideo: video.activeVideo,
    modalIsOpen: modal.isOpen
  }
)

const mapDispatchToProps = dispatch => (
  {
    openModal: src => dispatch(showModal(src)),
    closeModal: () => dispatch(hideModal())
  }
)

export default connect(mapStateToProps, mapDispatchToProps)(VideoGrid)
