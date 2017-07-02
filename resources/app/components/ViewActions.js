import React, { Component } from 'react';

class CrudAction extends Component {

    constructor(props) {
        super(props);
    }

    render(){
        return (<div className="mdl-card__menu">
            <button className="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect"
                    onClick={this.props.onClick} >
                <i className="material-icons">share</i>
            </button>
        </div>);
    }


}

export default CrudAction;