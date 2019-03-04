import React, { Component } from 'react';
import MiniDrawer from './components/MiniDrawer'
//mport SignInPage from './components/SignInPage'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import './App.css';



const font = "'Karla', sans-serif"; 

const theme = createMuiTheme({
  
  typography: {
    fontFamily: font,
  },
    palette: {
      primary: {
        main: '#81d4fa',
      },
      secondary: {
        main: '#0097a7',
      },
    },
  
});

class App extends Component {
  render() {
    return (
     <div>
    <MuiThemeProvider  theme={theme}>
       <MiniDrawer  />
       </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
