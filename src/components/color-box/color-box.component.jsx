import React from 'react';

import { useStyles } from './color-box.styles'

const ColorBoxComponent = ({color}) => {

    const classes = useStyles();
    console.log(color)
    return (
        <div className={classes.colorBoxContainer} style={{backgroundColor: color.color}}>
            <div className={classes.copyButton}>Copy</div>
        </div>
    )
}

export default ColorBoxComponent;