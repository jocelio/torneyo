import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchEquipe } from '../../actions/equipe_action';
import { bindActionCreators } from 'redux';
import CrudActions from '../../components/ViewActions';
import MenuItem from '../../components/MenuItem';


class Equipe extends Component {

    constructor(props) {
        super(props);
    }

    render(){
        return (
            <form action="#">

                <div className="mdl-card mdl-shadow--2dp large">
                    <div className="mdl-card__title">
                        <h2 className="mdl-card__title-text">{this.props.title}</h2>
                    </div>
                    <div className="mdl-card__supporting-text">
                        <MenuItem name="Voltar" href="equipe/" icon="book"/> <br/>
                        <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                            <input className="mdl-textfield__input" type="text" id="name"/>
                            <label className="mdl-textfield__label" htmlFor="sample3">Equipe Name...</label>
                        </div>

                        <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                            <input className="mdl-textfield__input" type="text" id="description"/>
                            <label className="mdl-textfield__label" htmlFor="sample3">Equipe Description...</label>
                        </div>
                    </div>
                    <div className="mdl-card__actions mdl-card--border">
                        <input type="submit" value="Save" className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect"/>
                    </div>
                    <CrudActions />
                </div>
            </form>
        )
    }

    componentDidMount(){
        componentHandler.upgradeAllRegistered();
    }

}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ fetchEquipe }, dispatch);
}

function mapStateToProps({ equipes }){
    return { equipes };
}

export default connect(mapStateToProps, mapDispatchToProps)(Equipe);
