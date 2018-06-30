const initialState = {
    videos: [
        {
            path: '/videos/1.mp4'
        },
        {
            path: '/videos/2.mp4'
        },
        {
            path: '/videos/3.mp4'
        },
        {
            path: '/videos/4.mp4'
        },
        {
            path: '/videos/5.mp4'
        }
    ],
    activeVideo: {
        path: '/videos/1.mp4'
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'RANDOMIZE':
            const active = state.videos[action.payload]
            return Object.assign({}, state, {activeVideo: active})
        default:
            return state
    }
}

export default reducer
