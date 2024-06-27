import {Component} from 'react'
import {Link} from 'react-router-dom'

import './index.css'

class GamingHomeScreen extends Component {
  render() {
    return (
      <>
        <div className="bg-container">
          <h1 className="main-heading">Games</h1>
          <div className="games-list-container">
            <Link to="/emoji-game" className="cards">
              <p className="game-name">Emoji Game</p>
              <img
                src="https://res.cloudinary.com/dv6ikqksk/image/upload/v1708940215/Group_7471_ghhl2x.png"
                className="emoji-game-image"
                alt="emoji game"
              />
            </Link>
            <Link to="/memory-matrix" className="cards">
              <p className="game-name">Memory Matrix</p>
              <img
                src="https://res.cloudinary.com/dv6ikqksk/image/upload/v1708940282/memory_umdawk.png"
                className="emoji-game-image"
                alt="memory matrix"
              />
            </Link>
            <Link to="/rock-paper-scissor" className="cards">
              <p className="game-name">ROCK PAPER SCISSOR</p>
              <img
                src="https://res.cloudinary.com/dv6ikqksk/image/upload/v1708940372/Group_7469_pgztk8.png"
                className="emoji-game-image"
                alt="rock paper scissor"
              />
            </Link>
            <Link to="/card-flip-memory-game" className="cards">
              <p className="game-name">Card-Flip Memory Game</p>
              <img
                src="https://res.cloudinary.com/dv6ikqksk/image/upload/v1708931172/animals_cfihi9.png"
                className="emoji-game-image"
                alt="card flip memory game"
              />
            </Link>
          </div>
        </div>
      </>
    )
  }
}

export default GamingHomeScreen