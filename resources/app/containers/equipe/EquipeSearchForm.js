import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createEquipe } from './actions/equipe_action';
import { reduxForm, Field } from 'redux-form';
import PropTypes from 'prop-types';
import { renderField } from '../../components/FieldHelper';

class EquipeSearchForm extends Component {

    constructor(props) {
        super(props);
        this.state = {showMessageDialog: false, message:''};
    }

    formSubmit(props){
        this.props.searchEquipe(props)
    }

    render(){

        const { handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit((props) => this.formSubmit(props))}>

                <Field name="name" type="text"
                    component={renderField} label="Equipe Name"/>

                <Field name="description" type="text"
                    component={renderField} label="Equipe Description"/>



                <br/>

                <input type="submit" value="Search" className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect"/>

            </form>
        )
    }

}

EquipeSearchForm.contextTypes = {
    router: PropTypes.object
};

EquipeSearchForm = reduxForm({
    form:'EquipeSearchForm',
})(EquipeSearchForm);

function mapStateToProps({ equipesState }){
    return { equipesState };
}

export default connect(mapStateToProps, { createEquipe })(EquipeSearchForm);
