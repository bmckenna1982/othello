import React, { Component } from "react";
import "./App.css";

class App extends Component {
  renderSquare(n) {
    return (
      <div className={squareClasses} onClick={props.onClick}>
        {props.value ? <div className={colorMarkerClasses}></div> : ""}
      </div>
    );
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">Let's play Othello</header>
        <div className="game-board">
          <div className="game-board-row">
            <div className="game-board-square">
              <div className="square-fill">
                {/* square fill will be absolute position and filled depending on player color when owned */}
              </div>
            </div>
            <div className="game-board-square">
              <div className="square-fill">
                {/* square fill will be absolute position and filled depending on player color when owned */}
              </div>
            </div>
            <div className="game-board-square">
              <div className="square-fill">
                {/* square fill will be absolute position and filled depending on player color when owned */}
              </div>
            </div>
            <div className="game-board-square">
              <div className="square-fill">
                {/* square fill will be absolute position and filled depending on player color when owned */}
              </div>
            </div>
            <div className="game-board-square">
              <div className="square-fill">
                {/* square fill will be absolute position and filled depending on player color when owned */}
              </div>
            </div>
            <div className="game-board-square">
              <div className="square-fill">
                {/* square fill will be absolute position and filled depending on player color when owned */}
              </div>
            </div>
            <div className="game-board-square">
              <div className="square-fill">
                {/* square fill will be absolute position and filled depending on player color when owned */}
              </div>
            </div>
            <div className="game-board-square">
              <div className="square-fill">
                {/* square fill will be absolute position and filled depending on player color when owned */}
              </div>
            </div>
          </div>
          <div className="game-board-row">
            <div className="game-board-square">
              <div className="square-fill">
                {/* square fill will be absolute position and filled depending on player color when owned */}
              </div>
            </div>
          </div>
          <div className="game-board-row">
            <div className="game-board-square">
              <div className="square-fill">
                {/* square fill will be absolute position and filled depending on player color when owned */}
              </div>
            </div>
          </div>
          <div className="game-board-row">
            <div className="game-board-square">
              <div className="square-fill">
                {/* square fill will be absolute position and filled depending on player color when owned */}
              </div>
            </div>
          </div>
          <div className="game-board-row">
            <div className="game-board-square">
              <div className="square-fill">
                {/* square fill will be absolute position and filled depending on player color when owned */}
              </div>
            </div>
          </div>
          <div className="game-board-row">
            <div className="game-board-square">
              <div className="square-fill">
                {/* square fill will be absolute position and filled depending on player color when owned */}
              </div>
            </div>
          </div>
          <div className="game-board-row">
            <div className="game-board-square">
              <div className="square-fill">
                {/* square fill will be absolute position and filled depending on player color when owned */}
              </div>
            </div>
          </div>
          <div className="game-board-row">
            <div className="game-board-square">
              <div className="square-fill">
                {/* square fill will be absolute position and filled depending on player color when owned */}
              </div>
            </div>
          </div>
          <div className="game-status">
            White's turn
            <button className="reset-game" type="button">
              Reset game
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
