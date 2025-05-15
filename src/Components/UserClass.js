import React from "react";
class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count:1
        }
        console.log('child constructor' + this.props.name)
    }
    componentDidMount(){
        console.log("child mount"+this.props.name)
    }
    render(){
            console.log('child render'+ this.props.name)
        return (
            <div>
                <h1>Helooooooooooo {this.props.name}</h1>
                <button onClick={
                    () =>{
                        this.setState({
                            count :this.state.count +1
                        })
                    }
                }>count increase</button>
                <h2>{this.state.count}</h2>
            </div>
        )
            
        
    }
}

export default UserClass;