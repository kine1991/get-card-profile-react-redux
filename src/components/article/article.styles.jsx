import { makeStyles } from '@material-ui/core/styles';


export const useStyles = makeStyles(theme => {
    // console.log('art@@ ',theme)
    return {
        container: {
            maxWidth: '860px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            margin: 'auto auto',
            fontSize: '1.3rem',
            textAlign: 'justify',
            fontWeight: '100',
            lineHeight: '1.5',
            wordSpacing: '3px',
            // letterSpacing: '1px',
            fontFamily: 'Roboto'
            // font-family: 'Roboto', sans-serif;
            //   boxShadow: '0 0 10px rgba(0,0,0,0.5)',
            //   height: '5rem'
            //   background: 'red',
    
    
        },
        button: {
            alignSelf: 'flex-start',
            // justifyContent: 'flex-start'
            // alignItems: 'flex-start'
        },
        dateAndUser: {
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            padding: '0 1rem',
            backgroundColor: 'rgba(236, 236, 236, .5)',
        },
        // article: {
        //     // backgroundColor: 'rgba(238, 238, 238, 1)',
        //     // backgroundColor: 'rgba(218, 223, 225, .1)',
    
        //     // backgroundColor: 'rgba(232, 232, 232, 0.5)',
        //     // backgroundColor: 'rgba(242, 241, 239, 1)',
        //     // backgroundColor: 'rgba(210, 215, 211, 1)',
        //     // backgroundColor: 'rgba(232, 236, 241, 1)',
        //     // backgroundColor: 'rgba(243, 241, 239, 1)',
        //     // backgroundColor: 'rgba(243, 241, 239, 1)',
        //     // backgroundColor: 'rgba(236, 236, 236, 1)',
        //     // backgroundColor: 'rgba(210, 215, 211, 1)',
        //     // backgroundColor: 'rgba(236, 240, 241, 1)',
            
        //     // marginBottom: '5rem',
        //     // padding: '2rem',
        //     // borderRadius: '12px',
        //     // boxShadow: '0px 0px 2px rgba(0,0,0,0.3)',
        // },
        // card: {
        //     marginBottom: '5rem'
        // }

    }
});