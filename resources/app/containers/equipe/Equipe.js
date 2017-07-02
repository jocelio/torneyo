import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchEquipe } from '../../actions/equipe_action';
import { bindActionCreators } from 'redux';

class Equipe extends Component {

    render(){
        return (<div>
                    {this.props.children}
                </div>)
    }

    constructor(props) {
        super(props);
    }

}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ fetchEquipe }, dispatch);
}

function mapStateToProps({ equipes }){
    return { equipes };
}

export default connect(mapStateToProps, mapDispatchToProps)(Equipe);
