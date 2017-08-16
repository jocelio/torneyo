import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class Equipe extends Component {

    constructor(props) {
        super(props);
        this.state = {equipe:{}};
    }

    render(){
        return <MuiThemeProvider>
                    {this.props.children}
               </MuiThemeProvider>

    }

}


export default Equipe;
