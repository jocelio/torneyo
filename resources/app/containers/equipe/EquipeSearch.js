import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchEquipe, clearEquipe, deleteEquipe } from '../../actions/equipe_action';
import { bindActionCreators } from 'redux';
import CrudActions from '../../components/ViewActions';
import MenuItem from '../../components/MenuItem';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';


class EquipeSearch extends Component {

    constructor(props) {
        super(props);
        this.state = {showRemoveDialog:false, showMessageDialog:false, equipe:{}, message:""};
    }

    handleRemoveItem(){
        this.props.deleteEquipe(this.state.equipe);
        this.handleCloseRemoveDialog();
        this.setState({showMessageDialog: true, message:"Item deleted with success."});
        this.props.fetchEquipe();
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
                    <MenuItem name="Novo" href="equipe/novo" icon="book"/>
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
                <CrudActions />
            </div>
        )
    }

    search(){
        const eq = this.props.equipesState;
        console.log(eq);
        return (
            <div>
            <table className="mdl-data-table mdl-js-data-table mdl-shadow--2dp">
                <thead>
                    <tr>
                        <th>Equipe Name</th>
                        <th>Equipe Description</th>
                        <th>Created At</th>
                        <th>Updated At</th>
                        <th>Action</th>

                    </tr>
                </thead>
                <tbody>
                    {eq.map(d => d.map((e) => this.renderEquipes(e)))}
                </tbody>
            </table>

            </div>)
    }

    renderEquipes(equipe){
        return(
            <tr key={equipe.id} className="">
                <td>{equipe.name}</td>
                <td>{equipe.description}</td>
                <td>{equipe.created_at}</td>
                <td>{equipe.updated_at}</td>
                <td>
                    <RaisedButton label="Remove" onClick={() => this.handleOpenRemoveDialog(equipe)} />
                </td>
            </tr>
        )
    }

    componentDidMount(){
        this.props.clearEquipe();
        this.props.fetchEquipe();
    }



}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ fetchEquipe, clearEquipe, deleteEquipe }, dispatch);
}

function mapStateToProps({ equipesState }){
    return { equipesState };
}

export default connect(mapStateToProps, mapDispatchToProps)(EquipeSearch);
