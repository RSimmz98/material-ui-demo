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
  createTheme, 
  ThemeProvider,
  Button,
  CssBaseline,
  Switch,
  Container,
} from "@mui/material";
import useStyles from "../src/styles";
import Copyright from "./components/footer";
import Navbar from "./components/navbar";
import Main from "./components/main";

function App() {
 const [darkMode, setDarkMode] = React.useState(false);

 const theme = createTheme({
  palette: {
    type: darkMode ? "dark" : "light"
  }
 })
 const handleDarkMode = () => {
   setDarkMode(darkMode)
 }
 return(
    <div>
       <ThemeProvider theme={theme}>
         <CssBaseline>
      <Navbar />
      <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
     
          {darkMode ? 'Dark Mode' : 'Light Mode'}
        
      <Main/>
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: "auto",
          backgroundColor: (theme) =>
            theme.palette.mode === "dark"
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
        }}
      >
        <Container maxWidth="sm" align="center">
          <Typography variant="body1">Kaptch Photography</Typography>
          <Copyright />
        </Container>
      </Box>
     
      </CssBaseline>
    </ThemeProvider>
    </div>
  );
}

export default App;
