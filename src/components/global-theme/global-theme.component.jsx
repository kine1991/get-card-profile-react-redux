import React from 'react';

import { useStyles } from './global-theme.styles'




const GlobalThemeComponent = ({children}) => {

    const classes = useStyles();

    return (
        <div className={classes.container}>
            {children}
        </div>
    )
}


export default GlobalThemeComponent;