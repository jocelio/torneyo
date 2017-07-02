import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchEquipe } from '../actions/index';
import { bindActionCreators } from 'redux';
import Crud from '../containers/crud/Crud';

class Equipe extends Component {

    constructor(props) {
        super(props);
    }

    render(){
        return (
            <Crud search={() => this.search()}
                  update={() => this.update()}
                  updateButtons={() => this.updateButtons()}
                  title="Cadastro de Equipes"  />
        )
    }

    updateButtons(){
        return (<input type="submit" value="Save" className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect"/>);
    }

    search(){
        return (
            <div>

            <table className="mdl-data-table mdl-js-data-table mdl-shadow--2dp">
                <thead>
                    <tr>
                        <th>Equipe Name</th>
                        <th>Equipe Description</th>
                        <th>Created At</th>
                        <th>Updated At</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.equipes.map(d => d.map(this.renderEquipes))}
                </tbody>
            </table>
            </div>)
    }

    update(){
        return (
            <form action="#">
                <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                    <input className="mdl-textfield__input" type="text" id="name"/>
                    <label className="mdl-textfield__label" htmlFor="sample3">Equipe Name...</label>
                </div>
            
                <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                    <input className="mdl-textfield__input" type="text" id="description"/>
                    <label className="mdl-textfield__label" htmlFor="sample3">Equipe Description...</label>
                </div>
            </form>
        )
    }

    renderEquipes(equipe){
        return(
            <tr key={equipe.id} className="">
                <td>{equipe.name}</td>
                <td>{equipe.description}</td>
                <td>{equipe.created_at}</td>
                <td>{equipe.updated_at}</td>
            </tr>
        )
    }

    componentDidMount(){
        this.props.fetchEquipe();
    }

}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ fetchEquipe }, dispatch);
}

function mapStateToProps({ equipes }){
    return { equipes };
}

export default connect(mapStateToProps, mapDispatchToProps)(Equipe);
