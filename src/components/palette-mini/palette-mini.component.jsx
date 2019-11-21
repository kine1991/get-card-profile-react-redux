import React from 'react';
import { withRouter } from "react-router";

import { useStyles } from './palette-mini.styles'

const PaletteMiniComponent = ({palette, history}) => {
    const {emoji, paletteName, colors} = palette
    // console.log(history)

    const classes = useStyles();
    
    const miniColorBoxes = colors.map(color => (
        <div style={{ backgroundColor: color.color }} className={classes.single} key={color.name}/>
    ));

    const goToPalette = (id) => {
        // console.log(id)
        history.push(`/settings/palette/${id}`)
    }

    return (
        <div className={classes.paletteMini} onClick={() => goToPalette(palette.id)}>
            <div className={classes.colors}>{miniColorBoxes}</div>
            <h5 className={classes.title}>
                {paletteName} <span>{emoji}</span>
            </h5>
        </div>
    )
}

export default withRouter(PaletteMiniComponent);



// const miniColorBoxes = colors.map(color => (
//     <div
//       className={classes.miniColor}
//       style={{ backgroundColor: color.color }}
//       key={color.name}
//     />
//   ));
//   return (
//     <div className={classes.root} onClick={this.handleClick}>
//       <DeleteIcon
//         className={classes.deleteIcon}
//         style={{ transition: "all 0.3s ease-in-out" }}
//         onClick={this.deletePalette}
//       />

//       <div className={classes.colors}>{miniColorBoxes}</div>
    //   <h5 className={classes.title}>
    //     {paletteName} <span className={classes.emoji}>{emoji}</span>
    //   </h5>
//     </div>
//   );
