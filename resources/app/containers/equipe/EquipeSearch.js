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
        this.state = {showRemoveDialog:false, showMessageDialog:false, equipe:{}, message:""};
        this.props.fetchEquipes();
    }

    handleRemoveItem(){
        this.props.deleteEquipe(this.state.equipe).then(() => {
            this.handleCloseRemoveDialog();
            this.setState({showMessageDialog: true, message:"Item deleted with success."});
        });
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


        return (
            <div>
            <table className="mdl-data-table mdl-js-data-table mdl-shadow--2dp">
                <thead>
                    <tr>
                        <th>Equipe Name</th>
                        <th>Equipe Description</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.equipes.map((e) => this.renderEquipes(e))}
                </tbody>
            </table>

            </div>)
    }

    renderEquipes(equipe){
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
