import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => {
  return {
    container: {
      display: 'flex',
      //   justifyContent: 'flex-end',
      alignItems: 'center',
      boxShadow: '0 0 10px rgba(0,0,0,0.5)',
      height: '5rem',
      backgroundColor: theme.backgroundHeader,
      color: theme.colorHeader,

      // color: theme.colorHeader,
      // color: props => props.color,
      // backgroundColor: props => props.isDarkMode ? 'black' : 'green',
      // backgroundColor: props => {
      //   console.log(props)
      //   return props ? 'black' : 'pink'
      // }
    },
    group: {
      display: 'flex',
      listStyleType: 'none'
      // marginLeft: '3rem'
      // justifyContent: 'flex-end'
    },
    list: {
      padding: '2rem'
    },
    link: {
      textDecoration: 'none',
      color: 'black'
    }
  }
})