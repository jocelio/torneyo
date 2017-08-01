import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPlayers, deletePlayer, searchPlayer } from './actions/actions_player';
import Anchor from '../../components/Anchor';
import EquipeSearchForm from './EquipeSearchForm';
import { Link } from 'react-router';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

class PlayerSearch extends Component {

    constructor(props) {
        super(props);
        this.state = {showRemoveDialog:false, showMessageDialog:false, player:{}, message:"", view:'card'};
    }

    componentDidMount(){
        this.showMessage({text:`Loading...`, type:'info'});

        this.props.fetchPlayers()
            .then(response => {
                if(response.error) throw response.payload
                this.setState({showMessageDialog: false})

            }).catch(error => {
                this.showMessage({text:`Something wrong happened, please try again later.`, type:'error'});
            });
    }


    handleRemoveItem(){
        this.handleCloseRemoveDialog();
        this.props.deleteEquipe(this.state.equipe)
            .payload.response
            .then(response => {

                if(response.error) throw response.payload

                this.setState({showMessageDialog: true, message:`Item deleted with success.`});

            }).catch(error => {
                this.showMessage({text:`Something wrong happened, please try again later.`, type:'error'});
            });

        // this.props.fetchEquipes();
    }

    handleOpenRemoveDialog(player) {
        this.setState({showRemoveDialog: true, equipe: player});
    }

    handleCloseRemoveDialog(){
        this.setState({showRemoveDialog: false});
    }

    handleCloseMessageDialog(){
        this.setState({showMessageDialog: false});
    }

    changeView(){
        if(this.state.view ==='table')
            this.setState({view:'card'});
        else
            this.setState({view:'table'});
    }

    showMessage({text = '', type ='info'}){
        const message = <span className={type == 'info'?'info-message':'error-message'}>{text}</span>
        this.setState({showMessageDialog: true, message:message});
    }

    render(){

        const actions = [
             <FlatButton label="Cancel" onClick={() => this.handleCloseRemoveDialog()} />
            ,<FlatButton label="Confirm" keyboardFocused={false} onClick={() => this.handleRemoveItem()}/>,
        ];

        return (
            <div className="mdl-card mdl-shadow--2dp large">

                <div className="mdl-card__menu">

                    <Link to="equipe/new" className="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
                        <i className="material-icons new-item-icon">add_box</i>
                    </Link>

                    <button onClick={() => this.changeView()} className="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
                        <i className="material-icons">{this.state.view ==='table'?'dashboard':'grid_on'}</i>
                    </button>

                </div>
                <div className="mdl-card__title">
                    <h2 className="mdl-card__title-text">{this.props.title}</h2>
                </div>
                <div className="mdl-card__supporting-text">

                    <hr/>

                        <EquipeSearchForm />

                    <hr/>

                    {(this.state.view ==='table')?this.tableEquipes():this.listEquipes()}

                    <Dialog
                        title="Remove Item"
                        actions={actions}
                        modal={false}
                        open={this.state.showRemoveDialog}
                        onRequestClose={() => this.handleCloseRemoveDialog()}>
                        Are you sure you want to remove {this.state.player.name}?
                    </Dialog>

                    <Dialog
                        title="Message"
                        actions={<FlatButton
                            label="Close"
                            primary={true}
                            keyboardFocused={false}
                            onClick={() => this.handleCloseMessageDialog()}
                        />}
                        modal={false}
                        open={this.state.showMessageDialog}
                        onRequestClose={() => this.handleCloseMessageDialog()}>
                        {this.state.message}
                    </Dialog>

                </div>

            </div>
        )
    }


    listEquipes(){
        return (<ul> {this.props.players.map((e) => this.renderCards(e))} </ul>)
    }

    tableEquipes(){
        return (<table className="mdl-data-table mdl-js-data-table mdl-shadow--2dp">
                    <thead>
                    <tr>
                        <th>Player Name</th>
                        <th>Player Description</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                <tbody>
                    {this.props.players.map((e) => this.renderTable(e))}
                </tbody>
            </table>)
    }

    renderCards(player){
        return (
            <li key={player.id}>
                <div className="demo-card-square mdl-card mdl-shadow--2dp">
                    <div className="mdl-card__title mdl-card--expand card-image" >
                        <img src={player.image} />
                        <h2 className="mdl-card__title-text">{player.name}</h2>
                    </div>
                    <div className="mdl-card__supporting-text">
                        {player.description}
                    </div>
                    <div className="mdl-card__actions mdl-card--border">

                        <Link to={this.props.href} className="mdl-button mdl-js-button mdl-js-ripple-effect"
                              onClick={(e) => this.handleOpenRemoveDialog(player)}>Delete</Link>
                        &nbsp;
                        <Link to={`equipe/update/${player.id}`} className="mdl-button mdl-js-button mdl-js-ripple-effect">Update</Link>

                    </div>
                </div>
            </li>)
    }
    renderTable(player){
        return(
            <tr key={player.id} >
                <td>{player.name}</td>
                <td>{player.description}</td>
                <td className="td-center">

                    <Link to={this.props.href} className="mdl-button mdl-js-button mdl-js-ripple-effect"
                          onClick={(e) => this.handleOpenRemoveDialog(player)}>Delete</Link>
                    &nbsp;
                    <Anchor name="Update" href={`equipe/update/${player.id}`} className="mdl-button mdl-js-button mdl-js-ripple-effect"/>


                </td>
            </tr>
        )
    }

}

function mapStateToProps( state ){
    if(state.playersState.all)
        return {players: state.playersState.all}
   return {players:[]};
}

export default connect(mapStateToProps, { fetchPlayers, deletePlayer, searchPlayer })(PlayerSearch);
