import React from 'react';
//styles

const errorStyle = {
    color: 'red',
    background: 'lightgrey',
    font_size: 20,
    border_style: 'solid',
    border_radius: 5,
    padding: 10,
    margin_bottom: 10
}
const successStyle = {
    color: 'green',
    background: 'lightgrey',
    font_size: 20,
    border_style: 'solid',
    border_radius: 5,
    padding: 10,
    margin_bottom: 10
}



export const Notifications = ( {notification} ) => {
    console.log('notification', notification);

if(notification === null){
    return null
}
    if (notification.includes('ERROR')) {
        return ( 
            <>
                <div style={errorStyle}>
                    {notification}
                 </div>
            <br/>
            </>

        )
    }else{
        return(
            <>
                <div style={successStyle}>
                    {notification}
                 </div>
            <br/>
            </>
            )
    }
}


