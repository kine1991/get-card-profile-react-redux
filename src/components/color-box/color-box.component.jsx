import React from 'react';
import { CopyToClipboard } from "react-copy-to-clipboard";

import { useStyles } from './color-box.styles'

const ColorBoxComponent = ({background, name}) => {
    const [copied, setCopied] = React.useState(false);

    const changeCopyState = () => {
        console.log('ggg')
        setCopied(true);
        setTimeout(() => {
            setCopied(false);
        }, 3500);
    }

    const classes = useStyles({background, copied});
    // console.log(color)
    return (
        <CopyToClipboard  text={background} onCopy={changeCopyState}>
            <div className={classes.colorBoxContainer} style={{backgroundColor: background}}>
                {copied ? <div className={classes.copyButton}>Copied {background}</div> : <div className={classes.copyButton}>Copy</div>}
                
                <p className={classes.title}>{name}</p>
            </div>
        </CopyToClipboard>
    )
}

export default ColorBoxComponent;