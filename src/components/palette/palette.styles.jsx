import { makeStyles} from '@material-ui/core/styles';

 export const useStyles = makeStyles(theme => {
    return {
    //     paletteComponent: {
    //     // backgroundColor: 'pink',
    //     // maxWidth: '860px',
    //     // margin: 'auto auto',

    //     // display: 'flex',
    //     // justifyContent: 'center',
    //     // alignItems: 'center',
    //     // flexWrap: 'wrap',
        
    //     // boxSizing: "border-box",
    //     // width: "100%",
    //     // display: "grid",
    //     // gridTemplateColumns: "repeat(3, 30%)",
    //     // gridGap: "2.5rem",
    //   },
      paletteContainer: {
        display: 'grid',
        gridTemplateColumns: "repeat(4, 1fr)",
        height: "100vh",
        // marginTop: '-2rem',
        
        [theme.breakpoints.down('sm')]: {
        color: 'green',
        gridTemplateColumns: "repeat(2, 1fr)",
        },
        [theme.breakpoints.down('xs')]: {
        gridTemplateColumns: "repeat(1, 1fr)",
        },

      },
      slider: {
        padding: '2rem',
        width: '500px'
      }
    }
  });