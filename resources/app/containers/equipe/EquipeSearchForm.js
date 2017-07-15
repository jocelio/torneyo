import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchEquipes } from './actions/equipe_action';
import { reduxForm, Field } from 'redux-form';
import { renderField } from '../../components/FieldHelper';

class EquipeSearchForm extends Component {

    constructor(props) {
        super(props);
        this.state = {showMessageDialog: false, message:''};
    }

    formSubmit(props){
        this.props.searchEquipes(props);
    }

    handleKeyPress(props){
        const {name , value} = props.target;
        console.log(name)
        this.props.searchEquipes({[name]: value});
    }

    render(){

        const { handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit((props) => this.formSubmit(props))}>

                <Field name="name" type="text" onBlur={()=>{}} onFocus={()=>{}}
                    component={renderField} label="Equipe Name"
                       onChange={(props) => this.handleKeyPress(props)}/>

                <Field name="description" type="text" onBlur={()=>{}} onFocus={()=>{}}
                    component={renderField} label="Equipe Description"
                       onChange={(props) => this.handleKeyPress(props)}/>

                <br/>

                <input type="submit" value="Search" className="mdl-button mdl-js-button mdl-button--raised"/>

            </form>
        )
    }

    componentDidMount(){
        componentHandler.upgradeAllRegistered();
    }

}

EquipeSearchForm = reduxForm({ form:'searchForm' })(EquipeSearchForm);

function mapStateToProps(state){
    return state;
}

export default connect(mapStateToProps, { searchEquipes })(EquipeSearchForm);
