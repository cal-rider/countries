import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Trips from "./Trips/Trips"
import Trip from "./Trip/Trip"


const App = () => {
    return (<Switch>
    
                <Route exact path="/" component={Trips}/>
                <Route exact path="/trips/:slug" component={Trip}/>
            </Switch>)
}

export default App