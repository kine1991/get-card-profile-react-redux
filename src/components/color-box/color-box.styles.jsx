import { makeStyles} from '@material-ui/core/styles';

 export const useStyles = makeStyles(theme => {
    return {
      colorBoxContainer: {
          position: 'relative'
        // flex: '30%'
        // height: '100%',
        
      },
      copyButton: {
        // border: '1px solid black',
        backgroundColor: 'rgba(255,255,255, 0.3)',
        position: "absolute",
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        padding: '1rem 2rem',

        [theme.breakpoints.down('sm')]: {
            padding: '0.5rem 2rem'
        },
        [theme.breakpoints.down('xs')]: {
            padding: '0 2rem'
        },

        //   display: 'flex',
        //   justifyContent: 'center',
        //   alignItems: 'center'
      },
    //   copyButton: {
    //     color: props =>
    //       chroma(props.background).luminance() >= 0.7 ? "rgba(0,0,0,0.6)" : "white",
    //     width: "100px",
    //     height: "30px",
    //     position: "absolute",
    //     display: "inline-block",
    //     top: "50%",
    //     left: "50%",
    //     marginLeft: "-50px",
    //     marginTop: "-15px",
    //     textAlign: "center",
    //     outline: "none",
    //     background: "rgba(255, 255, 255, 0.3)",
    //     fontSize: "1rem",
    //     lineHeight: "30px",
    //     textTransform: "uppercase",
    //     border: "none",
    //     textDecoration: "none",
    //     opacity: 0
    //   },
    }
  });