import React from "react";
import $ from "jquery";
import './style.css'
import data from './assets/data/nav'
import Picture from './view/home/picture'

export default class MenuPage extends React.Component {
/*     onMenuClicked  = (ev) =>{
        let node = $(ev.target);
        let subMenu = node.next();
        subMenu.css("visibility", subMenu.css('visibility') === "hidden" ? "visible" : "hidden");    
    } */
    generateMenu(menuObj) {
        let vdom = [];
        if (menuObj instanceof Array) {
            let list = [];
            for (var item of menuObj) {
                list.push(this.generateMenu(item));
            }
            vdom.push(
                <ul key='single'>
                    {list}
                </ul>
            );
        } else {
            vdom.push(
                <li key={menuObj.name}>
                    <a /* onClick={this.onMenuClicked} */>
                        {menuObj.name}
                    </a>
                    {this.generateMenu(menuObj.children)}
                </li>
            );
        }
        return vdom;
    }
    render() {
        let Contents = this.generateMenu(data)
        return (
            <div className="header">
                <div className="header-contents">
                    <div className="header-logo"></div>
                    <div className="header-nav">
                        {Contents}
                    </div>
                </div>
            </div>
        );
    }
}