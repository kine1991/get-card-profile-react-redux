import React from 'react';

import { useStyles } from './color-box.styles'

const ColorBoxComponent = ({background}) => {

    const classes = useStyles();
    // console.log(color)
    return (
        <div className={classes.colorBoxContainer} style={{backgroundColor: background}}>
            <div className={classes.copyButton}>Copy</div>
        </div>
    )
}

export default ColorBoxComponent;