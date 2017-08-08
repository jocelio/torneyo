import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchPlayer, filterPlayer } from './actions/actions_player';
import { reduxForm, Field } from 'redux-form';
import { renderField } from '../../components/FieldHelper';

class PlayerSearchForm extends Component {

    constructor(props) {
        super(props);
        this.state = {showMessageDialog: false, message:''};
    }

    formSubmit(props){
        this.props.searchPlayers(props)
            .then((response) => {
                if(response.error) throw response.payload
            }).catch((error) => {
                console.log(error)
            });
    }

    handleKeyPress(props){
        const {name , value} = props.target;
        this.props.filterPlayers(this.props.players, {[name]: value});
    }

    render(){

        const { handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit((props) => this.formSubmit(props))}>

                <Field name="name" type="text" onBlur={()=>{}} onFocus={()=>{}}
                    component={renderField} label="Name"
                       onChange={(props) => this.handleKeyPress(props)}/>

                <Field name="surname" type="text" onBlur={()=>{}} onFocus={()=>{}}
                    component={renderField} label="Surname"
                       onChange={(props) => this.handleKeyPress(props)}/>

                <br/>

            </form>
        )
    }

    componentDidMount(){
        try{componentHandler.upgradeAllRegistered();}catch (e){}
    }

}

PlayerSearchForm = reduxForm({ form:'PlayerSearchForm'})(PlayerSearchForm);

function mapStateToProps(state){

    if(state.playersState.holdPlayers)
        return {players: state.playersState.holdPlayers}

    if(state.playersState.all)
        return {players: state.playersState.all}

    return {players:[]};
}

export default connect(mapStateToProps, { searchPlayer, filterPlayer })(PlayerSearchForm);
