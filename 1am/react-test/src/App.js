import React from 'react';
import './App.css';

export default class App extends React.Component {
  state = {
    text: '',
    posts: [],
  };

  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => {
        this.setState(state => ({
          ...state,
          posts: data,
        }));
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    return (
      <div className="container">
        <p>Open up App.js to start working on your app!</p>
        <p>Changes you make will automatically reload.</p>
        <p>Shake your phone to open the developer menu.</p>
        <input
          type="text"
          className="textInput"
          placeholder="This is a text input"
          value={this.state.text}
          onChange={({ target: { value } }) =>
            this.setState(state => ({
              ...state,
              text: value,
            }))
          }
        />
        <p>The content of the text input is [{this.state.text}]</p>
        <button onClick={() => alert('You tapped the button!')}>
          A button
        </button>
        <div className="containerDim">
          {this.state.posts.map(({ title, body }, index) => {
            return (
              <div key={`${title}${index}`} className="container">
                {title}: {body}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
