import { makeStyles} from '@material-ui/core/styles';

 export const useStyles = makeStyles(theme => {
    // console.log('props Global', theme)
    return {
      container: {
        // backgroundColor: 'pink',
        // color: 'blue',
        backgroundColor: theme.backgroundMain,
        color: theme.colorMain,
        // margin: '0rem',
        // padding: '0',
        minHeight: '100vh',
        width: '100%',
        // padding: '2rem'
        paddingTop: '2rem'
        // marginBottom: '0'
      }
    }
  });


  