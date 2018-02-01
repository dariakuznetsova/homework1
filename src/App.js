import React, { Component } from 'react';
import './App.css';
import NewsPost from './NewsPost';

class App extends Component {
    state = {
      news: [],
      newsInput: ''
    }

    handleChange = e => {
      this.setState({newsInput: e.target.value});
    };
    
    handleNewPost = () => {
      let var1 = this.state.newsInput;
      let newItem = {
        text: var1
      }
      this.setState({news: [...this.state.news, newItem], newsInput: ''});
    };
    
    render() {
      console.log(this.state);
      return (
          <div className='App'>
            <input onChange={this.handleChange} value={this.state.newsInput}/>
            
            <button onClick={this.handleNewPost}>Добавить</button>
            <div>
              {this.state.news.map((item, i) => {
                  return (
                      <NewsPost key={i} text={item.text}/>
                  )
              })}
          </div>
          </div>
        )
    }
}

export default App;
