import React, { Component } from 'react';
import { connect } from 'react-redux';
import {login} from './actions/actions_login';
import {styles} from '../../../../public/assets/css/login.css';

class FormLogin extends Component {

    render(){
        return (<div className="mdl-layout mdl-js-layout mdl-color--grey-100">
            <main className="mdl-layout__content">
                <div className="mdl-card mdl-shadow--6dp">
                    <div className="mdl-card__title mdl-color--primary mdl-color-text--white">
                        <h2 className="mdl-card__title-text">Torneyo</h2>
                    </div>
                    <div className="mdl-card__supporting-text">
                        <form action="/oauth/token" id="login" method="post">

                            <input type="hidden" name="client_secret" value="bEoyH3MtiBgpLRRgl08wHo2sKra6Me3RuR4IJya0" />
                            <input type="hidden" name="grant_type" value="password" />
                            <input type="hidden" name="client_id" value="2" />

                            <div className="mdl-textfield mdl-js-textfield">
                                <input className="mdl-textfield__input" type="text" id="username" name="username"/>
                                <label className="mdl-textfield__label" htmlFor="username">Username</label>
                            </div>
                            <div className="mdl-textfield mdl-js-textfield">
                                <input className="mdl-textfield__input" type="password" id="userpass" name="password" />
                                <label className="mdl-textfield__label" htmlFor="userpass">Password</label>
                            </div>
                        </form>
                    </div>
                    <div className="mdl-card__actions mdl-card--border">
                        <button onClick="submit()" className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" type="submit">Entrar</button>
                    </div>
                </div>
            </main>
        </div>)
    }

}

export default connect(null, {login})(FormLogin);
