import './App.css';
import Box from "./components/core/Box";
import Looper from "./components/core/Looper";
import Container from "./components/pages/Container";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Nav from "./components/core/Nav";
function App() {
    return (
        <Router>
            <div className="App">
                <Nav/>
                <Switch>
                    <Route exact path={"/"} component={Container}/>
                    <Route path={"/looper/:color"} component={Looper}/>
                </Switch>

            </div>
        </Router>
    );
}

export default App;
