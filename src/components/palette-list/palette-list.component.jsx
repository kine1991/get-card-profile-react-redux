import React from 'react';

import seedColors from '../../utils/data/seedColors';
import { useStyles } from './palette-list.styles';
import PaletteMiniComponent from '../palette-mini/palette-mini.component';

const PaletteListComponent = () => {

    React.useEffect(() => {
        // console.log(seedColors)
    }, []);

    const classes = useStyles();

    return (
        <div className={classes.paletteList}>
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


export default PaletteListComponent;
