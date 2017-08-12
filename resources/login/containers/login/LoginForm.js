import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {login , storeAuthCredentials, redirectIn } from './actions/actions_login';
import {styles} from '../../../../public/assets/css/login.css';

class FormLogin extends Component {

    constructor(props) {
        super(props);
    }

    handleLogin(){

        const {username, password} = this.refs;

        this.props.login({username: username.value, password:password.value}).then(response => {

            if(response.error) throw response.data;

            this.props.storeAuthCredentials(response.payload.data);
            this.props.redirectIn()

        }).catch(error => {
           alert(error);
        });

    }

    render(){
        return (<div className="mdl-layout mdl-js-layout mdl-color--grey-100">
            {process.env.API_URL} asdasd
            <main className="mdl-layout__content">
                <div className="mdl-card mdl-shadow--6dp">
                    <div className="mdl-card__title mdl-color--primary mdl-color-text--white">
                        <h2 className="mdl-card__title-text">Login</h2>
                    </div>
                    <div className="mdl-card__supporting-text">
                        <form action="/oauth/token" id="login" method="post">

                            <div className="mdl-textfield mdl-js-textfield">
                                <input className="mdl-textfield__input" type="text" id="username" name="username"
                                ref="username"/>
                                <label className="mdl-textfield__label" htmlFor="username">Username</label>
                            </div>
                            <div className="mdl-textfield mdl-js-textfield">
                                <input className="mdl-textfield__input" type="password" id="userpass" name="password"
                                ref="password"/>
                                <label className="mdl-textfield__label" htmlFor="userpass">Password</label>
                            </div>
                        </form>
                    </div>
                    <div className="mdl-card__actions mdl-card--border">
                        <button onClick={() => this.handleLogin()} className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" type="submit">Entrar</button>
                    </div>
                </div>
            </main>
        </div>)
    }

}

FormLogin.contextTypes = {
    router: PropTypes.object
};

function mapStateToProps(state){
    return state;
}

export default connect(mapStateToProps, {login, storeAuthCredentials, redirectIn})(FormLogin);
