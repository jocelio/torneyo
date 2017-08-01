import React, { Component } from 'react';
import MenuItem from "./MenuItem";

class Menu extends Component {

  render() {
    return (
        <div className="demo-navigation mdl-navigation mdl-color--blue-grey-800 ">
            <MenuItem name="Equipes" href="/equipe" icon="book"/>
            <MenuItem name="Jogadores" href="/players" icon="pets"/>
            <MenuItem name="Home" href="/home" icon="home"/>
        </div>
    );
  }
}
export default Menu;
