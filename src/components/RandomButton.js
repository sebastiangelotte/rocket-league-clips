import React from 'react'
import { connect } from 'react-redux'

import { randomVideo } from "../actions/actions";

const RandomButton = (props) => {
    console.log(props)
    return (
        <button onClick={props.handleClick}>Random video</button>
    )
}

const handleClick = (dispatch) => {

    
    // this.props.dispatch(randomVideo(randomNumber))
}

const mapDispatchToProps = (dispatch) => {
    return { 
        handleClick: () => {
            dispatch(randomVideo(getRandomNumber()))
        }
    }
        
}
 
const getRandomNumber = () => {
    return Math.floor(Math.random() * (5))
}

export default connect(null, mapDispatchToProps)(RandomButton)
