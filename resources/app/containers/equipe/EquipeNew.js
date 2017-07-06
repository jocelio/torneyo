import React, { Component } from 'react';
import { createEquipe } from './actions/equipe_action';
import Anchor from '../../components/Anchor';
import { reduxForm } from 'redux-form';


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

    onFormSubmit(props){

        this.props.createEquipe(props);
        alert(`Equipe ${this.state.name} saved.`);

    }

    render(){

        const { fields: {name, description }, handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit(() => this.props.createEquipe())}>

                <div className="mdl-card mdl-shadow--2dp large">
                    <div className="mdl-card__title">
                        <h2 className="mdl-card__title-text">{this.props.title}</h2>
                    </div>
                    <div className="mdl-card__supporting-text">
                        <Anchor name="<< Back to Equipe List" href="equipe"/> <br/>
                        <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                            <input className="mdl-textfield__input" type="text" id="name" name="name"
                            {...name} />
                            <label className="mdl-textfield__label" htmlFor="sample3">Equipe Name...</label>
                        </div>

                        <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                            <input className="mdl-textfield__input" type="text" id="description" name="description"
                            {...description}/>
                            <label className="mdl-textfield__label" htmlFor="sample3">Equipe Description...</label>
                        </div>
                    </div>
                    <div className="mdl-card__actions mdl-card--border">
                        <input type="submit" value="Save" className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect"/>
                    </div>
                </div>
            </form>
        )
    }

    componentDidMount(){
        try{
            componentHandler.upgradeAllRegistered();
        }catch (e){}
    }

}



export default reduxForm({
    form:'NewEquipeForm',
    fields:['name','description']
}, null, {createEquipe})(EquipeMew);
