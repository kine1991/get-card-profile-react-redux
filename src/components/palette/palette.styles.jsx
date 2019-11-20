import { makeStyles} from '@material-ui/core/styles';

 export const useStyles = makeStyles(theme => {
    return {
      Palette: {
        // backgroundColor: 'pink',
        maxWidth: '860px',
        margin: 'auto auto',

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        
        // boxSizing: "border-box",
        // width: "100%",
        // display: "grid",
        // gridTemplateColumns: "repeat(3, 30%)",
        // gridGap: "2.5rem",
      },
    }
  });