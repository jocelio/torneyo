import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createEquipe } from '../../actions/equipe_action';
import { bindActionCreators } from 'redux';
import CrudActions from '../../components/ViewActions';
import NavigationItem from '../../components/NavigationItem';
import { browserHistory } from 'react-router';


class EquipeMew extends Component {

    constructor(props) {
        super(props);
        this.state = {name: '', description:''};
    }

    handleInputChange(event) {
        const target = event.target;
        const name = target.name;
        this.setState({
            [name]: target.value
        });
    }

    onFormSubmit(event){
        event.preventDefault();
        this.props.createEquipe({"name": this.state.name, "description": this.state.description});
        alert(`Equipe ${this.state.name} saved.`);
        this.setState({name: '', description:''});
    }

    render(){
        return (
            <form action="#" onSubmit={(e) => this.onFormSubmit(e)}>

                <div className="mdl-card mdl-shadow--2dp large">
                    <div className="mdl-card__title">
                        <h2 className="mdl-card__title-text">{this.props.title}</h2>
                    </div>
                    <div className="mdl-card__supporting-text">
                        <NavigationItem name="Voltar" href="/#/equipe/" icon="book"/> <br/>
                        <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                            <input className="mdl-textfield__input" type="text" id="name" name="name"
                            value={this.state.name} onChange={(event) => this.handleInputChange(event)} />
                            <label className="mdl-textfield__label" htmlFor="sample3">Equipe Name...</label>
                        </div>

                        <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                            <input className="mdl-textfield__input" type="text" id="description" name="description"
                            value={this.state.description} onChange={(event) => this.handleInputChange(event)}/>
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
        try{
            componentHandler.upgradeAllRegistered();
        }catch (e){
            console.log(e)
        }
    }

}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ createEquipe }, dispatch);
}

function mapStateToProps({ equipes }){
    return { equipes };
}

export default connect(mapStateToProps, mapDispatchToProps)(EquipeMew);
