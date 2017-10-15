import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class User extends Component {

    constructor(props) {
        super(props);
    }

    render(){
        return (<MuiThemeProvider>
                    {this.props.children}
                </MuiThemeProvider>)
    }

}


export default User;
