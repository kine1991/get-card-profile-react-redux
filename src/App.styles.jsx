import { /*createMuiTheme,*/ makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => {
    console.log('props App', theme)
    return {
      container: {
        backgroundColor: 'brown',
        color: 'blue',
        // backgroundColor: theme.backgroundMain,
        // color: theme.colorMain,
      }
    }
  })