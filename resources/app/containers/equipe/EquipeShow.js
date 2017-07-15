import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchEquipe, updateEquipe } from './actions/equipe_action';
import { reduxForm, Field } from 'redux-form';
import PropTypes from 'prop-types';
import Anchor from '../../components/Anchor';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import { renderField, required } from '../../components/FieldHelper';

class EquipeNew extends Component {

    constructor(props) {
        super(props);
        this.state = {showMessageDialog: false, message:''};
        this.props.fetchEquipe(this.props.params.id);
    }

    formSubmit(props){
        this.props.updateEquipe(props);
        this.showMessage({text:`${props.name} updated with success.`, type:'info'});
        this.props.reset();
        // this.context.router.push('/equipe');

    }

    showMessage({text = '', type ='info'}){
        const message = <span className={type == 'info'?'info-message':'error-message'}>{text}</span>
        this.setState({showMessageDialog: true, message:message});
    }

    render(){

        if(!this.props.equipe){
            return <div>Loading...</div>
        }

        const { handleSubmit} = this.props;
        return (
            <div>
            <form onSubmit={handleSubmit((props) => this.formSubmit(props))}>

                <div className="mdl-card mdl-shadow--2dp large">
                    <div className="mdl-card__title">
                        <h2 className="mdl-card__title-text">{this.props.title}</h2>
                    </div>
                    <div className="mdl-card__supporting-text">

                        <Field name="name" type="text" value="teste"
                            component={renderField} validate={[required]} label="Equipe Name"/>

                        <Field name="description" type="text"
                            component={renderField} validate={[required]} label="Equipe Description"/>

                    </div>
                    <div className="mdl-card__actions mdl-card--border">
                        <input type="submit" value="Update" className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect"/>
                        <Anchor name="Cancel" href="equipe" className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect"/>
                    </div>
                </div>
            </form>
                <Dialog
                    title="Message"
                    actions={<FlatButton
                        label="Close"
                        primary={true}
                        keyboardFocused={false}
                        onClick={() => this.setState({showMessageDialog: false})}
                    />}
                    modal={false}
                    open={this.state.showMessageDialog}
                    onRequestClose={() => this.setState({showMessageDialog: false})}>
                    {this.state.message}
                </Dialog>
            </div>
        )
    }

    componentDidMount(){
        try{componentHandler.upgradeAllRegistered();}catch (e){}
    }
}


EquipeNew.contextTypes = {
    router: PropTypes.object
};

EquipeNew = reduxForm({ form:'NewEquipeForm'})(EquipeNew);

function mapStateToProps(state){
    const {equipe} = state.equipesState;
    if(state.equipesState.equipe) {
        return {
                    equipe: state.equipesState.equipe
                    , initialValues: {
                            name:equipe.name
                          , description:equipe.description
                          , id:equipe.id
                    }
        }
    }
    return { equipe:{}}
}

export default connect(mapStateToProps, {fetchEquipe, updateEquipe })(EquipeNew);
