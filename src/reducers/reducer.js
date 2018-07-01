const initialState = {
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
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'RANDOMIZE': {
      const randomNumber = Math.floor(Math.random() * state.videos.length)
      const active = state.videos[randomNumber]

      return Object.assign({}, state, { activeVideo: active })
    }
    default:
      return state
  }
}

export default reducer
