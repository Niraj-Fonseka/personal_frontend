import React, { Component } from 'react';
import MiniDrawer from './components/MiniDrawer'
//mport SignInPage from './components/SignInPage'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Grey from '@material-ui/core/colors/grey'
import './App.css';


const theme = createMuiTheme({
  palette: {
    type: 'dark', // Switching the dark mode on is a single property value change.
    primary: Grey
  },
});

// const theme = createMuiTheme({
//   palette: {
//     primary: {
//       light: '#c1d5e0',
//       main: '#90a4ae',
//       dark: '#62757f',
//       contrastText: '#000',
//     },
//     secondary: {
//       light: '#6d6d6d',
//       main: '#424242',
//       dark: '#1b1b1b',
//       contrastText: '#FFF',
//     },
//   },
// });

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
