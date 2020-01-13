import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import { sizing } from '@material-ui/system';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import './info.css';

class InfoPage extends React.Component{
    classes = makeStyles({
        card: {
          width: 'fit-content',
          display: 'inline-block',
          
        },
        title: {
          fontSize: 14,
        },
        pos: {
          marginBottom: 12,
        },
        
      });
    

    render(){
        return (
            <div>
             {/* <h1> Pharmaceutical Chemistry Specialist Program </h1>   
             <p>
             The Pharmaceutical Chemistry Specialist program at the University of Toronto is jointly offered by the Leslie Dan Faculty of 
             Pharmacy and the Department of Chemistry, Faculty of Arts & Science. 
             Students in this program study the role of biological, medical and physical sciences in the discovery, development, manufacture, use and mode of action of drugs.

            </p>
             */}

             <Card className = {this.classes.card}>
                <CardContent>
                    <Typography className={this.classes.title}>
                        Pharmaceutical Chemistry Specialist Program
                    </Typography>

                    <Typography variant="body2" color="textSecondary" component="p">
                    The Pharmaceutical Chemistry Specialist program at the University of Toronto is jointly offered by the Leslie Dan Faculty of 
             Pharmacy and the Department of Chemistry, Faculty of Arts & Science. 
             Students in this program study the role of biological, medical and physical sciences in the discovery, development, manufacture, use and mode of action of drugs.

                    </Typography>
                </CardContent>
            </Card>
            </div> 
        )
    }
} export default InfoPage
