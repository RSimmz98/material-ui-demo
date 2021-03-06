import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) =>({
    container: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(6, 0, 6)
    },
    icon:{
        marginRight:'20px'
    },
    buttons: {
        marginTop:'40px'
    },
    cardGrid: {
       padding: '20px o' 
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },

    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
    footer:{
        backgroundColor: theme.palette.background.paper,
        padding:'50px 0'
    }
  }))

  export default useStyles;