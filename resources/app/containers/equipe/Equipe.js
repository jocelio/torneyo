import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class Equipe extends Component {

    constructor(props) {
        super(props);
        this.state = {equipe:{}};
    }


    render(){
        return (<div>
            {process.env.API_URL}
                    <MuiThemeProvider>
                        {this.props.children}
                    </MuiThemeProvider>
                </div>)
    }

}


export default Equipe;
