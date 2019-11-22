import React from 'react';

import { useStyles } from './color-box.styles'

const ColorBoxComponent = ({background, name}) => {

    const classes = useStyles({background});
    // console.log(color)
    return (
        <div className={classes.colorBoxContainer} style={{backgroundColor: background}}>
            <div className={classes.copyButton}>Copy</div>
            {/* {background} */}
            <p className={classes.title}>{name}</p>
        </div>
    )
}

export default ColorBoxComponent;