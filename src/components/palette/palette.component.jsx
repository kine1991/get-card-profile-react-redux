import React from 'react';

import seedColors from '../../utils/data/seedColors';
import { useStyles } from './palette.styles';
import PaletteMiniComponent from '../palette-mini/palette-mini.component'

const PaletteComponent = () => {

    React.useEffect(() => {
        // console.log(seedColors)
    }, []);

    const classes = useStyles();

    return (
        <div className={classes.Palette}>
            {
                seedColors.map(palette => (
                    <PaletteMiniComponent palette={palette} key={palette.id}/>
                    // <PaletteMiniComponent className={classes.sub} key={palette.id}/>
                    // <div className={classes.sub} key={palette.id}>
                    // </div>
                ))
            }
        </div>
    )
}


export default PaletteComponent;
