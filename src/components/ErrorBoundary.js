import React,{Component} from "react";

class ErrorBoundary extends Component {
    constructor(props){
        super();
        this.state={
            hasError:false
        }
    }
    render(){
        if(this.state.hasError==true)
            return <h1>Oooops that is not good :/</h1>
        else
            return this.props.children;
    }
    componentDidCatch(error,info){
        this.setState({hasError:true})
    }
}
export default ErrorBoundary;