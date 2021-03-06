import React from 'react'
import {Link, Route, Switch, BrowserRouter} from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Like from './components/createelement/Like';
import Counter from './components/createelement/Counter';


export default function App() {
    return (
        <div>
            <p>App 처음 입니다.</p>
            <div>
                <p>프로젝트 처음이 좋으면 Like 해주세요</p>
                <Like />
            </div>
            <hr />
            <Counter />
            <div>
                <Link to="/home"> Home로 이동 </Link>
            </div>
            <div>
                <Link to="/about"> About로 이동 </Link>
            </div>

            {/* <Button onClick={onMoveHome}>Home로 이동</Button>
            <Button onClick={onMoveAbout}>About로 이동</Button> */}
            <hr />
                <Switch>
                    <Route path="/about" component={About}></Route>
                    <Route path="/home" component={Home}></Route>
                </Switch>
        </div>
    )
}
