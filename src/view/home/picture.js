import React,{Component} from 'react'

export default class Picture extends Component{
    state = {
        nowIndex:1,   
        active:true     
    }
    componentDidMount =()=>{
        this.setNowIndex()
    }
    //隔3秒播放下一张图片
    setNowIndex = () => {
        const self = this
        this.timer = setInterval(function(){
            if(self.state.active){
                if(self.state.nowIndex === 4){
                    return self.setState({nowIndex:1})
                }
                else{
                    return self.setState({nowIndex:self.state.nowIndex+1})
                }
            }
            else{
                return false
            }
        },3000)
    }  
    //鼠标hover，图片悬停    
    handleHover = () => {      
        this.setState({active:!this.state.active})
    }
    //点击图片圆点页，跳转对应图片
    handleClick = (e) => {
        let nowActive = Number(e.target.attributes.id.value)
        this.setState({nowIndex:nowActive})
    }
    //生成对应图片的圆点页
    getBtn = () =>{
        var cycle = []
        for (let i=1;i<=4;i++){
            if (this.state.nowIndex === i){
                cycle.push(<div style={{backgroundColor:"#e2b68d"}} onClick={this.handleClick} id={i} key={`btn`+`${i}`} className = "btn" />) 
            }
            else{
                cycle.push(<div onClick={this.handleClick} id={i} key={`btn`+`${i}`} className = "btn" />) 
            } 
        }
        return(cycle)       
    }
    render(){
        let picsrc=`http://s.amazeui.org/media/i/demos/bing-`+`${this.state.nowIndex}`+`.jpg`
        return(
            <div onMouseOver={this.handleHover} onMouseOut={this.handleHover}>
                <img className = "top-img" src = {picsrc} />
                {this.getBtn()}
            </div>
        )
    }
}