import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    container: {
      display: 'flex',
    //   justifyContent: 'flex-end',
      alignItems: 'center',
      boxShadow: '0 0 10px rgba(0,0,0,0.5)',
      height: '5rem'
      // background: 'red'
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
  });