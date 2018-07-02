export const randomVideo = () => (
  {
    type: 'RANDOMIZE'
  }
)

export const showModal = src => (
  {
    type: 'OPEN_MODAL',
    src
  }
)

export const hideModal = () => (
  {
    type: 'CLOSE_MODAL'
  }
)
