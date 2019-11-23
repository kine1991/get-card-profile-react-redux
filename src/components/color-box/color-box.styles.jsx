import { makeStyles} from '@material-ui/core/styles';
import chroma from "chroma-js";

 export const useStyles = makeStyles(theme => {
    return {
      colorBoxContainer: {
          position: 'relative',
        // flex: '30%'
        // height: '100%',
        // transform: 'scale(40)'
        // transition: 'all 0.5s ease-out',
        
      },
      copyButton: {
        // border: '1px solid black',
        backgroundColor: 'rgba(255,255,255, 0.3)',
        position: "absolute",
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        // padding: '1rem 2rem',
        // transform: 'scale(2)',
        padding: props => props.copied ? '0': '1rem 2rem',
        height: props => props.copied ? '100%': null,
        width: props => props.copied ? '100%': null,
        // margin: 'auto auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        transition: 'all 0.3s',

        [theme.breakpoints.down('sm')]: {
            padding: '0.5rem 1rem'
        },
        [theme.breakpoints.down('xs')]: {
            padding: '0 2rem'
        },
        color: props => chroma(props.background).luminance() >= 0.7 ? "black" : "white",
        color: props => props.copied ? 'grey': null,
        // fontSize: props => props.copied ? '28px': null,

        //   display: 'flex',
        //   justifyContent: 'center',
        //   alignItems: 'center'
      },
      title: {
        position: "absolute",
        bottom: '0',
        left: '0',
        textTransform: 'uppercase',
        fontSize: '12px',
        paddingLeft: '10px',
        color: props => chroma(props.background).luminance() >= 0.7 ? "black" : "white",
        // backgroundColor: 'rgba(255,255,255, 0.3)',
        // color: props => props.copied ? 'black': 'green' ,
        // transition: 'all 0.5s ease-out',
        
      }
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