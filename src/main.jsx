
import React from 'react';
import {
    Typography,
    AppBar,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Grid,
    Box,
    Button,
    Container,
  } from "@mui/material";
  import { makeStyles } from '@material-ui/core/styles';

  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];


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
    }
}))
function Main() {
    
    const classes = useStyles();
  return(
    <main>
    <div className={classes.container}>
      <Container maxWidth="sm">
        <Typography
          variant="h4"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          Photo Album
        </Typography>
        <Typography
          variant="h6"
          align="center"
          color="textSecondary"
          paragraph
        >
          Hello welcome to Kaptcha photography where we showcase our work
          that we have been doing in a long time valentines is very close
          please make sure that you make a booking at available discounts.
        </Typography>
        <div className={classes.buttons}>
          <Grid container spacing={2} justifyContent="center">
            <Grid item>
              <Button variant="contained" color="primary">
                See all photos
              </Button>
            </Grid>
            <Grid item>
              <Button variant="outlined" color="primary">
                Secondary action
              </Button>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
    <Container className={classes.cardGrid} maxwidth="md">
      <Grid container spacing={4}>
        {cards.map((card) => (
          <Grid item key={card} xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.cardMedia}
                image="https://source.unsplash.com/random"
                title="Image title"
              />
              <CardContent className={classes.CardContent}>
                <Typography gutterBottom variant="h5">
                  Heading
                </Typography>
                <Typography>
                  This is media card. You can use whatever that you want
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">
                  View
                </Button>
                <Button size="small" color="primary">
                  View
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  </main>
  )
}

export default Main;

