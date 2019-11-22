import React from 'react';
import { useParams } from 'react-router-dom';

import Slider from '@material-ui/core/Slider';

import seedColors from '../../utils/data/seedColors';
import ColorBoxComponent from '../color-box/color-box.component';
import { useStyles } from './palette.styles';
import { generatePalette } from '../../utils/colorHelpers';

import chroma from "chroma-js";


const PaletteComponent = () => {
    const {paletteId} = useParams();

    const [level, setLevel] = React.useState(500);
    const [format, setFormat] = React.useState('hex');

    const getSinglePalette = seedColors.find(palette => palette.id === paletteId);
    const getSinglePaletteByLevel = generatePalette(getSinglePalette).colors[level] // генерирует паоитру в зависимовти от уровня цвета
    console.log('getSinglePalette', getSinglePalette)
    console.log('getSinglePaletteByLevel', getSinglePaletteByLevel)
    // console.log('getSinglePalette', getSinglePalette)
    // console.log('generatePalette', generatePalette(getSinglePalette).colors[level])
    // generatePalette(getSinglePalette)
    // console.log(getSinglePalette.colors)

    const classes = useStyles();

    const colorBox = getSinglePaletteByLevel.map(color => {
        return (
            <ColorBoxComponent
                key={color.name}
                name={color.name}
                background={color[format]}
                // showingFullPalette={false}
                />
        )
    });
    // const colorBox = getSinglePaletteByLevel.map(color => (
    //     <ColorBoxComponent key={color.name} color={color}/>
    // ));

    // function valuetext(value) {
    //     return `${value}°C`;
    // }

    const handleChange = (e, value) => {
        setLevel(value)
        console.log(value)
    }

    return (
        <div className={classes.paletteComponent}>
            <div className={classes.slider}>
                <Slider step={100} marks min={100} max={900} defaultValue={level} onChange={handleChange}
                        // getAriaValueText={valuetext}
                        // aria-labelledby="discrete-slider"
                        valueLabelDisplay="auto"
                        />
            </div>
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