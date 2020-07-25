import React from 'react'
import {Link, Route, Switch, Router} from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';


export default function App() {
    return (
        <div>
            <p>App 처음 입니다.</p>
            <hr />
            <Router>
                <Switch>
                    <Route path="/about" component={About}></Route>
                    <Route path="/home" component={Home}></Route>
                </Switch>
            </Router>
        </div>
    )
}
