import React, { Component } from 'react';
import logo from './logo.svg';
import { connect, sendMsg } from './api'
import Header from './components/Header/Header'
import ChatHistory from './components/ChatHistory/ChatHistory'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chatHistory: []
    }
    connect();
  }

  componentDidMount(){
    connect((msg) => {
      this.setState(prevState => ({
        chatHistory: [...this.state.chatHistory, msg]
      }))
    })
  }

  send() {
    sendMsg("hello")
  }

  render() {
    return (
      <div className="App">
        <Header />
        <ChatHistory chatHistory={this.state.chatHistory} />
        <button onClick={this.send}>Hit</button>
      </div>
    )
  }

}

export default App;
