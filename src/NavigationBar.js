import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {Link, BrowserRouter, Switch, Route} from 'react-router-dom';
import HomePage from './Home'
import InfoPage from './Info'
import ContactPage from './ContactPage'

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

  useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      //width: '100%',
      backgroundColor: theme.palette.background.paper,
    },
  }));

  render(){

  return (
      <BrowserRouter>
    <div>
      <AppBar position="static">
        <Tabs
          variant="fullWidth"
          value={this.state.value}
          onChange={this.handleChange}
          scrollButtons="auto"
        >
          <Tab label="HomePage" to="/" component={Link} {...a11yProps(0)} />
          <Tab label="Information" to="/info" component={Link} {...a11yProps(1)} />
          <Tab label="About PCSU" to="/spam" component={Link} {...a11yProps(2)} />
          <Tab label="FAQ" to="/spam" component={Link} {...a11yProps(2)} />
          <Tab label="Contacts and External Links" to="/contacts" component={Link} {...a11yProps(4)} />
        </Tabs>
      </AppBar>


        <Switch>
          <Route exact path='/' component = {HomePage}/>
          <Route exact path='/spam' render = {() => { return <div> <p>PlaceHolder</p></div>}}/>
          <Route exact path='/info' component = {InfoPage}/>
          <Route exact path='/contacts' component = {ContactPage}/>
        </Switch>
        
    </div>

    

    </BrowserRouter>
  );
  }

}export default NavigationBar;