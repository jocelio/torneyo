import React, { Component } from 'react';

class MenuItem extends Component {

  render() {
    return (
        <a className="mdl-navigation__link" href={this.props.href}>
            <i className="mdl-color-text--blue-grey-400 material-icons" role="presentation">{this.props.icon}</i>
            {this.props.name}
        </a>
    );
  }
}
export default MenuItem;
