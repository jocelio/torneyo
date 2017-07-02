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
            {this.props.equipes}
            <table className="mdl-data-table mdl-js-data-table mdl-data-table--selectable mdl-shadow--2dp">
            <thead>
            <tr>
                <th className="mdl-data-table__cell--non-numeric">Material</th>
                <th>Quantity</th>
                <th>Unit price</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td className="mdl-data-table__cell--non-numeric">Acrylic (Transparent)</td>
                <td>25</td>
                <td>$2.90</td>
            </tr>
            <tr>
                <td className="mdl-data-table__cell--non-numeric">Plywood (Birch)</td>
                <td>50</td>
                <td>$1.25</td>
            </tr>
            <tr>
                <td className="mdl-data-table__cell--non-numeric">Laminate (Gold on Blue)</td>
                <td>10</td>
                <td>$2.35</td>
            </tr>
            </tbody>
        </table>
            </div>)
    }

    update(){
        return (
            <form action="#">
                <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                    <input className="mdl-textfield__input" type="text" id="sample3"/>
                    <label className="mdl-textfield__label" htmlFor="sample3">Text...</label>
                </div>
            
                <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                    <input className="mdl-textfield__input" type="text" pattern="-?[0-9]*(\.[0-9]+)?" id="sample4"/>
                    <label className="mdl-textfield__label" htmlFor="sample4">Number...</label>
                    <span className="mdl-textfield__error">Input is not a number!</span>
                </div>
            </form>
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
