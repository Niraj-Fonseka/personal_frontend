import React, { Component } from 'react';
import MiniDrawer from './components/MiniDrawer'
//mport SignInPage from './components/SignInPage'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Grey from '@material-ui/core/colors/grey'
import './App.css';


const theme = createMuiTheme({
  typography: {
    fontFamily: '"Courier New"',
  },
  palette: {
    type: 'dark', // Switching the dark mode on is a single property value change.
    primary: Grey
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
