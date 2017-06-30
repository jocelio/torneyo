import React, { Component } from 'react';
import MenuItem from "./MenuItem";

class Menu extends Component {

  render() {
    return (
        <div className="demo-navigation mdl-navigation mdl-color--blue-grey-800">
            <MenuItem name="Home" href="" icon="home"/>
            <MenuItem name="Inbox" href="" icon="inbox"/>
        </div>
    );
  }
}
export default Menu;
