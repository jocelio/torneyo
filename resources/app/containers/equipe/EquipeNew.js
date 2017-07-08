import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createEquipe } from './actions/equipe_action';
import Anchor from '../../components/Anchor';
import { reduxForm, Field } from 'redux-form';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

class EquipeNew extends Component {

    constructor(props) {
        super(props);
        this.state = {showMessageDialog: false, message:''};
    }

    formSubmit(props){
        this.props.createEquipe(props);
        this.setState({showMessageDialog: true, message:`${props.name} created with success.`});
    }

    render(){

        const { handleSubmit } = this.props;

        return (
            <div>
            <form onSubmit={handleSubmit((props) => this.formSubmit(props))}>

                <div className="mdl-card mdl-shadow--2dp large">
                    <div className="mdl-card__title">
                        <h2 className="mdl-card__title-text">{this.props.title}</h2>
                    </div>
                    <div className="mdl-card__supporting-text">
                        <Anchor name="<< Back to Equipe List" href="equipe"/> <br/>

                        <Field name="name" type="text"
                            component={renderField} validate={[required]} label="Equipe Name"/>

                        <Field name="description" type="text"
                            component={renderField} validate={[required]} label="Equipe Description"/>

                    </div>
                    <div className="mdl-card__actions mdl-card--border">
                        <input type="submit" value="Save" className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect"/>
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
        try{
            componentHandler.upgradeAllRegistered();
        }catch (e){}
    }
}

const required = value => (value ? undefined : 'Required')

const renderField = ({
                         input,
                         label,
                         type,
                         meta: { touched, error, warning },

                     }) => (
    <div className={`mdl-textfield mdl-js-textfield mdl-textfield--floating-label ${(touched && error)?'is-invalid':''}`}>

        <input {...input} type={type}
        className="mdl-textfield__input" />

        <label className="mdl-textfield__label">{label}</label>

        {touched &&
        ((error && <span className="mdl-textfield__error">{error}</span>) ||
        (warning && <span>{warning}</span>))}
    </div>
)

EquipeNew = reduxForm({
    form:'NewEquipeForm',
})(EquipeNew);

function mapStateToProps({ equipesState }){
    return { equipesState };
}

export default connect(mapStateToProps, { createEquipe })(EquipeNew);
