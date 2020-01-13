import FacebookIcon from '@material-ui/icons/Facebook';
import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import LanguageIcon from '@material-ui/icons/Language';

class ContactPage extends React.Component{
    render(){
        return (
            <div>
                <span><FacebookIcon fontSize="large"/></span> <a href='https://www.facebook.com/pcsu.pharmchem/'> @pcsu.pharmchem</a>
                <br/>
                <span><InstagramIcon fontSize="large"/></span> <a href='https://www.instagram.com/uoft_pharmchem/?hl=en'> @uoft_pharmchem</a>
                <br/>
                <span><LanguageIcon fontSize="large"/></span> <a href='https://www.chemistry.utoronto.ca/undergraduate/programs-studies/pharmaceutical-chemistry-specialist'> Pharmaceutical Chemistry Specialist</a>

            </div>
        )
    }
} export default ContactPage;
