// import React from 'react';
// import './NavigationBar.css';

// class NavigationBar extends React.Component{
//     render(){
//         return(
//             <nav id = "navigationBar">
//                 <ul>
//                      <li> <a>Home Page</a> </li>
//                      <li> <a>Information</a> </li>
//                      <li> <a>About PCSU </a></li>
//                      <li> <a>FAQ </a></li>
//                      <li> <a>Contacts and External Links</a></li>
//                 </ul>
//             </nav>
//         )
//     }
// } export default NavigationBar

import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {Link, BrowserRouter} from 'react-router-dom';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    'aria-controls': `nav-tabpanel-${index}`,
  };
}

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={event => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));



class NavigationBar extends React.Component{
  constructor(props){
      super(props);
      this.state = {
        value:0
      }
  }

  handleChange = (event, newValue) => {
      this.setState({value: newValue});
  };


  render(){

  return (
      <BrowserRouter>
    <div className={this.props.root}>
      <AppBar position="static">
        <Tabs
          variant="fullWidth"
          value={this.state.value}
          onChange={this.handleChange}
          aria-label="nav tabs example"
        >
          <LinkTab label="HomePage" component={Link} to="/home" {...a11yProps(0)} />
          <LinkTab label="Information" component={Link} to="/info" {...a11yProps(1)} />
          <LinkTab label="About PCSU" href="/spam" {...a11yProps(2)} />
          <LinkTab label="FAQ" href="/spam" {...a11yProps(2)} />
          <LinkTab label="Contacts and External Links" href="/spam" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
    </div>
    </BrowserRouter>
  );
  }

}export default NavigationBar;