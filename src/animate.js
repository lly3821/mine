import React,{Component}from 'react'
import './animate.css'

export default class Switch extends Component{
    state={
        active:true
    }
    handleClick = (e) =>{
        this.setState({active:!this.state.active})
        if(this.state.active){
            e.target.style.animation="open 0.5s forwards"
            e.target.style.fill="#00adef"       
            e.target.previousSibling.style.stroke="#00adef"
        }
        else{
            e.target.style.animation="close 0 forwards"
            e.target.style.fill = "grey"
            e.target.previousSibling.style.stroke="grey"
        }
    }
    render(){
        return(
            <svg width="1000" height="1000">
                <path stroke="#00adef" fill="none" d="M281.221,261.806c0,2.756-2.166,4.922-4.922,4.922l0,0h-33.964c-11.715-24.119-31.503-59.855-47.156-68.026
                    c-15.751,7.974-35.637,43.907-47.451,68.026h-33.865l0,0c-2.756,0-4.922-2.166-4.922-4.922l0,0l0,0c0-0.295,0-0.689,0.098-0.984
                    c0,0,14.078-69.109,79.15-129.161c-2.953-2.56-5.907-5.119-8.959-7.58c-1.87-1.575-2.166-4.233-0.591-6.104
                    c1.575-1.772,4.43-2.166,6.497-0.689c3.347,2.461,6.694,5.218,9.746,8.073c3.15-2.953,6.497-5.71,10.041-8.368
                    c2.067-1.378,4.922-1.083,6.497,0.689c1.575,1.87,1.28,4.529-0.591,6.104c-3.052,2.56-6.104,5.218-9.155,7.876
                    c65.27,59.953,79.446,129.161,79.446,129.161C281.221,261.117,281.221,261.412,281.221,261.806L281.221,261.806L281.221,261.806z"/>
                <path stroke="#00adef" fill="none" d="M194.589,212.583h0.984l0,0c19.886,28.451,31.503,54.145,31.503,54.145h-63.99C163.086,266.728,174.703,241.034,194.589,212.583
                    L194.589,212.583z"/>
                <rect width="40" height="20" x="10" y="10" rx="10" ry="10" fill="none" stroke="grey" />
                <circle cx="20" cy="20" r="8" fill="grey" onClick={this.handleClick} />   
            </svg>
        )
    }
}