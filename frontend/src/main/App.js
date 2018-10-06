// React
import React, {Component} from 'react'
import ReactDOM from "react-dom"
import { BrowserRouter, Switch, Route } from 'react-router-dom'

// Service worker
import registerServiceWorker from "./registerServiceWorker"

// Resources
import '../styles/App.css'

// Main
import server from './server'
import Home from './Home'
import Courses from './Courses'
import LessonMap from './LessonMap'

export function startApp() {
    ReactDOM.render(<App />, document.getElementById('root'))
    registerServiceWorker()
}

export default class App extends Component {
    render() {
        return (
            <div className="App">
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/courses" component={Courses}/>
                        <Route path="/courses" render={() => <LessonMap location={window.location.href} server={server}/>}/>
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}