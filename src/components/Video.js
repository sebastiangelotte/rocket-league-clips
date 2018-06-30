import React, { Component } from 'react';
import { connect } from 'react-redux'

class Video extends Component {
    render() {
        const { src } = this.props
        console.log(this.props)
        return (
            <div>
                <video key={src} width="100%" height="100%" controls>
                    <source src={src} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {src: state.activeVideo.src}
}

export default connect(mapStateToProps)(Video)
