import React from 'react';
import { useParams } from 'react-router-dom';

import Slider from '@material-ui/core/Slider';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import seedColors from '../../utils/data/seedColors';
import ColorBoxComponent from '../color-box/color-box.component';
import { useStyles } from './palette.styles';
import { generatePalette } from '../../utils/colorHelpers';

import chroma from "chroma-js";


const PaletteComponent = () => {
    const {paletteId} = useParams();

    const [level, setLevel] = React.useState(500);
    const [format, setFormat] = React.useState('hex');


    const getSinglePalette = seedColors.find(palette => palette.id === paletteId); // получает определенную палитру в зависимости от paletteId
    const getSinglePaletteByLevel = generatePalette(getSinglePalette).colors[level] // генерирует паоитру в зависимовти от уровня цвета
    // console.log('getSinglePalette', getSinglePalette)
    // console.log('getSinglePaletteByLevel', getSinglePaletteByLevel)
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


    const handleChangeLevel = (e, value) => {
        setLevel(value);
    }
    const handleChangeFormat = (e) => {
        setFormat(e.target.value);
    }

    return (
        <div className={classes.paletteComponent}>
            <div className={classes.headerPalette}>
                <div className={classes.sliderContainer}>
                    <Slider className={classes.slider} step={100} marks min={100} max={900} defaultValue={level} onChange={handleChangeLevel} valueLabelDisplay="auto" />
                    <p>Level:{level}</p>
                </div>
                <FormControl className={classes.selectContainer}>
                    <Select value={format} defaultValue={format} onChange={handleChangeFormat}>
                        {
                            [{name: 'HEX - #000', value: 'hex'}, {name: 'RGB - rgb(0,0,0)', value: 'rgb'}, {name: 'RGBA - rgba(0,0,0, 1.0)', value: 'rgba'}].map(format => (
                                <MenuItem key={format.value} value={format.value}>{format.name}</MenuItem>
                            ))
                        }
                    </Select>
                </FormControl>
            </div>
            <div className={classes.paletteContainer}>
                {colorBox}
            </div>
            <div style={{display: 'flex', justifyContent: 'space-between', margin: '0', padding: '0 1rem', background: 'grey'}}>
                <p className={classes.title} >{getSinglePalette.paletteName}</p>
                <p>{getSinglePalette.emoji}</p>
            </div>
        </div>
    )
}

export default PaletteComponent