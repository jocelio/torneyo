import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchEquipe, clearEquipe } from '../../actions/equipe_action';
import { bindActionCreators } from 'redux';
import CrudActions from '../../components/ViewActions';
import MenuItem from '../../components/MenuItem';

class EquipeSearch extends Component {

    constructor(props) {
        super(props);
    }

    render(){
        return (
            <div className="mdl-card mdl-shadow--2dp large">
                <div className="mdl-card__title">
                    <h2 className="mdl-card__title-text">{this.props.title}</h2>
                </div>
                <div className="mdl-card__supporting-text">
                    <MenuItem name="Novo" href="equipe/novo" icon="book"/>
                    {this.search()}
                </div>
                <CrudActions />
            </div>
        )
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
        this.props.clearEquipe();
        this.props.fetchEquipe();
    }

}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ fetchEquipe, clearEquipe }, dispatch);
}

function mapStateToProps({ equipes }){
    return { equipes };
}

export default connect(mapStateToProps, mapDispatchToProps)(EquipeSearch);
