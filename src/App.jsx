import React from 'react';
import './App.css';

class App extends React.Component {
    render(){
        return(
            <div className="App">
                <div className="App-title">Countdown to New Year</div>
                <div>
                    <div className="Clock-days">days</div>
                    <div className="Clock-hrs">hrs</div>
                    <div className="Clock-mins" >mins</div>
                    <div className="Clock-secs">secs</div>
                </div>
                <div>
                    <input placeholder="new date" />
                    <button>Submit</button>
                </div>
            </div>
        );
    }
}

export default App;
