import React from "react";
import $ from "jquery";
import './style.css'
import Picture from './picture'

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
        let data =[
                {
                    name: '首页',
                    children:[]
                },
                {   
                    name:'学校概况',
                    children: [
                        {
                            name: '学校简介',
                            children: []
                        },
                        {
                            name: '学院设置',
                            children: []
                        },
                        {
                            name:'师资队伍',
                            children:[]
                        }
                    ],
                },
                {
                    name:"新闻中心",
                    children:[]
                },
                {
                    name:'学科建设',
                    children:[
                        {
                            name:'硕士点',
                            children:[]
                        },
                        {
                            name:'重点学科',
                            children:[]
                        },
                        {
                            name:'重点实验室',
                            children:[]
                        }
                    ]
                },
                {
                    name:'招生就业',
                    children:[
                        {
                            name:'本科生招生',
                            children:[]
                        },
                        {
                            name:'研究生招生',
                            children:[]
                        },
                        {
                            name:'就业网',
                            children:[]
                        },
                        
                    ]
                }
            ]
        let Contents = this.generateMenu(data)
        return (
            <div>
                <div className="header">
                    <div className="header-contents">
                        <div className="header-logo"></div>
                        <div className="header-nav">
                            {Contents}
                        </div>
                    </div>
                </div>
                <Picture />
            </div>

        );
    }
}