import React from 'react';
import { CopyToClipboard } from "react-copy-to-clipboard";

import { useStyles } from './color-box.styles'

const ColorBoxComponent = ({background, name}) => {

    const changeCopyState = () => {
        console.log('ggg')
    }

    const classes = useStyles({background});
    // console.log(color)
    return (
        <CopyToClipboard  text={background} onCopy={changeCopyState}>
            <div className={classes.colorBoxContainer} style={{backgroundColor: background}}>
                <div className={classes.copyButton}>Copy</div>
                {/* {background} */}
                <p className={classes.title}>{name}</p>
            </div>
        </CopyToClipboard>
    )
}

export default ColorBoxComponent;