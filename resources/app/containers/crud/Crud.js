import React, { Component } from 'react';
import CrudActions from './CrudActions';

class Crud extends Component {

    constructor(props) {
        super(props);
        this.state = {
            view: 'search'
        };
    }

    render() {
        return (this.state.view === 'search')? this.search() : this.update();
    }

    search(){
        return (
          <div className="mdl-card mdl-shadow--2dp large">
              {this.title()}
              <div className="mdl-card__supporting-text">
                  {this.props.search()}
              </div>
              <CrudActions onClick={() => this.changeState()}/>
          </div>
        );
    }

    update(){
        return(
            <div className="mdl-card mdl-shadow--2dp large">
                {this.title()}
                <div className="mdl-card__supporting-text">
                    {this.props.update()}
                </div>
                <div className="mdl-card__actions mdl-card--border">
                    {this.props.updateButtons()}
                </div>
                <CrudActions onClick={() => this.changeState()}/>
            </div>
        );
    }

    changeState(){
        switch (this.state.view) {
            case 'search': this.setState({view: 'update'}); break;
            default: this.setState({view:'search'});
        }
    }

    title(){
        return (<div className="mdl-card__title">
                    <h2 className="mdl-card__title-text">{this.props.title}</h2>
                </div>)
    }

    componentDidUpdate(){
       componentHandler.upgradeAllRegistered();
    }
}
export default Crud;
