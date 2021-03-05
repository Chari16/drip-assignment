import React,{ Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Dashboard from './components/dashboard';
import './app.css';

class App extends Component {

    render() { 
        return (
            <Router>
                <Dashboard/>
            </Router>
        );
    }
}
 
export default App;