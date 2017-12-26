import React from 'react';
import './App.css';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            deadline: 'January 1, 2018',
            newDeadline: ''
        }

    }

    changeDeadline(){
        this.setState({deadline: this.state.newDeadline})
    }
    render(){
        return(
            <div className="App">
                <div className="App-title">Countdown to New Year({this.state.deadline})</div>
                <div>
                    <div className="Clock-days">days</div>
                    <div className="Clock-hrs">hrs</div>
                    <div className="Clock-mins" >mins</div>
                    <div className="Clock-secs">secs</div>
                </div>
                <div>
                    <input placeholder="new date" onChange={(event)=>this.setState({newDeadline: event.target.value})} />
                    <button onClick={ () => this.changeDeadline()}>Submit</button>
                </div>
        </div>
        );
    }
}

export default App;
