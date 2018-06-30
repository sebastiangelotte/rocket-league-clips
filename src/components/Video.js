import React, { Component } from 'react';
import { connect } from 'react-redux'

class Video extends Component {
    render() { 
        console.log(this.props.path)
        return (
            <div>
                <video key={this.props.path} width="100%" height="100%" controls>
                    <source src={this.props.path} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {path: state.activeVideo.path}
}

export default connect(mapStateToProps)(Video)
