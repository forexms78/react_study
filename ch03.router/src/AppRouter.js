import React, { Component } from "react";
import {Route, Link, Switch, withRouter} from 'react-router-dom';
import {Home, About, Posts} from './views';

class AppRouter extends Component {
    render() {
        return (
            <div>

                {/* 라우터 Link 방식*/}
                <Link to="/home">go home</Link><br/>
                <Link to="/about">go about</Link><br/>
                <Link to="/about/testParameter">go about Parameter</Link>
                <li><Link to="/posts">Posts</Link></li>

                {/* 라우터 history방식 */}               
                <button onClick={()=>{this.props.history.push('/home')}}>go home</button>
                <button onClick={()=>{this.props.history.push('/about')}}>go about</button>
                <button onClick={()=>{this.props.history.push('/about/testParameter')}}>go about Parameter</button>

                <Route path="/home" component={Home}/>
                <Switch>
                    <Route path="/about/:name" component={About}/>
                    <Route path="/about" component={About}/>
                </Switch>

                <Route path="/posts" component={Posts}/>
            </div>
        );
    }
}

const WithApp = withRouter(AppRouter);
export default WithApp;