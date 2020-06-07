import React from "react";
import QuoteTrump from "./QuoteTrump";
import "./App.css";

import Donald from "./donald.png";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      quote: [],
      isLoading: true,
      displayColor: "#333",
      randomName: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  colorRandom() {
    const hashCode = ((Math.random() * 0xffffff) << 0).toString(16);
    return `#` + hashCode;
  }
  randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  handleClick() {
    this.setState({
      isLoading: true,
    });
    fetch("https://api.whatdoestrumpthink.com/api/v1/quotes/random")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            displayColor: this.colorRandom(),
            isLoading: false,
            quote: result.message,
            randomName: this.randomNumber(0, 22),
          });
        },
        (error) => {
          this.setState({
            isLoading: false,
            error,
          });
        }
      );
  }
  componentDidMount() {
    this.handleClick();
  }
  render() {
    const { error, quote, isLoading, displayColor, randomName } = this.state;
    if (error) {
      return <div className="quote-text"> issues</div>;
    }
    return (
      <div>
        <div className="wrapper">
          <img src={Donald}></img>
          <div
            className="h1 hr-match"
            style={{ borderBottom: `5px solid ${displayColor}` }}
          >
            Donald
          </div>
        </div>
        <QuoteTrump
          displayColor={displayColor}
          quote={quote}
          onClick={this.handleClick}
          isLoading={isLoading}
          index={randomName}
        />
        <div className="footer hr-match">
          by{" "}
          <a
            href="http://srijansrivastava.tech"
            style={{ borderBottom: `5px solid ${displayColor}` }}
          >
            The Srijan
          </a>
        </div>
      </div>
    );
  }
}

export default App;
