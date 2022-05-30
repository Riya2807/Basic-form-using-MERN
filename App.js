import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
class App extends Component {
    constructor(props) {
        super(props);
        this.state = { apiResponse: "", name: "" };
        this.updateName = this.updateName.bind(this);
        this.callAPI = this.callAPI.bind(this);
    }

    callAPI() {
        fetch("http://localhost:9000/testAPI?name="+ this.state.name)
            .then(res => res.text())
            .then(res => this.setState({ apiResponse: res }));
             
    }

    componentWillMount() {
   //     this.callAPI();
    }
    updateName(event) {
        console.log(event.target.value);
        this.setState({name:event.target.value})
    }
    /*
    const handleSubmit=()=> { 
        const postURL = "mongodb://localhost:27017/mydb" 
        fetch(postURL, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 
                userName: userName,
                clockedIn:false,
                dates:[]
            })
        })
        .then(()=>{
            // Once posted, the user will be notified 
            alert('Username added');
        })
    }
*/
    render() {

        return (
            <div className="App">
                    <h1>Enter your Username </h1>
                    <form /*onSubmit={handleSubmit}*/>
                        <label>
                            <p>
                                Username
                            </p>
                            <input name="name" onChange={this.updateName} />
                        </label>
                        <button type="button" onClick={this.callAPI }>Submit</button>
                    </form>
                    <h1>{this.state.name}</h1>
                

            </div>
        );

    }

}
export default App;