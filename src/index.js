import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import {
    Route,
    NavLink,
    BrowserRouter as Router,
    Switch,
} from 'react-router-dom'
import App from './App'
import Login from './login'
import Person from './person'
import Scheme from './scheme'
import Funds from './funds'
import Inf from './inf'
import Tourism from './tourism'
import Complaints from './complaints'
import Donations from './donations'
import Payment from './payment'
import LWC from './lwc'
import Edu from './edu'
import HIS from "./his";
import More from './more'
import Getin from "./getin";
import IMP from "./imp";
import Add from "./add";
import Update from "./update";
import COM from "./com";
import Dono from "./dono";
import Dev from "./dev";
import MO from "./mo";
import Getinc from "./getinc";
import IMP1 from './imp1'
import Fun from "./fun";
const routing = (
    <Router>
        <div>
            <Switch>

                <Route path="/login" component={Login} />
                <Route path="/person" component={Person}/>
                <Route path="/scheme" component={Scheme}/>
                <Route path="/funds" component={Funds}/>
                <Route path="/tourism" component={Tourism} />
                <Route path="/complaints" component={Complaints}/>
                <Route path="/donations" component={Donations}/>
                <Route path="/payment" component={Payment}/>
                <Route path="/dev" component={Dev} />
                <Route path="/lwc" component={LWC}/>
                <Route path="/edu" component={Edu}/>
                <Route path="/his" component={HIS}/>
                <Route path="/more" component={More}/>
                <Route path="/getin" component={Getin} />
                <Route exact path="/" component={App} />
                <Route path="/inf" component={Inf} />
                <Route path="/imp" component={IMP} />
                <Route path="/add" component={Add} />
                <Route path="/update" component={Update} />
                <Route path="/com" component={COM} />
                <Route path="/dono" component={Dono} />
                <Route path="/mo" component={MO} />
                <Route path="/getinc" component={Getinc} />
                <Route path="/imp1" component={IMP1} />
                <Route path="/fun" component={Fun} />
            </Switch>


        </div>
    </Router>
)
ReactDOM.render(routing, document.getElementById('root'))