import React from 'react'

const Notification = ({ message, error}) => {
    const notificationStyle = {
        color: 'green',
        fontSize: 20,
        background: 'lightgrey',
        borderStyle: 'solid',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10
    }

    const errorStyle = {...notificationStyle, color: 'red'}
        // color: 'green',
        // fontSize: 20,
        // background: 'lightgrey',
        // borderStyle: 'solid',
        // borderRadius: 5,
        // padding: 10,
        // marginBottom: 10
    // }


    if (message === null) {
        return null
    }
    if(error===true) {
        return (
            <div style={errorStyle} className="error">
                {message}
            </div>
        )
    }else{
        return (
            <div style={notificationStyle} className="notification">
                {message}
            </div>
        )
    }
}

export default Notification