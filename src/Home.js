import React from 'react';
import './Home.css';

class HomePage extends React.Component{
    constructor(){
        super();
    }
    render(){
        return (
            <div>
                <h1 className = 'Header'>Welcome! Bonjour!</h1>
                <h2> What is pharmaceutical chemistry? </h2>
            </div>
        )
    }
}
export default HomePage;