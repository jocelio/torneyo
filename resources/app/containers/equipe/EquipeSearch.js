import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchEquipes, clearEquipe, deleteEquipe } from './actions/equipe_action';
import Anchor from '../../components/Anchor';
import {Link} from 'react-router';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';


class EquipeSearch extends Component {

    constructor(props) {
        super(props);
        this.state = {showRemoveDialog:false, showMessageDialog:false, equipe:{}, message:"", view:'table'};
        this.props.fetchEquipes();
    }


    handleRemoveItem(){
        this.props.deleteEquipe(this.state.equipe).then(() => {
             this.handleCloseRemoveDialog();
             this.setState({showMessageDialog: true, message:"Item deleted with success."});
        });
        this.props.fetchEquipes();
    }

    handleOpenRemoveDialog(equipe) {
        this.setState({showRemoveDialog: true, equipe: equipe});
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
    render(){

        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onClick={() => this.handleCloseRemoveDialog()}
            />,
            <FlatButton
                label="Confirm"
                primary={true}
                keyboardFocused={false}
                onClick={() => this.handleRemoveItem()}
            />,
        ];

        return (
            <div className="mdl-card mdl-shadow--2dp large">
                <div className="mdl-card__menu">
                    <button onClick={() => this.changeView()} className="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
                        <i className="material-icons">{this.state.view ==='table'?'grid_on':'dashboard'}</i>
                    </button>
                </div>
                <div className="mdl-card__title">
                    <h2 className="mdl-card__title-text">{this.props.title}</h2>
                </div>
                <div className="mdl-card__supporting-text">

                    <Link to="equipe/new" icon="book">
                        New Equipe
                    </Link>

                    {this.search()}

                    <Dialog
                        title="Remove Item"
                        actions={actions}
                        modal={false}
                        open={this.state.showRemoveDialog}
                        onRequestClose={() => this.handleCloseRemoveDialog()}>
                        Are you sure you want to remove {this.state.equipe.name}?
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

    search(){
        if(this.state.view ==='table'){
            return (
                    <ul>
                        {this.props.equipes.map((e) => this.renderCards(e))}
                    </ul>
            )
        }else{
            return (<table className="mdl-data-table mdl-js-data-table mdl-shadow--2dp">
                <thead>
                <tr>
                    <th>Equipe Name</th>
                    <th>Equipe Description</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {this.props.equipes.map((e) => this.renderTable(e))}
                </tbody>
            </table>)
        }
    }

    renderCards(equipe){
        return (
            <li key={equipe.id}>
                <div className="demo-card-square mdl-card mdl-shadow--2dp">
                <div className="mdl-card__title mdl-card--expand">
                    <h2 className="mdl-card__title-text">{equipe.name}</h2>
                </div>
                <div className="mdl-card__supporting-text">
                    {equipe.description}
                </div>
                <div className="mdl-card__actions mdl-card--border">
                    <Link to={this.props.href} className="mdl-button mdl-js-button mdl-js-ripple-effect"
                          onClick={(e) => this.handleOpenRemoveDialog(equipe)}>Delete</Link>
                    &nbsp;
                    <Anchor name="Update" href={`equipe/update/${equipe.id}`} className="mdl-button mdl-js-button mdl-js-ripple-effect"/>

                </div>
                </div>
            </li>)
    }
    renderTable(equipe){
        return(
            <tr key={equipe.id} >
                <td>{equipe.name}</td>
                <td>{equipe.description}</td>
                <td className="td-center">

                    <Link to={this.props.href} className="mdl-button mdl-js-button mdl-js-ripple-effect"
                          onClick={(e) => this.handleOpenRemoveDialog(equipe)}>Delete</Link>
                    &nbsp;
                    <Anchor name="Update" href={`equipe/update/${equipe.id}`} className="mdl-button mdl-js-button mdl-js-ripple-effect"/>

                </td>
            </tr>
        )
    }

}


function mapStateToProps( state ){
    if(state.equipesState.all)
        return {equipes: state.equipesState.all}
   return {equipes:[]};
}

export default connect(mapStateToProps, { fetchEquipes, clearEquipe, deleteEquipe })(EquipeSearch);
