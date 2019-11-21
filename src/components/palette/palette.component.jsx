import React from 'react';
import { useParams } from 'react-router-dom';

import seedColors from '../../utils/data/seedColors';
import ColorBoxComponent from '../color-box/color-box.component';
import { useStyles } from './palette.styles';
import { generatePalette } from '../../utils/colorHelpers';

import chroma from "chroma-js";


const PaletteComponent = () => {
    const {paletteId} = useParams();

    const getSinglePalette = seedColors.find(palette => palette.id === paletteId);
    // console.log('generatePalette')
    generatePalette(getSinglePalette)

    const classes = useStyles();
    // console.log(getSinglePalette.colors)

    const colorBox = getSinglePalette.colors.map(color => (
        <ColorBoxComponent key={color.name} color={color}/>
    ));


    return (
        <div className={classes.paletteComponent}>
            <div className={classes.paletteContainer}>
                {colorBox}
            </div>
            <div style={{display: 'flex', justifyContent: 'space-between', margin: '0', padding: '0', background: 'grey'}}>
                <p className={classes.title} >{getSinglePalette.paletteName}</p>
                <p>{getSinglePalette.emoji}</p>
            </div>
        </div>
    )
}

export default PaletteComponent