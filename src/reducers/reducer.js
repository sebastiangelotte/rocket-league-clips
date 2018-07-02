const initialState = {
  video: {
    videos: [
      {
        src: '/videos/1.mp4'
      },
      {
        src: '/videos/2.mp4'
      },
      {
        src: '/videos/3.mp4'
      },
      {
        src: '/videos/4.mp4'
      },
      {
        src: '/videos/5.mp4'
      }
    ],
    activeVideo: {
      src: '/videos/1.mp4'
    }
  },
  modal: {
    isOpen: false
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'RANDOMIZE': {
      const randomNumber = Math.floor(Math.random() * state.videos.length)
      const active = state.videos[randomNumber]

      return Object.assign({}, state, { video: { activeVideo: active } })
    }

    case 'OPEN_MODAL': {
      return {
        ...state,
        modal: { isOpen: true },
        video: { ...state.video, activeVideo: { src: action.src } }
      }
    }

    case 'CLOSE_MODAL': {
      return {
        ...state,
        modal: { isOpen: false }
      }
    }

    default:
      return state
  }
}

export default reducer
