import { makeStyles} from '@material-ui/core/styles';

 export const useStyles = makeStyles(theme => {
    return {
      paletteMini: {
          flex: '25%',
          border: '1px solid black',
          height: '200px',
          borderRadius: '5px',
          margin: '10px',
          padding: '10px',
      },
      single: {
        //   width: '19px',
        height: '40px',
        flex: '20%'
      },
      colors: {
        display: 'flex',
        flexWrap: 'wrap',
        borderRadius: '5px',
        // border: '1px solid white',
        overflow: "hidden"
      },
      title: {
          display: 'flex',
          justifyContent: 'space-between'
      }
    }
  });