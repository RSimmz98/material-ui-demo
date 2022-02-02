import React from 'react';
import {CssBaseline, Toolbar, Typography,AppBar} from "@mui/material";
import { PhotoCamera } from "@material-ui/icons";

function Navbar() {
  return (
    <div>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <PhotoCamera />
          <Typography variant="h6">Kaptcha</Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar;
/*<div>
        <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <PhotoCamera className={classes.icon} />
          <Typography variant="h6">Kaptcha</Typography>
        </Toolbar>
      </AppBar>
  </div>*/
