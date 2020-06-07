import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faRandom } from "@fortawesome/free-solid-svg-icons";
import { Facebook, Twitter } from "react-sharingbuttons";
import { css } from "@emotion/core";
import BarLoader from "react-spinners/BarLoader";
const override = css`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px auto;
`;
const nicknames = {
  0: "Rome Burning in Man Form",
  1: "Mr. Brexit",
  2: "Your Favorite President",
  3: "King of Debt",
  4: "Tariff Man",
  5: "President T.",
  6: "The Chosen One",
  7: "DJT",
  8: "Cheeto Jesus",
  9: "Angry Creamsicle",
  10: "Captain Chaos",
  12: "Cadet Bone Spurs",
  13: "Orange Julius",
  14: "Screaming Carrot Demon",
  15: "World's Greatest Troll",
  16: "Godzilla with Less Foreign Policy Experience",
  17: "Tangerine Tornado",
  18: "Creep Throat",
  19: "Trumplethinskin",
  20: "Tiny Hand Sir",
  21: "Drumpf",
  22: "Fuckface Von Clownstick",
  23: "Donald Trump",
};
class QuoteTrump extends React.Component {
  render() {
    const { displayColor, quote, onClick, isLoading, index } = this.props;
    const url = "http://srijansrivastava.tech/theDonald";
    const buttonsWrapperStyles = {
      minWidth: "3vmax",
      minHeight: "2vmax",
      backgroundColor: displayColor,
      float: "left",
      textAlign: "center",
      alignItems: "center",
      justifyContent: "center",
    };
    const flexBox = {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    };

    let size = quote.length;
    let fontSizes = "";

    if (size < 100) {
      fontSizes = "4.5vmin";
    } else if (size > 100 && size < 150) {
      fontSizes = "4vmin";
    } else {
      fontSizes = "3vmin";
    }
    return (
      <div className="sweet-loading">
        <BarLoader
          css={override}
          height={2}
          width={100}
          color={displayColor}
          loading={isLoading}
        />
        <div
          id="quote-box"
          className="fadeIn"
          style={{ border: `8px solid ${displayColor}` }}
        >
          <div key={Math.random()}>
            <div className="quote-text" style={{ fontSize: fontSizes }}>
              <FontAwesomeIcon
                icon={faQuoteLeft}
                style={{ color: displayColor, margin: "0.5em 0.3em" }}
              />
              {quote}
            </div>
          </div>
          <div className="quote-author" style={{ fontSize: fontSizes }}>
            <span id="author">- {nicknames[index]}</span>{" "}
          </div>
          <div style={flexBox}>
            <button className="button" style={buttonsWrapperStyles}>
              <Facebook
                text=" "
                url={url}
                shareText={`"${quote}" \n -Donald Trump. \n Get more on - `}
              />
            </button>
            <button className="button" style={buttonsWrapperStyles}>
              <Twitter
                text=" "
                url={url}
                shareText={`"${quote}" \n -Donald Trump. \n Get more on - `}
              />
            </button>
            <button
              onClick={onClick}
              className="button"
              style={buttonsWrapperStyles}
            >
              <FontAwesomeIcon icon={faRandom} size="2x" fixedWidth />
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default QuoteTrump;
